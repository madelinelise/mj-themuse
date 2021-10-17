import Card from '../../components/card';

const SearchResults = ({ filteredJobs }) => {

  const filtered = filteredJobs.map(job => <Card key={job.id} job={job} />);
  return (
    <div className="search__results">
      {filtered}
    </div>
  );
}

export default SearchResults;
