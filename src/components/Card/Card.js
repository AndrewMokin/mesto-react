function Card({ title, likes, src, onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="place place-image">
      <img
        src={src}
        alt={title}
        className="place__image"
        onClick={handleClick}
      />
      <div className="place__info">
        <h2 className="place__title">{title}</h2>
        <div>
          <button type="button" className="place__like"></button>
          <h2 className="place__likes">{likes}</h2>
        </div>
        <button
          type="click"
          id="place__delete"
          className="place__delete place__delete_novisible"
        ></button>
      </div>
    </li>
  );
}

export default Card;
