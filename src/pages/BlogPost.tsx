import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sanityClient } from '@/lib/sanityClient';
import { PortableText } from '@portabletext/react'; // Import PortableText

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      "mainImage": mainImage.asset->url,
      body, // This is the rich text content
      publishedAt,
      "author": author->name
    }`;

    sanityClient.fetch(query, { slug }).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-velynt-dark text-center text-velynt-white pt-48">Loading post...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-velynt-dark">
      <Header />
      <main className="pt-20">
        <div className="w-full h-96 ...">
          <img src={post.mainImage} alt={post.title} className="..." />
          <div className="absolute inset-0 bg-velynt-dark/30"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <header className="mb-12">
            <h1 className="text-4xl ...">{post.title}</h1>
            <div className="flex items-center space-x-4 text-velynt-text">
              <span className="font-medium text-velynt-white">By {post.author || 'Velynt Global'}</span>
              <span className="text-velynt-cyan">•</span>
              <time className="text-sm">{new Date(post.publishedAt).toLocaleDateString()}</time>
            </div>
          </header>
          <article className="prose prose-lg prose-invert max-w-none">
            {post.body && <PortableText value={post.body} />}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;