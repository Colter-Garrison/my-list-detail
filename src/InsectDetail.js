import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleInsect } from './services/fetch-utils';

export default function InsectDetail() {
  const [insect, setInsect] = useState({});
  const [imageUrl, setImageUrl] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const data = await getSingleInsect(params.id);
      setInsect(data);
    }
    fetchDetails();
  }, [params.id]);

  useEffect(() => {
    if (insect.image) {
      const image = insect.image;
      const urlI = image.replace('=IMAGE("', '');
      const finalUrl = urlI.replace('")', '');
      setImageUrl(finalUrl);
    }
  }, [insect]);

  function handleInsectClick() {
    window.open('https://animal-crossing.com/');
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='insect-detail' onClick={handleInsectClick}>
        <div className='insect-data'>
          <p><b>{insect.Name}</b></p>
          <img className='insect-img' src={imageUrl} />
          <p>#{insect.number}</p>
          <p><b>Sell Price: </b>{insect.Sell}</p>
          <p><b>Where to Find: </b>{insect.Where}</p>
          <p><b>Weather: </b>{insect.Weather}</p>
          <p><b>Total Catches to Unlock: </b>{insect.Total}</p>
          <p><b>Catch Phrase: </b>{insect.Phrase}</p>
          <p><b>Description: </b>{insect.Description}</p>
          <div className='list'>
            <h4><b>Appears:</b></h4>
            <p><b>Jan: </b>{insect.Jan}</p>
            <p><b>Feb: </b>{insect.Feb}</p>
            <p><b>Mar: </b>{insect.Mar}</p>
            <p><b>Apr: </b>{insect.Apr}</p>
            <p><b>May: </b>{insect.May}</p>
            <p><b>Jun: </b>{insect.Jun}</p>
            <p><b>Jul: </b>{insect.Jul}</p>
            <p><b>Aug: </b>{insect.Aug}</p>
            <p><b>Sep: </b>{insect.Sep}</p>
            <p><b>Oct: </b>{insect.Oct}</p>
            <p><b>Nov: </b>{insect.Nov}</p>
            <p><b>Dec: </b>{insect.Dec}</p>
          </div>
        </div>
      </div>
    </>
  );
}