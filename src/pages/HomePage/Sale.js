import Image from "../../components/Image";
import "./Image.scss";

import { AiOutlineHeart } from "react-icons/ai";

const SALE = [
  {
    img: "./img/homepage/sale/banh1.webp",
    alt: "Bánh sừng bò mini",
    sale: 10,
    price: 40000,
  },
  {
    img: "./img/homepage/sale/banh2.webp",
    alt: "Bánh mì nướng Caramen",
    sale: 25,
    price: 20000,
    new: "New",
  },
  {
    img: "./img/homepage/sale/banh3.webp",
    alt: "Bánh quy bơ mứt dâu",
    sale: 16,
    price: 50000,
    new: "New",
  },
  {
    img: "./img/homepage/sale/banh4.webp",
    alt: "Caramen",
    sale: 28,
    price: 18000,
  },
  {
    img: "./img/homepage/sale/banh5.webp",
    alt: "Mousse chanh leo",
    sale: 21,
    price: 39000,
  },
];

function Sale() {
  return (
    <div className="w-[1300px] m-auto justify-around cursor-pointer mb-[50px] border-4 border-solid border-[var(--primary)] rounded p-2.5">
      <div className="flex flex-col items-center">
        <p className="text-4xl my-5">Bánh đang giảm giá</p>
        <img src="./img/homepage/title.webp" alt="" />
        <p className="text-sm my-5">
          Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm nhất!
        </p>
      </div>
      <div className="flex justify-between mb-6">
        {SALE.map((item) => {
          let cost = Math.ceil((item.price - (item.price * item.sale) / 100)/1000) * 1000;
          console.log(cost);
          return (
            <div className="w-[235px]">
              <div className="item relative mb-4">
                <span className="absolute top-2 left-2 z-10 px-3 py-[2px] rounded-tr-xl rounded-bl-xl text-base font-semibold text-white bg-red-600">
                  -{item.sale}%
                </span>
                {/* {item.new ?? <span className="absolute top-5 z-10 left-2 px-3 py-[2px] rounded-tr-md rounded-bl-md text-base font-semibold text-white bg-yellow-600">
                  {item.new}
                </span>} */}
                <AiOutlineHeart className="absolute top-2 right-2 z-10 text-red-600"/>
                <Image src={item.img} alt={item.alt} className="img" />
              </div>
              <p className="text-lg font-semibold text-center">{item.alt}</p>
              <p className="text-base font-bold text-center text-[var(--primary)]">
                {cost}đ<span className="ml-5 text-sm font-normal text-[#666666] line-through">{item.price}đ</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sale;
