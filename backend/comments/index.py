'''API для управления комментариями к тесту'''
import json
import os
import psycopg2
from datetime import datetime

def handler(event: dict, context) -> dict:
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password'
            },
            'body': ''
        }

    dsn = os.environ.get('DATABASE_URL')
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    if not dsn:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Database not configured'})
        }

    conn = psycopg2.connect(dsn, options=f'-c search_path={schema}')
    cur = conn.cursor()

    try:
        if method == 'GET':
            query = f'''
                WITH RECURSIVE comment_tree AS (
                    SELECT id, author_name, content, parent_comment_id, created_at, 0 as depth
                    FROM {schema}.comments
                    WHERE parent_comment_id IS NULL
                    UNION ALL
                    SELECT c.id, c.author_name, c.content, c.parent_comment_id, c.created_at, ct.depth + 1
                    FROM {schema}.comments c
                    JOIN comment_tree ct ON c.parent_comment_id = ct.id
                )
                SELECT id, author_name, content, parent_comment_id, created_at, depth
                FROM comment_tree
                ORDER BY created_at DESC
            '''
            cur.execute(query)
            
            rows = cur.fetchall()
            comments = []
            for row in rows:
                comments.append({
                    'id': row[0],
                    'authorName': row[1],
                    'content': row[2],
                    'parentCommentId': row[3],
                    'createdAt': row[4].isoformat() if row[4] else None,
                    'depth': row[5]
                })

            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'comments': comments})
            }

        elif method == 'POST':
            data = json.loads(event.get('body', '{}'))
            author_name = data.get('authorName', 'Аноним')
            content = data.get('content', '')
            parent_comment_id = data.get('parentCommentId')

            if not content.strip():
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Comment content is required'})
                }

            insert_query = f'INSERT INTO {schema}.comments (author_name, content, parent_comment_id) VALUES (%s, %s, %s) RETURNING id, created_at'
            cur.execute(insert_query, (author_name, content, parent_comment_id))
            
            result = cur.fetchone()
            conn.commit()

            return {
                'statusCode': 201,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'id': result[0],
                    'authorName': author_name,
                    'content': content,
                    'parentCommentId': parent_comment_id,
                    'createdAt': result[1].isoformat()
                })
            }

        elif method == 'DELETE':
            admin_password = event.get('headers', {}).get('X-Admin-Password', '')
            correct_password = os.environ.get('ADMIN_PASSWORD', 'admin123')
            
            if admin_password != correct_password:
                return {
                    'statusCode': 403,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Неверный пароль администратора'})
                }
            
            params = event.get('queryStringParameters', {})
            comment_id = params.get('id')
            
            if not comment_id:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Comment ID is required'})
                }
            
            delete_query = f'DELETE FROM {schema}.comments WHERE id = %s'
            cur.execute(delete_query, (comment_id,))
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True})
            }

        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    finally:
        cur.close()
        conn.close()