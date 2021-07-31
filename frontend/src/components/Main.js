import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const {
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    onCardDelIconClick,
    cards,
    onCardLike,
  } = props;

  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <main className="main page__main">
      <section className="person main__person">
        <div className="person__header">
          <div className="person__avatar">
            <img
              className="person__photo"
              src={`${currentUser.avatar}`}
              alt="Имя пользователя"
            />
            <button
              onClick={onEditAvatar}
              id="popup-avatar-but"
              className="person__photo-btn"
            />
          </div>
          <div className="person__container">
            <div className="person__string">
              <h1 className="person__title">{currentUser.name}</h1>
              <button
                onClick={onEditProfile}
                id="popup-redact-but"
                className="person__icon-edit btn-opacity btn-opacity_type_medium"
                type="button"
              />
            </div>
            <p className="person__job">{currentUser.about}</p>
          </div>
          <button
            onClick={onAddPlace}
            id="popup-add-but"
            className="person__button btn-opacity btn-opacity_type_medium"
            type="button"
          />
        </div>
      </section>

      <section className="main__grid">
        <ul id="photos" className="photos">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelIconClick={onCardDelIconClick}
              onCardLike={onCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
