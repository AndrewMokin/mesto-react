import React from "react";

function ImagePopup({card,onClose}) {
  return (
    <div className={`popup popup-image ${card ? 'popup_opened':''}`}>
    <div className="popup__overlay"></div>
    <div className="popup__large-image">
      <img
        src={card ? card.link : ''}
        alt={card ? card.name : ''}
        className="popup__image"
      />
      <button type="button" className="popup__close" onClick ={onClose}></button>
      <h2 className="popup__note">{card ? card.name : ''}</h2>
    </div>
  </div>
  );
};

export default ImagePopup;
