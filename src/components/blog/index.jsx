import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPost } from '../../redux/postsSlice.js'
import Form from './form/index.jsx'
import Cards from './cards/index.jsx'
import './style.css'

const Blog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dev.codeleap.co.uk/careers/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(setPost(data.results));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="blog-container">
      <div className='blog-header'>
        <h1>CodeLeap Network</h1>
      </div>
      <div className="form-container">
        <div className="form-container-header">
          <Form />
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Blog;