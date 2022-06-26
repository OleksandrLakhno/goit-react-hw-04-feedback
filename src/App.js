import { useState } from "react";
import Section from "components/Feedback/Section";
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistic from "components/Feedback/Statistic";
import Notification from "components/Feedback/Notification";
  
function App () {
  const [feedback,setFeedback] = useState({good:0,neutral: 0,bad: 0})

  const handleIncrement = (e) => {
    const stateKey = e.target.name;
    setFeedback(state => ({ ...feedback,[stateKey]: state[stateKey] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, feedback) => {return acc + feedback } , 0);
  };
  const  countPositiveFeedbackPercentage = () => { 
    const { good } = feedback;
    return Number(good >= 1 ? ((good / countTotalFeedback()) * 100).toFixed(0) : 0);
  };
  
    const { good,neutral,bad } = feedback;
   
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onIncrement={handleIncrement}
            options={ Object.keys(feedback)}
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
