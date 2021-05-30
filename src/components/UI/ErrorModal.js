import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onOkay} />;
};

const ModalOverlay = (props) => {
  return(
  <div className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <br />
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <br />
    <footer className={styles.actions}>
      <div onClick={props.onOkay}>
        <Button>Okay</Button>
      </div>
    </footer>
  </div>
  )
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onOkay={props.onOkay}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
