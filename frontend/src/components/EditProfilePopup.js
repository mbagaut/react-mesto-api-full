import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser, buttonText } = props;
  const { currentUser } = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="popupRedactForm"
      title="Редактировать профиль"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      defaultButtonText={"Сохранить"}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__field">
          <input
            className="popup__input"
            tabIndex={1}
            id="name-input"
            type="text"
            name="name"
            onChange={handleChangeName}
            value={name || ""}
            placeholder="Жак-Ив Кусто"
            required
            minLength={2}
            maxLength={40}
          />
          <span className="name-input-error" />
        </label>
        <label className="popup__field">
          <input
            className="popup__input"
            tabIndex={2}
            id="job-input"
            type="text"
            name="about"
            onChange={handleChangeDescription}
            value={description || ""}
            placeholder="Исследователь океана"
            required
            minLength={2}
            maxLength={200}
          />
          <span className="job-input-error" />
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
