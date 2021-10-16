function Card({job}) {
  return(
    <div className="card">
      <div>
        <h2>{job.name}</h2>
      </div>
    </div>
  );
}

export default Card;