import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
import './App.css'

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedFeedback = localStorage.getItem("saved-feedback-statistics");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setClicks({
      ...clicks,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("saved-feedback-statistics", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div>
      <Header />
      <Description />

      <Options
        onUpdate={updateFeedback}
        onReset={handleReset}
        showResetBtn={totalFeedback > 0}
      />

      <div>
        {!totalFeedback ? (
          <Notification />
        ) : (
          <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
            total={totalFeedback}
            percentFeedback={positiveFeedback}
          />
        )}
      </div>
    </div>
  );
}