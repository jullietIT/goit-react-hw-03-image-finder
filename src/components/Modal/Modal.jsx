import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  closeModal = e => {
    e.target === e.currentTarget && this.props.closeModalClick(true);
  };

  handleKeyDown = e => {
    e.code === 'Escape' && this.props.closeModalEsc();
    (e.code === 'ArrowRight' || e.code === 'ArrowLeft') &&
      this.props.changeImg(e.code);
  };

  render() {
    const { closeModal } = this;
    return createPortal(
      <div className={s.Overlay} onClick={closeModal}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,

      modalRoot
    );
  }
}

export default Modal;
