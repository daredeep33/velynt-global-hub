import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { sanityClient } from '@/lib/sanityClient'; // Import the client

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "post"]{
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "category": categories[0]->title,
      excerpt
    }`;

    sanityClient.fetch(query).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-velynt-dark text-center text-velynt-white pt-48">Loading posts...</div>;
  }

  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl ... font-bold text-velynt-white mb-6">The Velynt Global Journal</h1>
            <p className="text-lg text-velynt-text max-w-2xl mx-auto">Insights, guides, and updates...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="...">
                <AspectRatio ratio={16 / 9}>
                  <img src={post.mainImage} alt={post.title} className="..." />
                </AspectRatio>
                <div className="p-6">
                  <Badge variant="outline" className="...">
                    {post.category || 'General'}
                  </Badge>
                  <h2 className="text-xl ...">{post.title}</h2>
                  <p className="text-velynt-text ...">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="...">
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