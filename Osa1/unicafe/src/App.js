import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <td>{props.text} {props.value}</td>
  )
}

const Statistics = (props) => {
  const good = props.good 
  const neutral = props.neutral
  const bad = props.bad

  const all = (good + neutral + bad)
  const average = (good * 1 + neutral * 0 + bad * (-1)) / all
  const positive = (good / all)

  if (all > 0) {
    
    return (
      <div>
        <h1>statistics</h1>
        
        <table>
          <tbody>
            <tr><StatisticLine text="good" value={good} /></tr>         
            <tr><StatisticLine text="neutral" value={neutral} /></tr>
            <tr><StatisticLine text="bad" value={bad} /></tr>
    
            <tr><StatisticLine text="all" value={good} /></tr>
            <tr><StatisticLine text="average" value={average} /></tr>
            <tr><StatisticLine text="positive" value={positive} /></tr>
          </tbody>
        </table>
      </div>)
  }

  return (
    <p>No feedback given </p>
  )
}

const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />


    </div>
  )
}

export default App