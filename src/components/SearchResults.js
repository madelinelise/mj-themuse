import React from 'react';
import Card from './Card';

function SearchResults({ filteredJobs }) {
  const filtered = filteredJobs.map(job => <Card key={job.id} job={job} />);
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchResults;