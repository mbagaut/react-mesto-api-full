const selectors = {
  openPopupAvatarBut: "#popup-avatar-but",
  openPopupRedactBut: "#popup-redact-but",
  openPopupAddBut: "#popup-add-but",

  popupAvatar: "#popup-avatar",
  popupRedact: "#popup-redact",
  popupAdd: "#popup-add",
  popupImg: "#popup-img",
  popupDel: "#popup-del",

  titleName: ".person__title",
  subtitleJob: ".person__job",
  avatarImg: ".person__photo",

  cardsContainer: "#photos",
  templateSelector: "#card-template",
};

const formSelectors = {
  fieldsetSelector: ".popup__fieldset",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-error",
};
export { selectors, formSelectors };
