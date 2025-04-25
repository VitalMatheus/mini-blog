import { useState } from 'react';
import DeleteModal from '../deleteModal/index.jsx';
import EditModal from '../editModal/index.jsx';
import './style.css';

function Cards({ userName, posts, setPosts }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [postId, setPostID] = useState(null);
  const [post, setPost] = useState(null);

  function timeAgo(dateString) {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHrs = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHrs / 24);

    if (diffSec < 60) return `${diffSec} seconds ago`;
    if (diffMin < 60) return `${diffMin} minutes ago`;
    if (diffHrs < 24) return `${diffHrs} hours ago`;
    return `${diffDays} days ago`;
  }

  return (
    <div className="cards-container">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <div className='card-header'>
            <h1>{post.title}</h1>
            <div>
              {userName === post.username && (
                <div className='card-header-icons'>
                  <button onClick={() => { setShowDeleteModal(true); setPostID(post.id) }} aria-label="Delete post" className='icon-buttons'>
                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.80087 23.75C7.80087 25.125 8.971 26.25 10.4011 26.25H20.8023C22.2324 26.25 23.4025 25.125 23.4025 23.75V8.75H7.80087V23.75ZM10.9992 14.85L12.8324 13.0875L15.6017 15.7375L18.358 13.0875L20.1912 14.85L17.4349 17.5L20.1912 20.15L18.358 21.9125L15.6017 19.2625L12.8454 21.9125L11.0122 20.15L13.7685 17.5L10.9992 14.85ZM20.1522 5L18.852 3.75H12.3514L11.0512 5H6.50073V7.5H24.7027V5H20.1522Z" fill="white" />
                    </svg>
                  </button>
                  <button onClick={() => { setIsEditing(true); setPost(post) }} aria-label="Edit post" className='icon-buttons'>
                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.10107 21.2663L14.8386 21.2475L27.3615 9.3225C27.853 8.85 28.1234 8.2225 28.1234 7.555C28.1234 6.8875 27.853 6.26 27.3615 5.7875L25.2995 3.805C24.3166 2.86 22.6017 2.865 21.6266 3.80125L9.10107 15.7288V21.2663ZM23.4611 5.5725L25.527 7.55125L23.4507 9.52875L21.3887 7.5475L23.4611 5.5725ZM11.7014 16.7713L19.5412 9.305L21.6032 11.2875L13.7647 18.7513L11.7014 18.7575V16.7713Z" fill="white" />
                      <path d="M6.50067 26.25H24.7026C26.1367 26.25 27.3029 25.1287 27.3029 23.75V12.915L24.7026 15.415V23.75H10.6065C10.5727 23.75 10.5376 23.7625 10.5038 23.7625C10.4609 23.7625 10.418 23.7512 10.3738 23.75H6.50067V6.25H15.4027L18.003 3.75H6.50067C5.06661 3.75 3.90039 4.87125 3.90039 6.25V23.75C3.90039 25.1287 5.06661 26.25 6.50067 26.25Z" fill="white" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="card-infos">
            <p>{post.username}</p>
            <span>{timeAgo(post.created_datetime)}</span>
          </div>
          <p className="card-content">{post.content}</p>
        </div>
      ))}

      {showDeleteModal && (
        <DeleteModal postId={postId} setPosts={setPosts} setShowDeleteModal={setShowDeleteModal} />
      )}
      {isEditing && (
        <EditModal post={post} isEditing={isEditing} setIsEditing={setIsEditing} setPosts={setPosts} />
      )}
    </div>
  )
}

export default Cards;