import Chevron from '../public/chevron.svg';
function Tab() {
  return (
    <div className="flex border border-solid border-border-primary rounded-1.8 px-1.6 py-0.6 justify-center items-center">
      <img
        src="/avatar.png"
        alt="avatar"
        className="rounded-full"
        width={24}
        height={24}
      />

      <div className="flex justify-center items-center w-2.4 h-2.4">
        <Chevron />
      </div>
    </div>
  );
}

export default Tab;
