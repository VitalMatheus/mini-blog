import React, { useState, useEffect } from 'react';
import Form from './form/index.jsx';
import Cards from './cards/index.jsx';
import './style.css';

const Blog = ({ userName }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dev.codeleap.co.uk/careers/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.results);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
      <div className='blog-header'>
        <h1>CodeLeap Network</h1>
      </div>
      <Form userName={userName} setPosts={setPosts} />
      <Cards userName={userName} posts={posts} />
    </div>
  );
}

export default Blog;