import { useEffect, useState } from 'react';
import './App.css';
import { getInsects } from './services/fetch-utils';
import InsectsList from './InsectsList';

function App() {
  const [insects, setInsects] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 40;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const insectsAC = await getInsects(from, to);

      setInsects(insectsAC);
    }
    fetch();
  }, [page]);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <InsectsList insects={insects} />
    </>
  );
}
export default App;