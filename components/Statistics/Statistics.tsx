'use client';

import Info from '../../public/info.svg';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend, Tooltip, Chart } from 'chart.js';
import { data as userData } from '@/data';

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart: Chart<'doughnut'>): void {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = `normal 1.6rem sans-serif`;
    ctx.fillStyle = '#e1e3e6';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      `${data.datasets[0].data[0]} дня`,
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y,
    );
    ctx.restore();
  },
};

ChartJS.register(ArcElement, Tooltip, Legend, textCenter);

function Statistics() {
  const data = {
    datasets: [
      {
        data: [userData.stats.available, userData.stats.planned, userData.stats.rest],
        backgroundColor: ['#25824f', '#ffb649', '#db4546'],
        borderWidth: 0,
        cutout: '90%',
      },
    ],
  };
  return (
    <div className="flex flex-col flex-1 gap-1.6 rounded-1.2 bg-secondary-bg p-30 sm:pt-30 sm:px-1.6">
      <div className="flex gap-8">
        Статистика <Info />
      </div>
      <div className="max-w-50 sm:w-32.8">
        <Doughnut
          data={data}
          plugins={[textCenter]}
          options={{ aspectRatio: 4 }}
          className="text-5xl sm:text-xs"
        />
      </div>
      <ul className="flex flex-col gap-8">
        <li className="flex justify-between border-1 border-border-primary rounded-1.6 py-1.2 px-1.0">
          <span>
            <span className="text-accent-green">•</span> Доступно сейчас
          </span>
          <span>{userData.stats.available} дня</span>
        </li>
        <li className="flex justify-between border-1 border-border-primary rounded-1.6 py-1.2 px-1.0">
          <span>
            <span className="text-accent-yellow">•</span> Запланировано
          </span>
          <span>{userData.stats.planned} дней</span>
        </li>
        <li className="flex justify-between border-1 border-border-primary rounded-1.6 py-1.2 px-1.0">
          <span>
            <span className="text-accent-red">•</span> Использовано/недоступно
          </span>
          <span>{userData.stats.rest} дня</span>
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
