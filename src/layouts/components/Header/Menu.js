import React from "react";
// import Tippy from "@tippy/react";
import { NavLink } from "react-router-dom";

import SubMenu from "./SubMenu.js";

import { MdArrowDropDown } from "react-icons/md";

const MENU_ITEMS = [
  {
    title: "Trang chủ",
    to: "/",
  },
  {
    title: "Giới thiệu",
    to: "/gioi-thieu",
  },
  {
    title: "Sản phẩm",
    icon: MdArrowDropDown,
    to: "/san-pham/tat-ca",
    children: SubMenu,
  },
  {
    title: "Tin tức",
    to: "/tin-tuc",
  },
  {
    title: "Liên hệ",
    to: "/lien-he",
  },
  {
    title: "Hệ thống cửa hàng",
    to: "/he-thong-cua-hang",
  },
];

function Menu() {
  const hoverStyle =
    " hover:text-[#cd9b32] hover:underline hover:underline-offset-8";

  return (
    <div className="menu flex flex-row items-center gap-x-10">
      {MENU_ITEMS.map((item) => {
        // if (item.icon) {
        //   return (
        //     <Tippy>
        //       <div
        //         className={`menu-item flex items-center cursor-pointer ${hoverStyle}`}
        //       >
        //         <p className="">{item.title}</p>
        //         <item.icon className="text-2xl" />
        //       </div>
        //     </Tippy>
        //   );
        // } else {
          return (
            <NavLink
              to={item.to}
              style={({ isActive, isPending }) => {
                return {
                  textDecoration: isActive ? "underline solid" : "",
                  color: isActive ? "#cd9b32" : "",
                  textUnderlineOffset: isPending ? "" : "8px",
                };
              }}
              className={`${
                item.icon ? "menu-item flex items-center cursor-pointer" : ""
              } ${hoverStyle}`}
            >
              {item.title}
              {item.icon && <item.icon />}
            </NavLink>
          );
        // }
      })}
    </div>
  );
}

export default Menu;
