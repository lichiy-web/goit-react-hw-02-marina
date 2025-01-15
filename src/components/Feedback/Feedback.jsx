import s from './Feedback.module.css'

const Feedback = ({
    good,
    neutral,
    bad,
    total,
    percentFeedback,
  }) => {
    return (
      <ul className={s.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {percentFeedback}%</li>
      </ul>
    );
  };

export default Feedback