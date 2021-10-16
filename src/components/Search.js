import { useState } from 'react';
import SearchList from './SearchResults';

const Search = ({ jobItems }) => {

  const [searchInput, setsearchInput] = useState("");

  const filteredJobs = jobItems.filter(
    job => {
      return (
        job.name
        .toLowerCase()
        .includes(searchInput.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setsearchInput(e.target.value);
  };

  function searchList() {
    return (
      <SearchList filteredJobs={filteredJobs} />
    );
  }

  return (
    <section className="searchContainer">
      <h2 className="searchHeading">Search for Jobs on themuse</h2>
      <input
        className="searchInput"
        type="search"
        placeholder="Search Jobs"
        onChange={handleChange}
      />
      {searchList()}
    </section>
  );
}

export default Search;