import { useState } from "react";
import Section from "components/Feedback/Section";
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistic from "components/Feedback/Statistic";
import Notification from "components/Feedback/Notification";
  
function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const keys = ['good','neutral','bad'];

  const handleIncrement = (option) => {
    console.log(option);
    switch (option) {
      case 'good':
        setGood((prevState) => prevState + 1);
        break;
      case 'neutral':
        setNeutral((prevState)=> prevState + 1);
        break;
      
      case 'bad':
        setBad((prevState)=> prevState + 1);
        break;
      
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const  countPositiveFeedbackPercentage = () => { 
    return Number(good >= 1 ? ((good / countTotalFeedback()) * 100).toFixed(0) : 0);
  };
   
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onIncrement={handleIncrement}
            options={ keys}
          />
        </Section>
        <Section title={"Statistic"}>
          {countTotalFeedback() !== 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              count={countPositiveFeedbackPercentage()}
            />) : (<Notification message={'There is no feedback'}/>)
          }
        </Section>
        
      </>
    )
}

export default App;
