import ResultsItem from './ResultsItem';
import Card from '../UI/Card';
import styles from './Results.module.css';

const Results = (props) => {
    return(
        <Card>
            <ul className={styles.ullist}> {props.items.map(item => <ResultsItem name={item.name} age={item.age} />)} </ul>
        </Card>
    )
}

export default Results;