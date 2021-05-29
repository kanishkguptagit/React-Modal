import styles from './ResultsItem.module.css';

const ResultsItem = (props) => {

  const deleteItem = () => {
    props.onDelete(props.id);
  }

  return (
    <li className={styles.liitems} onClick={deleteItem}>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default ResultsItem;
