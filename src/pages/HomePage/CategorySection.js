import Image from "../../components/Image";

import "./Image.scss";

const CATEGORY = [
  {
    img: "./img/categorySection/danhmuc_1.webp",
    alt: "danhmuc",
    title: "Bánh kếp",
    btn: "Xem ngay",
    to: "",
  },
  {
    img: "./img/categorySection/danhmuc_2.webp",
    alt: "danhmuc",
    title: "Bánh su kem",
    btn: "Xem ngay",
    to: "",
  },
  {
    img: "./img/categorySection/danhmuc_3.webp",
    alt: "danhmuc",
    title: "Bánh mì nướng",
    btn: "Xem ngay",
    to: "",
  },
  {
    img: "./img/categorySection/danhmuc_4.webp",
    alt: "danhmuc",
    title: "Bánh khác",
    btn: "Xem ngay",
    to: "",
  },
];

function CategorySection() {
  return (
    <div className="flex w-[1300px] m-auto justify-around cursor-pointer mb-[50px]">
      {CATEGORY.map((item) => (
        <div className="item w-[300px] relative">
          <Image src={item.img} alt={item.alt} className="rounded-md img"/>
          <div className="bg-[rgba(255,255,255,0.68)] absolute bottom-0 w-[100%] font-['Playball'] flex flex-col items-center p-2">
            <h3 className="text-2xl font-bold ">{item.title}</h3>
            <a href={item.to} className="text-sm hover:text-[var(--primary)]">{item.btn}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
