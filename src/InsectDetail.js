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
          <p>#{insect.number}</p>
          <p>Sell Price: {insect.Sell}</p>
          <p>Where to Find: {insect.Where}</p>
          <p>Weather: {insect.Weather}</p>
          <p>Total Catches to Unlock: {insect.Total}</p>
          <p>Catch Phrase: {insect.Phrase}</p>
          <p>Description: {insect.Description}</p>
          <h4>Appears:</h4>
          <p>Jan: {insect.Jan}</p>
          <p>Feb: {insect.Feb}</p>
          <p>Mar: {insect.Mar}</p>
          <p>Apr: {insect.Apr}</p>
          <p>May: {insect.May}</p>
          <p>Jun: {insect.Jun}</p>
          <p>Jul: {insect.Jul}</p>
          <p>Aug: {insect.Aug}</p>
          <p>Sep: {insect.Sep}</p>
          <p>Oct: {insect.Oct}</p>
          <p>Nov: {insect.Nov}</p>
          <p>Dec: {insect.Dec}</p>
        </div>
      </div>
    </>
  );
}