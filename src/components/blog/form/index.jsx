import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className='form-container'>
      <div>
        <form className='form-content'>
          <h1>What's on your mind?</h1>

          <div className='form-inputs'>
            <label>Title</label>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" id="title" placeholder="Hello world" />
          </div>

          <div className='form-inputs'>
            <label>Content</label>
            <textarea onChange={(e) => setContent(e.target.value)} value={content} type="text" name="content" id="content" placeholder="Content here" />
          </div>

          <button className={`button-create ${title !== '' && content !== '' && 'enabled'}`} disabled={title === '' && content === ''}>Create</button>
        </form>
      </div>
    </div>
  )
}

export default Form;