import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../../../redux/postsSlice.js'
import './style.css'

const DeleteModal = ({ setShowDeleteModal }) => {
  const dispatch = useDispatch()
  const postId = useSelector(state => state.posts.selectedPostId)

  const handleDelete = async () => {
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

      dispatch(deletePost());
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Are you sure you want to delete this item?</p>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={() => handleCancel()}>Cancel</button>
          <button className="delete-button" onClick={() => handleDelete()}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;