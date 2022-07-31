import React from "react";

function PopupWithForm({ name, isOpen, onClose, title, children, buttonText, onSubmit }) {
  return (
    <>
      <div className={`popup popup-${name} ${isOpen && "popup_opened"}`}>
        <div className="popup__overlay"></div>
        <form
          className={`popup__content-${name} popup__form`}
          name="form-place"
          onSubmit={onSubmit}
        >
          <button
            type="button"
            onClick={onClose}
            className="popup__close"
          ></button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className={`popup__button popup__button_${name}`}>
            {buttonText}
          </button>
        </form>
      </div>

      <div className="popup popup-delete">
        <div className="popup__overlay"></div>
        <form className="popup__content-delete popup__form" name="form-place">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="button" className="popup__button popup__button_delete">
            Да
          </button>
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;
