import { Link } from 'react-router-dom';

export default function Insect({ id, Name, image }) {
  const urlI = image.replace('=IMAGE("', '');
  const imageURL = urlI.replace('")', '');

  return (
    <Link to={`/insects/${id}`}>
      <div className='insect'>
        <h3>{Name}</h3>
        <img src={imageURL} />
      </div>
    </Link>
  );
}