const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const parts = [
        { name: part1, exercises: exercises1 },
        { name: part2, exercises: exercises2 },
        { name: part3, exercises: exercises3 }
    ]
    return (
        <div>
            <Header course_name={course} />
            <Content parts={parts} />
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
        </div>
    )
}

const Header = ({course_name}) => {
    return <h1>{course_name}</h1>
}

const Total = ({exercises1, exercises2, exercises3}) => {
    return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </div>
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default App