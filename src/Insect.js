import { Link } from 'react-router-dom';

export default function Insect({ id, Name, image }) {
  return (
    <Link to={`/insects/${id}`}>
      <div className='insect-object'>
        <h3>{Name}</h3>
        <img src={image} />
      </div>
    </Link>
  );
}