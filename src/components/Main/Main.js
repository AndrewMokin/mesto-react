import React from "react";
import Card from "../Card/Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js"

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete
}) {

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main>
      <section className="profile">
        <button
          type="button"
          className="profile__button-editing"
          onClick={onEditAvatar}
        >
          <img
            src={currentUser.avatar}
            alt="изображение портфолио"
            className="profile__image"
          />
          <div className="profile__image-editing"></div>
        </button>
        <div className="profile__name-editing">
          <h2 className="profile__name">{currentUser.name}</h2>
          <button
            type="button"
            className="profile__editing"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-element"
          onClick={onAddPlace}
        ></button>
      </section>
      <ul className="places">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            likes={card.likes.length}
            src={card.link}
            title={card.name}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
