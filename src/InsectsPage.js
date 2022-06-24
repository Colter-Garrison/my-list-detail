import { useEffect, useState } from 'react';
import './App.css';
import { getInsects } from './services/fetch-utils';
import InsectsList from './InsectsList';

function App() {
  const [insects, setInsects] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;
  const audio = new Audio('./act.mp3');
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = ((page * perPage) - 1);
      const insectsAC = await getInsects(from, to);
      
      setInsects(insectsAC);
    }
    fetch();
  }, [page]);
  
  function playAudio() {
    audio.play();
  }

  function stopAudio() {
    audio.pause();
  }

  return (
    <>
      <h2>Current Page {page}</h2>
      <button onClick={playAudio}>Play</button>
      <button onClick={stopAudio}>Pause</button>
      <div className='buttons'>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button disabled={page >= 8} onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <InsectsList insects={insects} />
    </>
  );
}
export default App;