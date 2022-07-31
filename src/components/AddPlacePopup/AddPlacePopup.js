import React, {useState,useEffect} from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name , setName] = useState('')
  const [link, setLink] = useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onAddPlace({
      name: name,
      link: link
    })
  }

useEffect(()=>{
  if (isOpen)
    {setName('')
    setLink('')}
  },[isOpen])

  return (
  <PopupWithForm
    name="place"
    title="Новое место"
    isOpen={isOpen}
    onClose={onClose}
    buttonText="Создать"
    onSubmit={handleSubmit}
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
        onChange={handleNameChange}
        value={name}
      />
      <span id="name-error" className="popup__error"></span>
      <input
        type="url"
        id="link"
        placeholder="Ссылка на картинку"
        className="popup__text-form popup__text-form_link link"
        required
        onChange={handleLinkChange}
        value={link}
      />
      <span id="link-error" className="popup__error"></span>
    </fieldset>
  </PopupWithForm>
  )
}

export default AddPlacePopup;
