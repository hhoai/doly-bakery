import { BiSearchAlt, BiUser, BiCartAlt } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

const ACTION = [
  {
    title: "search",
    icon: BiSearchAlt,
  },
  {
    title: "user-information",
    icon: BiUser,
    children: [
      {
        title: "Đăng kí",
      },
      {
        title: "Đăng nhập"
      }
    ]
  },
  {
    title: "favorites",
    icon: MdFavoriteBorder,
  },
  {
    title: "cart",
    icon: BiCartAlt,
  },
];

function Action() {
  return (
    <div className="action flex flex-row items-center gap-x-5 text-3xl cursor-pointer">
      {ACTION.map((action) => (
        <action.icon />
      ))}
    </div>
  );
}

export default Action;
