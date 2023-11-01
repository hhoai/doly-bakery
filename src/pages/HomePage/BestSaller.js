import "./Image.scss";
import Product from "../../components/Product";

const BEST_SALLER = [
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
  },{
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

function BestSaller() {
  return (
    <div className="w-[1300px] m-auto py-10 justify-around">
      <div className="text-center">
      <h2 className="text-4xl mb-5 hover:text-[var(--primary)] cursor-pointer">Được mua nhiều nhất</h2>
      <img src="./img/homepage/title.webp" alt="title" className="m-auto mb-8"/>
      </div>
      <div className="flex flex-wrap justify-between">
        {BEST_SALLER.map((item, key) => (
            <Product
              src={item.img}
              alt={item.alt}
              sale={item.sale}
              price={item.price}
              isNew={item.new}
              className='mb-8'
            />
        ))}
      </div>
    </div>
  );
}

export default BestSaller;
