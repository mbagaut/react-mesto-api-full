import React from "react";

function InfoTooltip(props) {
  const { infoTooltip, onClose } = props;

  const [titleText, setTitleText] = React.useState("");

  React.useEffect(() => {
    if (infoTooltip === "fail") {
      setTitleText("Что-то пошло не так! Попробуйте ещё раз.");
    } else if (infoTooltip === "success") {
      setTitleText("Вы успешно зарегистрировались!");
    }
  }, [infoTooltip]);

  return (
    <section className={`popup ${infoTooltip && "popup_opened"}`}>
      <div className="popup__overlay" onClick={onClose} />
      <div className="popup__content popup__content_tooltip-only">
        <button
          onClick={onClose}
          className="popup__close btn-opacity btn-opacity_type_medium"
          type="button"
        />
        <div className="tooltip">
          <div
            className={`tooltip__img tooltip__img_type_${infoTooltip}`}
          ></div>
          <h2 className="tooltip__title">{titleText}</h2>
        </div>
      </div>
    </section>
  );
}

export default InfoTooltip;
