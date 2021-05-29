import styles from './ErrorModal.module.css';
import Button from './Button';

const ErrorModal = (props) => {
    return(
        <div>
        <div className={styles.backdrop} onClick={props.onOkay}></div>
        <div className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header><br/>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div><br/>
            <footer className={styles.actions}>
                <div onClick={props.onOkay}><Button>Okay</Button></div>
            </footer>
        </div>
        </div>        
    )
}

export default ErrorModal;