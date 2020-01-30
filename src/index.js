import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MaxVotes = (props) => {
    const maxVote = Math.max(...props.votes)
    let maxIndex = props.votes.indexOf(maxVote)
    if (maxVote === 0) {
        return (
            <h1>No votes</h1>
        )
    }
    return (
        <h1>{props.anecdotes[maxIndex]}</h1>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(5).fill(0))
    const incVote = (selected) => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    return (
        <div className='jumbotron'>
            <h1>{props.anecdotes[selected]}</h1>
            <button className='btn btn-danger' onClick={() => setSelected(Math.floor(Math.random()*5))}>Next</button>
            <button className='btn btn-danger' onClick={() => incVote(selected)} >Vote</button>
            <h1>{votes[selected]}</h1>
            <br/>
            <h1>Anecdote with most votes</h1>
            <MaxVotes votes={votes} anecdotes={props.anecdotes} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'    
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));