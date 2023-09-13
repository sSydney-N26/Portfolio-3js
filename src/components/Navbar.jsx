export const Nav = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;
  
    return (
      <>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-30 fixed top-4 right-10 p-3 bg-pink-700 w-11 h-11 rounded-md"
        >
          <div
            className={`bg-white h-1 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-1" : ""
            }`}
          />
          <div
            className={`bg-white h-1 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-1 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 bg-pink-50 transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-80" : "w-0"}`}
        >
          <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
            <MenuTitles label="About" onClick={() => onSectionChange(0)} />
            <MenuTitles label="Skills" onClick={() => onSectionChange(1)} />
            <MenuTitles label="Projects" onClick={() => onSectionChange(3)} />
            <MenuTitles label="Contact" onClick={() => onSectionChange(5)} />
          </div>
        </div>
      </>
    );
  };
  
  const MenuTitles = (props) => {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="text-2xl font-bold cursor-pointer hover:text-pink-600 transition-colors"
      >
        {label}
      </button>
    );
  };