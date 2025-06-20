import React from 'react';

const Button = ({ phoneNumber, message, classStyle , text }) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
      className={`${classStyle}`}>{text}
    </button>
    </a>
  );
};

export default Button;
