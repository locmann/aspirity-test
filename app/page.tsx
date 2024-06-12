import Chevron from '../public/chevron.svg';
import CardProfile from '@/components/CardProfile/CardProfile';
import Statistics from '@/components/Statistics/Statistics';
import History from '@/components/History/History';
export default function Home() {
  return (
    <main>
      <button className="flex place-items-center py-0.8 px-1.6 gap-8 uppercase">
        <Chevron className="rotate-90" />
        Вернуться к сотрудникам
      </button>
      <div className="flex flex-col gap-1.6">
        <CardProfile />
        <div className="flex gap-1.6 sm:grid">
          <Statistics />
          <History />
        </div>
      </div>
    </main>
  );
}
