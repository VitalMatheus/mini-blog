import Form from '../form/index.jsx';
import './style.css';

const EditModal = ({ post, isEditing, setIsEditing, setPosts }) => {
  return (
    <div className="edit-modal-backdrop">
      <div className="edit-modal">
        <Form post={post} isEditing={isEditing} setIsEditing={setIsEditing} setPosts={setPosts} />
      </div>
    </div>
  )
}

export default EditModal;