import { useState, useEffect } from "react";
import "../../index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ImagePopup from "../ImagePopup/ImagePopup";
import Api from "../../utils/Api";

const api = new Api({
  address: "https://mesto.nomoreparties.co/v1/cohort-38",
  token: "5915b378-e30a-47e1-90fe-a5a0aac62f5e",
});

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCard] = useState([]);
  const [info, setInfo] = useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function getCards() {
    api.getCards().then((res) => {
      setCard(res);
    });
  }

  function getUserInfo() {
    api.getUserInfo().then((res) => {
      setInfo(res);
    });
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getCards();
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleClickAvatar = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    if (
      isEditProfilePopupOpen ||
      isEditAvatarPopupOpen ||
      isAddPlacePopupOpen ||
      selectedCard
    ) {
      function handleEsc(evt) {
        if (evt.key === "Escape") {
          closeAllPopups();
        }
      }

      document.addEventListener("keydown", handleEsc);

      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [
    isEditAvatarPopupOpen,
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    selectedCard,
  ]);

  return (
    <div>
      <div className="page">
        <Header />
        <Main
          avatar={info.avatar}
          name={info.name}
          about={info.about}
          cards={cards}
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleClickAvatar}
          onAddPlace={handleAddPlaceClick}
        />

        <Footer />
      </div>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <fieldset className="popup__profile-info">
          <input
            type="text"
            id="profileName"
            className="popup__text-form popup__text-form_name"
            minLength="2"
            maxLength="40"
            required
            placeholder={info.name}
          />
          <span id="profileName-error" className="popup__error"></span>
          <input
            type="text"
            id="profileDescription"
            className="popup__text-form popup__text-form_job"
            minLength="2"
            maxLength="200"
            required
            placeholder={info.about}
          />
          <span id="profileDescription-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="place"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <fieldset className="popup__profile-info">
          <input
            type="text"
            id="name"
            placeholder="Название"
            className="popup__text-form popup__text-form_place name"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="name-error" className="popup__error"></span>
          <input
            type="url"
            id="link"
            placeholder="Ссылка на картинку"
            className="popup__text-form popup__text-form_link link"
            required
          />
          <span id="link-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <fieldset className="popup__profile-info">
          <input
            type="url"
            id="linkAvatar"
            placeholder="Ссылка на картинку"
            className="popup__text-form popup__text-form-avatar popup__text-form_linkAvatar linkAvatar"
            required
          />
          <span id="linkAvatar-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
