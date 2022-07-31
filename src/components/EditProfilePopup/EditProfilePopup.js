import React, {useState} from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const [name , setName] = useState('')
  const [description, setDescription] = useState('')
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({
      name: name,
      about: description,
    })
  }

  React.useEffect(()=>{
    if (isOpen)
    {setName(currentUser.name)
    setDescription(currentUser.about)}
  },[isOpen,currentUser])

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__profile-info">
        <input
          type="text"
          id="profileName"
          className="popup__text-form popup__text-form_name"
          minLength="2"
          maxLength="40"
          required
          placeholder={currentUser.name}
          onChange={handleNameChange}
          value={name}
        />
        <span id="profileName-error" className="popup__error"></span>
        <input
          type="text"
          id="profileDescription"
          className="popup__text-form popup__text-form_job"
          minLength="2"
          maxLength="200"
          required
          placeholder={currentUser.about}
          onChange={handleDescriptionChange}
          value={description}
        />
        <span id="profileDescription-error" className="popup__error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
