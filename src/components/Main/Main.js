import React from "react";
import Card from "../Card/Card";

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  avatar,
  name,
  about,
  cards,
  onCardClick,
}) {
  return (
    <main>
      <section className="profile">
        <button
          type="button"
          className="profile__button-editing"
          onClick={onEditAvatar}
        >
          <img
            src={avatar}
            alt="изображение портфолио"
            className="profile__image"
          />
          <div className="profile__image-editing"></div>
        </button>
        <div className="profile__name-editing">
          <h2 className="profile__name">{name}</h2>
          <button
            type="button"
            className="profile__editing"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{about}</p>
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
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
