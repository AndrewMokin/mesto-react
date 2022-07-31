// import React, { useState } from "react";
import React, {useState} from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatar,
    });
  }

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__profile-info">
        <input
          type="url"
          id="linkAvatar"
          placeholder="Ссылка на картинку"
          className="popup__text-form popup__text-form-avatar popup__text-form_linkAvatar linkAvatar"
          required
          onChange={handleAvatarChange}
        />
        <span id="linkAvatar-error" className="popup__error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
