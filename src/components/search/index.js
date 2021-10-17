import { useState } from 'react';
import SearchList from '../../pages/searchResults';
import "./search.scss";

const Search = ({ jobItems }) => {

  const [searchInput, setSearchInput] = useState("");
  const [checkInput, setCheckInput] = useState([]);

  const allCompanies = jobItems.map((job, index) => (
    job.company.name
  ))

  {/* Next Steps: 
  // - Clear when checkboxes are unchecked.
  // - Ability to filter multiple checkboxes.
  */}
  const filteredJobs = jobItems.filter(
    job => {
      return (
        job.name
        .toLowerCase()
        .includes(searchInput.toLowerCase()) && 
        job.company.name
        .includes(checkInput)
      );
    }
  );

  const handleCheckChange = e => {
    setCheckInput([...checkInput,e.target.value]);
  };

  const handleInputChange = e => {
    setSearchInput(e.target.value);
  };

  function searchList() {
    return (
      <SearchList filteredJobs={filteredJobs} />
    );
  }

  return (
    <section className="search layout-2x">
      <div className="layout-2x__item">
        <h1 className="search__heading">Engineering Jobs on The Muse</h1>
        {/* Next Steps: 
        // - Add maps for level, location, and job category
        */}
        <div className="search__filters">
          <input
            className="search__input"
            type="text"
            placeholder="Search Jobs"
            onChange={handleInputChange}
          />
          <h2> Companies </h2>
          {/* Next Steps: 
          // - Add in a toggle to show/hide filters.
          */}
          {allCompanies.map((name, index) => (
            <div className="search__filters-item">
              <input
                id={index}
                value={name}
                type="checkbox"
                onChange={handleCheckChange}
              />
              <label htmlFor={index}>{name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="layout-2x__item">
        {searchList()}
      </div>
    </section>
  );
}

export default Search;
