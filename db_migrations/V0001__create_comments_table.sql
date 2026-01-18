CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  author_name VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  parent_comment_id INTEGER REFERENCES comments(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_comments_parent ON comments(parent_comment_id);
CREATE INDEX idx_comments_created_at ON comments(created_at DESC);