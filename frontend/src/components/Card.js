import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelIconClick } = props;
  const { currentUser } = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((i) => i === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelIconClick(card);
  }

  return (
    <li>
      <article className="photos__item">
        <img
          className="photos__image"
          alt={card.name}
          src={card.link}
          onClick={handleClick}
        />
        <button
          className="photos__icon-del btn-opacity btn-opacity_type_low"
          style={{ display: isOwn ? "block" : "none" }}
          type="button"
          onClick={handleCardDelete}
        />
        <div className="photos__string">
          <h2 className="photos__title">{card.name}</h2>
          <div className="photos__like-column">
            <button
              className={`photos__icon btn-opacity btn-opacity_type_low ${
                isLiked && "photos__icon_active"
              }`}
              type="button"
              onClick={handleLikeClick}
            />
            <span
              className="photos__like-counter"
              style={{ display: card.likes.length > 0 ? "block" : "none" }}
            >
              {card.likes.length}
            </span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
