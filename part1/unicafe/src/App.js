import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad || 1) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text="good" value={good} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="neutral" value={neutral} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="bad" value={bad} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>No feedbäck yet</p>
    </div>
  )
}

const Button = () => {
  return <button>asd</button>
}

const StatisticLine = ({text, value}) => {
  return <>{text}: {value}</>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedbäck</h2>
      <Button />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App