const Course = ({course}) => {
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  const Content = (props) => {
    return (
      <>
      {props.parts.map(part => {
        return (
          <p>{part.name} {part.exercises}</p>
        )
      })}
      </>
    )
  }
  const Total = (props) => {
    const init = 0
    return (
      <>
      <p>total of {props.parts.reduce(
        (s,p) => s+p.exercises,
        init )} exercises</p>
        </>
    )
  }
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)
}
const App = () => {
  const courses =  [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const Courses = ({courses}) => {
    return (
      <>
      {
        courses.map(
          course => {
            return (
              <Course course={course} />
            )
          }
        )
      }
      </>
    )}

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

export default App