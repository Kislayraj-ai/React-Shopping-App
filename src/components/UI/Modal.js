import ReactDom from 'react-dom';
import React from 'react';
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { cartModal } from '../../store/modal-slice';

const Backdrop = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(cartModal.toggle());
  };
  return <div onClick={onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('backdrop');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
