import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearnQA from './pages/LearnQA';
import WebDevelopment from './pages/WebDevelopment';
import ITSupport from './pages/ITSupport';
import Blog from './pages/Blog';
import BlogPost from './pages/blog/BlogPost'; 
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn-qa" element={<LearnQA />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/it-support" element={<ITSupport />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
