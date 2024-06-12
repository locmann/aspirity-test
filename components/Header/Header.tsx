import Logo from '../../public/logo.svg';
import Tab from '@/ui/Tab';
import Burger from '../../public/burger.svg';
function Header() {
  return (
    <header className="flex py-2.4 justify-between align-middle">
      <Logo />
      <div className="flex gap-8">
        <button className="bg-accent-blue px-1.6 py-4 rounded-4 font-semibold text-14 sm:hidden uppercase">
          Создать счет
        </button>
        <button className="bg-accent-blue px-1.6 py-4 rounded-4 font-semibold text-14 sm:hidden uppercase">
          Корзина
        </button>
        <Tab />

        <button className="p-0.8">
          <Burger />
        </button>
      </div>
    </header>
  );
}

export default Header;
