import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Comment {
  id: number;
  authorName: string;
  content: string;
  parentCommentId: number | null;
  createdAt: string;
  depth: number;
}

const COMMENTS_API_URL = 'https://functions.poehali.dev/60f93903-ed45-4093-8cd1-c00685b552c9';

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyAuthorName, setReplyAuthorName] = useState('');
  const [replyContent, setReplyContent] = useState('');

  const fetchComments = async () => {
    try {
      const response = await fetch(COMMENTS_API_URL);
      const data = await response.json();
      setComments(data.comments || []);
    } catch (error) {
      toast.error('Не удалось загрузить комментарии');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error('Напишите комментарий');
      return;
    }

    try {
      const response = await fetch(COMMENTS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authorName: authorName.trim() || 'Аноним',
          content: content.trim(),
          parentCommentId: null
        })
      });

      if (response.ok) {
        toast.success('Комментарий добавлен!');
        setAuthorName('');
        setContent('');
        fetchComments();
      } else {
        toast.error('Ошибка при добавлении комментария');
      }
    } catch (error) {
      toast.error('Не удалось отправить комментарий');
    }
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!replyContent.trim()) {
      toast.error('Напишите ответ');
      return;
    }

    try {
      const response = await fetch(COMMENTS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authorName: replyAuthorName.trim() || 'Аноним',
          content: replyContent.trim(),
          parentCommentId: replyTo
        })
      });

      if (response.ok) {
        toast.success('Ответ добавлен!');
        setReplyTo(null);
        setReplyAuthorName('');
        setReplyContent('');
        fetchComments();
      } else {
        toast.error('Ошибка при добавлении ответа');
      }
    } catch (error) {
      toast.error('Не удалось отправить ответ');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const topLevelComments = comments.filter(c => c.parentCommentId === null);
  const getReplies = (parentId: number) => comments.filter(c => c.parentCommentId === parentId);

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="MessageSquare" size={24} />
            Комментарии к тесту
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Ваше имя (необязательно)"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              maxLength={100}
            />
            <Textarea
              placeholder="Оставьте свой комментарий о тесте..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              maxLength={1000}
            />
            <Button type="submit" className="w-full">
              <Icon name="Send" size={18} className="mr-2" />
              Отправить комментарий
            </Button>
          </form>

          {loading ? (
            <div className="text-center py-8 text-gray-500">
              <Icon name="Loader2" size={32} className="animate-spin mx-auto mb-2" />
              Загрузка комментариев...
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Icon name="MessageSquare" size={48} className="mx-auto mb-2 opacity-30" />
              <p>Пока нет комментариев. Будьте первым!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {topLevelComments.map(comment => (
                <div key={comment.id} className="space-y-3">
                  <div className="DELETE FROM comments WHERE author_name = 'Тестовый пользователь'">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={20} className="text-purple-600" />
                        <span className="font-semibold text-gray-900">{comment.authorName}</span>
                      </div>
                      <span className="text-xs text-gray-500">{formatDate(comment.createdAt)}</span>
                    </div>
                    <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                      className="mt-2"
                    >
                      <Icon name="Reply" size={16} className="mr-1" />
                      Ответить
                    </Button>

                    {replyTo === comment.id && (
                      <form onSubmit={handleReply} className="mt-3 space-y-2 pl-6 border-l-2 border-purple-300">
                        <Input
                          placeholder="Ваше имя (необязательно)"
                          value={replyAuthorName}
                          onChange={(e) => setReplyAuthorName(e.target.value)}
                          maxLength={100}
                        />
                        <Textarea
                          placeholder="Ваш ответ..."
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          rows={2}
                          maxLength={1000}
                          autoFocus
                        />
                        <div className="flex gap-2">
                          <Button type="submit" size="sm">
                            <Icon name="Send" size={16} className="mr-1" />
                            Отправить
                          </Button>
                          <Button type="button" size="sm" variant="outline" onClick={() => setReplyTo(null)}>
                            Отмена
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>

                  {getReplies(comment.id).map(reply => (
                    <div key={reply.id} className="ml-8 bg-purple-50 rounded-lg p-4 border-l-4 border-purple-300">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon name="CornerDownRight" size={16} className="text-purple-500" />
                          <Icon name="User" size={18} className="text-purple-500" />
                          <span className="font-semibold text-gray-900">{reply.authorName}</span>
                        </div>
                        <span className="text-xs text-gray-500">{formatDate(reply.createdAt)}</span>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">{reply.content}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Comments;