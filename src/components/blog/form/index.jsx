import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addPost, editPost, stopEditing } from '../../../redux/postsSlice';
import './style.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const username = useSelector(state => state.signup.username)
  const isEditing = useSelector(state => state.posts.isEditing)
  const selectedPostId = useSelector(state => state.posts.selectedPostId)
  const post = useSelector(state => state.posts.value.find(post => post.id === selectedPostId));
  const postID = useSelector(state => state.posts.selectedPostId)

  useEffect(() => {
    if (isEditing && post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [isEditing, post]);

  const handleCreate = async (e) => {
    e.preventDefault();

    const data = {
      username,
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
      dispatch(addPost(result))
      setTitle("");
      setContent("");
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      title,
      content,
    };

    try {
      const response = await fetch(`https://dev.codeleap.co.uk/careers/${postID}/`, {
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
      dispatch(editPost(result));
    } catch (error) {
      console.error('Error editing post:', error);
    }
    dispatch(stopEditing(false));
  }

  return (
    <form className='form-content' onSubmit={(e) => isEditing ? handleEdit(e) : handleCreate(e)}>
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
          <button type='button' onClick={() => dispatch(stopEditing())} className='cancel-button'>Cancel</button>
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