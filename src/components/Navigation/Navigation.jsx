import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Nanigation = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="flex flex-col xl:flex-row justify-between   mb-3 items-end h-16 p-2 ">
      <div className="w-full xl:w-4/12 flex justify-between h-full items-center">
        <p className="text-xl font-bold flex items-center ">
          <span>
            <FaShoppingBag className="text-4xl" />
          </span>
          Danial Shopping
        </p>
        <button className="block xl:hidden" onClick={() => setActive(!active)}>
          <FaBars />
        </button>
      </div>

      <div className={`w-3/12 mt-4 xl:mt-0 xl:w-8/12 xl:block ${active ? "block" : "hidden"} `}>
        <ul className="flex flex-col  xl:flex-row w-full h-full items-center">
          <li className="px-4 ">
            <NavLink
              to="/"
              className={(active) =>
                active.isActive
                  ? "font-bold border-b-2 border-stone-700 pb-2 inline-block w-full "
                  : "hover:border-b-2 hover:border-stone-700 pb-2 inline-block w-full"
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/products"
              className={(active) =>
                active.isActive
                  ? "font-bold border-b-2 border-stone-700 pb-2 inline-block w-full"
                  : "hover:border-b-2 hover:border-stone-700 pb-2 inline-block w-full "
              }
            >
              محصولات
            </NavLink>
          </li>
          <li className="px-4 w-full xl:w-auto flex">
            <NavLink
              to="/about"
              className={(active) =>
                active.isActive
                  ? "font-bold border-b-2 border-stone-700 pb-2 inline-block w-full"
                  : "hover:border-b-2 hover:border-stone-700 pb-2 inline-block w-full"
              }
            >
              درباره ما
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/cotact"
              className={(active) =>
                active.isActive
                  ? "font-bold border-b-2 border-stone-700 pb-2 inline-block w-full"
                  : "hover:border-b-2 hover:border-stone-700 pb-2 inline-block w-full"
              }
            >
              تماس با ما
            </NavLink>
          </li>
          <li className="px-4 ml-0 xl:ml-48 ">
            <NavLink
              to="/login"
              className={(active) =>
                active.isActive
                  ? "font-bold border-b-2 border-stone-700 py-2 flex items-center justify-between"
                  : "hover:border-b-2 hover:border-stone-700  flex items-center justify-between"
              }
            >
              <BsBoxArrowInRight />
              ورود
            </NavLink>
          </li>
          <li className="px-4 ">
            <NavLink
              to="/signup"
              className={(active) =>
                active.isActive
                  ? "font-bold border-b-2 border-stone-700 py-2 flex items-center justify-between"
                  : "hover:border-b-2 hover:border-stone-700  flex items-center justify-between"
              }
            >
              <FaUserPlus />
              ثبت نام
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/cart"
              className={(active) =>
                active.isActive
                  ? "font-bold border-b-2 border-stone-700 py-2 flex items-center justify-between"
                  : "hover:border-b-2 hover:border-stone-700  flex items-center justify-between"
              }
            >
              <BsFillCartFill />
              سبد خرید
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nanigation;
