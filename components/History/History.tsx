import { data } from '@/data';
import Arrow from '../../public/arrow.svg';
function History() {
  return (
    <div className="flex flex-col w-962 rounded-1.2 gap-1.6 bg-secondary-bg p-30 sm:w-auto sm:pt-30 sm:px-0 sm:justify-center">
      <div className="flex justify-between items-center">
        <span className="text-h5 text-primary-text">История отпусков</span>
        <span className="text-sub2 text-tertiary-text">Посмотреть все</span>
      </div>
      <table className="table-fixed w-full table sm:hidden">
        <thead>
          <tr>
            <th className="text-sub1 text-secondary-text text-left py-1.6 px-0.8">Тип</th>
            <th className="text-sub1 text-secondary-text text-left py-1.6 px-0.8">Даты отпуска</th>
            <th className="text-sub1 text-secondary-text text-right py-1.6 px-0.8">
              Количество дней
            </th>
          </tr>
        </thead>
        <tbody>
          {data.vacationHistory.map((date, index) => (
            <tr
              className="border-t-1 border-border-primary"
              key={date.id}
            >
              <td className="text-sub1 text-left py-1.6 px-0.8">{date.type}</td>
              <td className="text-sub1 flex items-center gap-8 text-center py-1.6 px-0.8">
                {date.dateStart}
                <Arrow className={index === 0 ? 'text-accent-yellow' : 'text-accent-red'} />
                {date.dateEnd}
              </td>
              <td className="text-sub1 text-right py-1.6 px-0.8">{date.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="hidden sm:flex flex-col gap-4">
        {data.vacationHistory.map((date, index) => (
          <div
            className="grid border-t-1 border-border-primary p-4 gap-1.6"
            key={date.id}
          >
            <div className="flex flex-col gap-8">
              <span className="text-sub1 text-secondary-text">Тип</span>
              <span className="text-sub1">{date.type}</span>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-sub1 text-secondary-text">Даты отпуска</span>
              <span className="text-sub1 flex items-center gap-8">
                {date.dateStart}
                <Arrow className={`${index === 0 ? 'text-accent-yellow' : 'text-accent-red'}`} />
                {date.dateEnd}
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-sub1 text-secondary-text">Количество дней</span>
              <span className="text-sub1">{date.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
