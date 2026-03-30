function MemoryCard({ img, date, text }) {
  return (
    <div className="card-wrapper">
      <div className="clip" />

      <div className="swing">
        <div className="card">
          <img src={img} alt={text} />
          <span className="date">{date}</span>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default MemoryCard;
