import { useState, useEffect } from 'react';
import Search from './components/search';

function App() {

  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch("https://www.themuse.com/api/public/jobs?category=Software%20Engineer&level=Senior%20Level&page=1&descending=true");
      const data = await response.json();

      setJobs(data.results);
    }
  }, []);

  return (
    <div className="jobs">
      {jobs && (
        <Search jobItems={jobs}/>
      )}
    </div>

  );
}

export default App;