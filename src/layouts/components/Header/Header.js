import Menu from "./Menu.js";

import { BiSearchAlt, BiUser, BiCartAlt } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";


// const ACTION = [

// ];

function Header() {
  return ( 
    <div className='wrapper flex flex-row items-center justify-between w-5/6 fixed left-28 bg-transparent text-white text-lg font-bold p-2.5' >
      <div className='w-32'>
        <img className='logo w-24 cursor-pointer'  src='./img/logo.png' alt='logo' />
      </div>      
      <Menu/>
      <div className='action flex flex-row items-center gap-x-5 text-3xl cursor-pointer cursor-pointer' >
        {/* action */}
        <BiSearchAlt/>
        <BiUser/>
        <MdFavoriteBorder/>
        <BiCartAlt/>
      </div>
    </div>
   );
}

export default Header;