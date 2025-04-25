import React, { useState, useEffect } from 'react';
import './style.css';

const Form = ({ post, userName, setPosts, isEditing, setIsEditing }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isEditing && post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [isEditing, post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: userName,
      title,
      content,
    };

    try {
      const response = await fetch('https://dev.codeleap.co.uk/careers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setPosts((posts) => [result, ...posts])
      setTitle("");
      setContent("");
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  const handleCancel = () => {
    setIsEditing(false);
  }

  const handleEdit = async (e) => {
    e.preventDefault();

    const data = {
      username: userName,
      title,
      content,
    };

    try {
      const response = await fetch(`https://dev.codeleap.co.uk/careers/${post.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setPosts((prevPosts) => prevPosts.map((prevPost) => (prevPost.id === post.id ? result : prevPost)));
    } catch (error) {
      console.error('Error editing post:', error);
    }
    setIsEditing(false);
  }

  return (
    <form className='form-content' onSubmit={(e) => isEditing ? handleEdit(e) : handleSubmit(e)}>
      {isEditing ? <h1>Edit Item</h1> : <h1>What's on your mind?</h1>}

      <div className='form-inputs'>
        <label>Title</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" id="title" placeholder="Hello world" />
      </div>

      <div className='form-inputs'>
        <label>Content</label>
        <textarea onChange={(e) => setContent(e.target.value)} value={content} type="text" name="content" id="content" placeholder="Content here" />
      </div>

      {isEditing ? (
        <div className='modal-buttons'>
          <button type='button' onClick={() => handleCancel()} className='cancel-button'>Cancel</button>
          <button type='submit' onClick={(e) => handleEdit(e)} className={`save-button ${title !== '' && content !== '' && 'enabled'}`} disabled={title === '' || content === ''}>Save</button>
        </div>
      ) : (
        <button
          type='submit'
          className={`button-create ${title !== '' && content !== '' && 'enabled'}`}
          disabled={title === '' || content === ''}>
          Create
        </button>
      )}
    </form>
  )
}

export default Form;