import Image from 'next/image';
import { data } from '@/data';

function CardProfile() {
  return (
    <div className="flex flex-col rounded-1.2 bg-secondary-bg pl-40 pt-40 sm:pt-32 sm:px-0">
      <div className="flex gap-48 max-w-60.6 sm:grid sm:self-center">
        <Image
          src={data.avatar}
          alt="avatar"
          width={160}
          height={160}
          className="rounded-full object-cover w-16 h-16 sm:place-self-center"
        />
        <div className="flex flex-col gap-48 justify-around sm:text-center sm:gap-2.4">
          <h1 className="text-48 font-bold">{data.fullName}</h1>
          <div className="grid gap-1.6">
            <p>{data.position}</p>
            <p>{data.address} • 14:03</p>
          </div>
        </div>
      </div>
      <div className="m-8">
        <button className="uppercase border-b-1 border-border-primary py-4 px-1.6 font-semibold text-secondary-text">
          Основная информация
        </button>
        <button className="uppercase border-b-2 border-accent-blue py-4 px-1.6 font-semibold">
          Отпуск
        </button>
        <button className="uppercase border-b-1 border-border-primary py-4 px-1.6 font-semibold text-secondary-text">
          Оборудование
        </button>
      </div>
    </div>
  );
}

export default CardProfile;
