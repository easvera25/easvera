import React from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/content';
import './Blog.css';  // Create this CSS file with styles below

const Blog: React.FC = () => {
    return (
        <div className="blog-page">
            <div className="container">
                <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Tech Blog</h1>
                <div className="blog-grid">
                    {blogArticles.map(article => (
                        <Link key={article.id} to={`/blog/${article.slug}`} className="blog-tile">
                            <div className="blog-image">
                                {article.imageUrl ? (
                                    <img src={article.imageUrl} alt={article.title} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                                ) : (
                                    <span role="img" aria-label="blog icon" style={{ fontSize: '3rem' }}>
                                        📝
                                    </span>
                                )}
                            </div>
                            <h3 className="blog-title">{article.title}</h3>
                            <p className="blog-excerpt">{article.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
