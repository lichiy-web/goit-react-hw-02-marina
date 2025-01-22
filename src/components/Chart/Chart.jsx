import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import s from './Chart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ clicks }) {
  console.log('clicks = ', clicks);
  const data = {
    labels: Object.keys(clicks),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(clicks),
        backgroundColor: [
          'rgba(253, 60, 101, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="wrapper">
      <Doughnut className={s.chart} data={data} />
    </div>
  );
}
