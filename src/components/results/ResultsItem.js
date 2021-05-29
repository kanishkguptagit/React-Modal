import styles from './ResultsItem.module.css';

const ResultsItem = (props) => {
  return (
    <li className={styles.liitems}>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default ResultsItem;
