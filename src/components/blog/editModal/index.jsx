import Form from '../form/index.jsx';
import './style.css';

const EditModal = () => {
  return (
    <div className="edit-modal-backdrop">
      <div className="edit-modal">
        <Form />
      </div>
    </div>
  )
}

export default EditModal;