import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleInsect } from './services/fetch-utils';

export default function InsectDetail() {
  const [insect, setInsect] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const data = await getSingleInsect(params.id);
      setInsect(data);
    }
    fetchDetails();
  }, [params.id]);

  function handleInsectClick() {
    window.open('https://animal-crossing.com/');
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='insect-detail' onClick={handleInsectClick}>
        <div className='insect-data'>
          <p>{insect.Name}</p>
          <img className='insect-img' src={insect.image} />
        </div>
      </div>
    </>
  );
}