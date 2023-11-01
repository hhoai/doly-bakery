import { BsArrowBarUp } from "react-icons/bs";
import {animateScroll as scroll } from 'react-scroll';


const scrollToTop = () => {
  scroll.scrollTo(0);
}

function Button() {
  return <button className="fixed bottom-5 right-5 border-[var(--primary)] border-2 border-solid rounded-full" onClick={scrollToTop}>
    <BsArrowBarUp className="m-2.5 text-[var(--primary)]"/>
    </button>
}

export default Button;
