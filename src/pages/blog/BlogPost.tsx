import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // <-- Make sure this import is used!
import { blogArticles } from '../../data/content';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(post => post.slug === slug);

  if (!article) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>{article.title}</h1>
      <p><i>{article.date} • {article.author}</i></p>
      <hr />
      <ReactMarkdown>{article.content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
