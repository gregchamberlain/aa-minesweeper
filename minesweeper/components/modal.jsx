import React from 'react';

const Modal = ({won, restart}) => (
  <div className="modal-backdrop">
    <div className="modal-content">
      <h3>{ won ? "You Won!" : "You lost!" }</h3>
      <button onClick={restart}>Play again</button>
    </div>
  </div>
);

export default Modal;
