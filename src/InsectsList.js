import Insect from './Insect';

export default function InsectsList({ insects }) {
  return (
    <div className='insect-list'>
      {
        insects.map((insect, i) => {
          return <Insect {...insect} key={insect.Name + i + insect.id}/>;
        })
      }
    </div>
  );
}