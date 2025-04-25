import React, { useState } from 'react';
import './style.css';

const Form = ({ userName, setPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
      console.log('Post created:', result);
      setPosts((posts) => [result, ...posts])
      setTitle("");
      setContent("");
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <div className='form-container'>
      <div>
        <form className='form-content' onSubmit={(e) => handleSubmit(e)}>
          <h1>What's on your mind?</h1>

          <div className='form-inputs'>
            <label>Title</label>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" id="title" placeholder="Hello world" />
          </div>

          <div className='form-inputs'>
            <label>Content</label>
            <textarea onChange={(e) => setContent(e.target.value)} value={content} type="text" name="content" id="content" placeholder="Content here" />
          </div>

          <button
            type="submit"
            className={`button-create ${title !== '' && content !== '' && 'enabled'}`}
            disabled={title === '' && content === ''}>Create</button>
        </form>
      </div>
    </div>
  )
}

export default Form;