import React from 'react';

function InfoTooltip({ isOpen, onClose, message, name }) {
  return (
    <section className={`popup popup_function_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
    <div className={"popup__container"}>
      <button
        className={"popup__close-button"}
        type={"button"}
        onClick={onClose}>
      </button>
        <img src={message.icon} alt='Иконка авторизации' className='form__tooltip-icon' />
      <p className='form__tooltip-text'>{message.text}</p>
    </div>
  </section>
  );
}

export default InfoTooltip;