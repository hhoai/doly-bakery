import { MdArrowDropDown } from "react-icons/md";

const MENU_ITEMS = [
  {
    title: "Trang chủ",
  },
  {
    title: "Giới thiệu",
  },
  {
    title: "Sản phẩm",
    icon: MdArrowDropDown,
  },
  {
    title: "Tin tức",
  },
  {
    title: "Liên hệ",
  },
  {
    title: "Hệ thống cửa hàng",
  },
];

function Menu() {
  return (
    <div className="menu flex flex-row items-center gap-x-10">
      {MENU_ITEMS.map((item) => {
        if (item.icon) {
          return (
            <div className="menu-item flex items-center cursor-pointer">
              <p>{item.title}</p>
              <item.icon className="text-2xl" />
            </div>
          );
        } else {
          return <p className="cursor-pointer">{item.title}</p>;
        }
      })}
    </div>
  );
}

export default Menu;
