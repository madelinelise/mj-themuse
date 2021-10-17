import "./card.scss";

const Card = ({ job }) => {

  function truncate(str) {
    if (str.length > 100) {
      return (str.substring(0, 100) + "...");
    }
    else {
      return str;
    }
  }

  const truncDescr = truncate(job.contents);

  return (
    <>
      <div className="card">
        <h3 className="card__title">{job.name} - {job.company.name}</h3>
        <div className="card__locations">
          {job.locations.map((location, index) => (
            <div className="card__location" key={index}>
              {/* Next Steps: 
              // - Add comma if not the last item.
              */}
              {location.name}
            </div>
          ))}
        </div>
        {/* Next Steps: 
        // - Review parsing with react-html-parser. 
        */}
        <div className="card__description" dangerouslySetInnerHTML={{ __html: truncDescr }}></div>
        {/* Next Steps: 
        // - Create a 'Job Details page
        // - Dynamically route to that page via a Button component.
        */}
      </div>
    </>
  );
}

export default Card;