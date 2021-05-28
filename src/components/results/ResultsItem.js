import Card from '../UI/Card';

const ResultsItem = (props) => {
    return(
        <Card>
            <div>{props.name} ({props.age} years old)</div>
        </Card>
    )
}

export default ResultsItem;