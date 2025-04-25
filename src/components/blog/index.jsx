import Form from './form/index.jsx';
import Cards from './cards/index.jsx';
import './style.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className='blog-header'>
        <h1>CodeLeap Network</h1>
      </div>
      <Form />
      <Cards />
    </div>
  );
}

export default Blog;