
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - in a real app, you'd fetch this based on the slug
  const mockPost = {
    title: "The Future of Digital Transformation",
    author: "Sarah Johnson",
    publishDate: "December 22, 2024",
    featuredImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
    content: `
      <p>Digital transformation has become more than just a buzzword—it's the cornerstone of modern business strategy. As we navigate an increasingly connected world, organizations must adapt to remain competitive and relevant.</p>
      
      <h2>Understanding the Digital Landscape</h2>
      <p>The digital revolution has fundamentally changed how we work, communicate, and conduct business. From cloud computing to artificial intelligence, these technologies are reshaping entire industries.</p>
      
      <p>Companies that embrace digital transformation often see significant improvements in efficiency, customer satisfaction, and overall profitability. However, the journey requires careful planning and execution.</p>
      
      <h2>Key Components of Success</h2>
      <p>Successful digital transformation initiatives typically focus on three core areas:</p>
      <ul>
        <li><strong>Technology Infrastructure:</strong> Building robust, scalable systems that can adapt to changing needs.</li>
        <li><strong>Process Optimization:</strong> Streamlining workflows and eliminating inefficiencies.</li>
        <li><strong>Cultural Change:</strong> Fostering a digital-first mindset throughout the organization.</li>
      </ul>
      
      <p>At Velynt Global, we've seen firsthand how these elements work together to create transformative results for our clients.</p>
      
      <h2>Looking Ahead</h2>
      <p>The future of digital transformation will be shaped by emerging technologies like machine learning, IoT, and blockchain. Organizations that start preparing now will be best positioned to capitalize on these opportunities.</p>
    `
  };

  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      
      <main className="pt-20">
        {/* Featured Image */}
        <div className="w-full h-96 bg-gradient-to-r from-velynt-navy to-velynt-cyan/20 relative overflow-hidden">
          <img 
            src={mockPost.featuredImage} 
            alt={mockPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velynt-dark/30"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl py-12">
          {/* Post Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-velynt-white mb-6 leading-tight">
              {mockPost.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-velynt-text">
              <span className="font-medium text-velynt-white">By {mockPost.author}</span>
              <span className="text-velynt-cyan">•</span>
              <time className="text-sm">{mockPost.publishDate}</time>
            </div>
          </header>

          {/* Post Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div 
              className="text-velynt-text leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: mockPost.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
              }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
