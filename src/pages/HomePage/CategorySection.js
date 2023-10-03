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
    title: "Bánh xu kem",
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
    <div className="flex w-[1300px] m-auto justify-around cursor-pointer">
      {CATEGORY.map((item) => (
        <div className="w-[300px]">
          <img src={item.img} alt={item.alt} className=""/>
          <div className="bg-transparent">
            <p className="">{item.title}</p>
            <p className="">{item.btn}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
