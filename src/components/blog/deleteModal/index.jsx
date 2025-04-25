import './style.css'

const DeleteModal = ({ postId, setPosts, setShowDeleteModal }) => {
  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Are you sure you want to delete this item?</p>
        <div className="modal-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="delete-button" onClick={() => handleDelete(postId)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;