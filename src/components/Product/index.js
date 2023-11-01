import PropTypes from "prop-types";
import {forwardRef} from "react";
// import {useState} from "react";

import Image from "../Image";
import images from "../../assets/images/";
import "./Product.scss";

import { AiOutlineHeart } from "react-icons/ai";

const Product = forwardRef(({src, alt, className, price, sale, isNew, fallback: customFallback = images.noImage, ...props}, ref) => {
  // const [fallback, setFallback] = useState("");

  // const handleError = () => {
  //   setFallback(customFallback);
  // }

  const cost =
  Math.ceil((price - (price * sale) / 100) / 1000) *
  1000;
return (
  <div className={`w-[235px] cursor-pointer ${className}`}>
    <div className="item relative mb-4">
      <div className="">
        <p className="absolute top-2 left-2 z-10 px-3 py-[2px] w-[66px] rounded-tr-xl rounded-bl-xl text-base font-semibold text-white bg-red-600">
          - {sale}%
        </p>
        {isNew && (
          <p className="absolute top-10 left-2 z-10 px-3 py-[2px] w-[66px] text-center rounded-tr-xl rounded-bl-xl text-base font-semibold text-white bg-yellow-600">
            New
          </p>
        )}
      </div>
      <AiOutlineHeart className="absolute top-2 right-2 z-10 text-red-600" />
      <Image src={src} alt={alt} className="img" />
    </div>
    <p className="text-lg font-semibold text-center">{alt}</p>
    <p className="text-base font-bold text-center text-[var(--primary)]">
      {cost}đ
      <span className="ml-5 text-sm font-normal text-[#666666] line-through">
        {price}đ
      </span>
    </p>
  </div>
);
})

Product.propTypes = {
  src: PropTypes.string, 
  className: PropTypes.string, 
  fallback: PropTypes.string
}

export default (Product);
