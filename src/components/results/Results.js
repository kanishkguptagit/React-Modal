import ResultsItem from './ResultsItem';
import Card from '../UI/Card';
import styles from './Results.module.css';

const Results = (props) => {
    return(
        <Card>
            <ul className={styles.ullist}> 
            {props.items.map(item => <ResultsItem id={item.id} name={item.name} age={item.age} onDelete={props.onDeleteUser} />)} 
            </ul>
        </Card>
    )
}

export default Results;