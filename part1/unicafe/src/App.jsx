import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood((good) => good + 1)} text={"good"} />
      <Button
        handleClick={() => setNeutral((neutral) => neutral + 1)}
        text={"neutral"}
      />
      <Button handleClick={() => setBad((bad) => bad + 1)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const allZero = good === 0 && neutral === 0 && bad === 0;
  return (
    <>
      <h1>statistics</h1>
      {allZero ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + neutral + bad} />
            <StatisticLine
              text="average"
              value={((good - bad) / (good + neutral + bad)).toFixed(1)}
            />
            <StatisticLine
              text="positive"
              value={((good / (good + neutral + bad)) * 100).toFixed(1) + "%"}
            />
          </tbody>
        </table>
      )}
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default App;
