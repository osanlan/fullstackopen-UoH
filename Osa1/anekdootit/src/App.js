import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, addPoint] = useState(new Uint8Array(anecdotes.length))

  const updatePoints = idx => e => {
    const arr = [...points]
    arr[idx] += 1

    addPoint(arr)
  }

  
  function randInt(max) {
    const rand = Math.floor(Math.random() * (max))
    console.log(rand)
    return rand
  }
  return (

    <div>
      
      <div>{points}</div>
      <div>{anecdotes[selected]}</div>
      
      <div>
        <Button handleClick={() => setSelected(randInt(anecdotes.length))} text="Next anecdote"/>
        <Button handleClick={() => addPoint(pointss))} text="Vote"/>
      </div>
    </div>
  )
}

export default App