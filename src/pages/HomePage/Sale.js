// import Image from "../../components/Image";
import "./Image.scss";
import Product from "../../components/Product";

// import { AiOutlineHeart } from "react-icons/ai";

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
    new: true,
  },
  {
    img: "./img/homepage/sale/banh3.webp",
    alt: "Bánh quy bơ mứt dâu",
    sale: 16,
    price: 50000,
    new: true,
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
        <p className="text-4xl my-5 hover:text-[var(--primary)] cursor-pointer">Bánh đang giảm giá</p>
        <img src="./img/homepage/title.webp" alt="" />
        <p className="text-sm my-5">
          Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm nhất!
        </p>
      </div>
      <div className="flex justify-between mb-6">
        {SALE.map((item) => (
          <Product
            src={item.img}
            alt={item.alt}
            sale={item.sale}
            price={item.price}
            isNew={item.new}
          />
        ))}
      </div>
    </div>
  );
}

export default Sale;
