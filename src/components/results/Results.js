import ResultsItem from './ResultsItem';

const Results = (props) => {
    return(
        props.items.map(item => <ResultsItem name={item.name} age={item.age} />)
    )
}

export default Results;