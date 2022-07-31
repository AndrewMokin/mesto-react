import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext"

function Card({ title, likes, src, onCardClick, card, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id
  const cardDeleteButtonClassName = (
    `place__delete ${isOwn ? '' : 'place__delete_novisible' }`
  )
  const isLiked = card.likes.some(i=>i._id === currentUser._id)
  const cardLikeButtonClassName = (
    `place__like ${isLiked ? 'place__like_active' : ''}`
  )

  function handleClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card)
  }

  function handleCardDelete() {
    onCardDelete(card)
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
          <button type="button" className={cardLikeButtonClassName} onClick={handleCardLike}></button>
          <h2 className="place__likes">{likes}</h2>
        </div>
        <button
          type="click"
          id="place__delete"
          className={cardDeleteButtonClassName}
          onClick={handleCardDelete}
        ></button>
      </div>
    </li>
  );
}

export default Card;
