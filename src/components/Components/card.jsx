//card.jsx
import "../../App.css";

function Card({ top, middle, bottom }) { 
  return (
    <div className="all card text-white rounded-lg bg-[var(--bg-card)] p-2 font-serif hover:bg-[var(--bg-card-hover)] transition-colors duration-200 cursor-pointer text-[var(--text-primary)] leading-1">
      <p className="text-sm font-medium text-[var(--text-primary)]">{top}</p>
      <h1 className="text-lg font-bold my-1 text-[var(--text-primary)]">{middle}</h1>
      <small className="text-[10px] text-gray-400 uppercase tracking-wider">{bottom}</small>
    </div>
  );
}

export default Card;
