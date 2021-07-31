import React from "react";
import PopupWithForm from "./PopupWithForm";

function DelCardPopup(props) {
  const { isOpen, onClose, onCardDel, buttonText } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onCardDel();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="popupDelForm"
      title="Вы уверены?"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      defaultButtonText={"Удалить"}
    ></PopupWithForm>
  );
}

export default DelCardPopup;
