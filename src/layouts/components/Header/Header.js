import Menu from "./Menu.js";
import Action from "./Action.js";

// const ACTION = [

// ];

function Header() {
  return (
    <div className="fixed z-50 wrapper flex flex-row items-center justify-between w-5/6 left-28 text-white text-lg font-bold p-2.5">
      <div className="w-32">
        <a href="/">
          <img
            className="logo w-24 cursor-pointer"
            src="./img/logo.png"
            alt="logo"
          />
        </a>
      </div>
      <Menu />
      <Action />
    </div>
  );
}

export default Header;
