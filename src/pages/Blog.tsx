import React from 'react';
import Hero from '../components/Hero';
import { blogArticles } from '../data/content';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
    return (
        <div>
            <Hero
                title="Tech Blog"
                subtitle="Latest insights and industry trends"
                primaryButton={{ text: "Subscribe", href: "/contact" }}
            />
            <div className="section">
                <div className="container">
                    <h2>Blog Posts Coming Soon...</h2>
                </div>
            </div>
            <div className="blog-list">
                {blogArticles.map(article => (
                    <div key={article.id} className="blog-preview">
                        <h2>{article.title}</h2>
                        <p>{article.excerpt}</p>
                        <Link to={`/blog/${article.slug}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
