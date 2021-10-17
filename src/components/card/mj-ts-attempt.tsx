import React from 'react';
import "./card.scss";

{/* Next Steps: 
// - Integrate with other components.
// This is where I ran into issues,
// For what ever it is worth, I want to share
// my attempt at using Typescript to make a component.
*/}

interface IJobItems {
  contents: string;
  name: string;
  locations: IJobLocations[];
  company: {
    name: string;
  };
}

interface IJobLocations {
  name: string;
}

const Card = ({ contents, name, locations, company}: IJobItems) => {
  function truncate(str: string) {
    if (str.length > 100) {
      return (str.substring(0, 100) + "...");
    }
    else {
      return str;
    }
  }

  const truncDescr = truncate(contents);

  return (
    <>
      <div className="card">
        <h3 className="card__title">{name} - {company.name}</h3>
        <div className="card__locations">
          {locations.map((name, index) => (
            <div className="card__location" key={index}>
              {/* TODO: Add comma if it's not the last item. */}
              <h2>{name}</h2>
            </div>
          ))}
        </div>
        <div className="card__description" dangerouslySetInnerHTML={{ __html: truncDescr }}></div>
      </div>
    </>
  );
}

export default Card;
