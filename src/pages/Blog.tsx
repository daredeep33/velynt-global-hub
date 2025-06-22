
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Blog = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      slug: "digital-transformation-guide",
      title: "The Future of Digital Transformation",
      excerpt: "Digital transformation has become more than just a buzzword—it's the cornerstone of modern business strategy.",
      category: "Business Strategy",
      featuredImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=338&fit=crop"
    },
    {
      id: 2,
      slug: "visa-application-tips",
      title: "Essential Visa Application Tips for 2024",
      excerpt: "Navigate the complex world of visa applications with our comprehensive guide covering the latest requirements.",
      category: "Visa Tips",
      featuredImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=338&fit=crop"
    },
    {
      id: 3,
      slug: "international-business-trends",
      title: "International Business Trends to Watch",
      excerpt: "Stay ahead of the curve with insights into emerging trends shaping the global business landscape.",
      category: "Global Business",
      featuredImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=338&fit=crop"
    },
    {
      id: 4,
      slug: "technology-innovation-insights",
      title: "Technology Innovation in Modern Enterprises",
      excerpt: "Explore how cutting-edge technology is revolutionizing business operations across various industries.",
      category: "Technology",
      featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=338&fit=crop"
    },
    {
      id: 5,
      slug: "global-market-analysis",
      title: "Understanding Global Market Dynamics",
      excerpt: "A deep dive into the factors that drive international markets and their impact on business decisions.",
      category: "Market Analysis",
      featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=338&fit=crop"
    },
    {
      id: 6,
      slug: "remote-work-strategies",
      title: "Remote Work Strategies for Global Teams",
      excerpt: "Best practices for managing distributed teams and maintaining productivity across different time zones.",
      category: "Remote Work",
      featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=338&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-velynt-white mb-6">
              The Velynt Global Journal
            </h1>
            <p className="text-lg text-velynt-text max-w-2xl mx-auto">
              Insights, guides, and updates to help you navigate your international journey.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-velynt-navy/30 rounded-lg border border-velynt-cyan/20 overflow-hidden hover:shadow-lg hover:shadow-velynt-cyan/10 hover:border-velynt-cyan/40 transition-all duration-300 group"
              >
                {/* Featured Image */}
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <Badge
                    variant="outline"
                    className="mb-4 border-velynt-cyan/50 text-velynt-cyan bg-velynt-cyan/10"
                  >
                    {post.category}
                  </Badge>

                  {/* Post Title */}
                  <h2 className="text-xl font-bold text-velynt-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-velynt-text mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-velynt-cyan hover:text-velynt-cyan/80 font-medium transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
