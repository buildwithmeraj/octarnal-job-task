import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="h-24 bg-base-300 rounded-3xl flex items-center justify-between px-4">
      <div>
        <label className="input rounded-full input-xl w-full">
          <CiSearch size={40} />
          <input type="search" className="grow" placeholder="Search Tasks" />
          <kbd className="px-1 bg-gray-200 rounded-lg flex items-center justify-center pt-0.5 text-lg">
            ⌘F
          </kbd>
        </label>
      </div>
      <div className="flex items-center gap-4">
        <div className="rounded-full p-4 bg-white">
          <IoMailOutline size={22} />
        </div>
        <div className="rounded-full p-4 bg-white">
          <HiOutlineBell size={24} />
        </div>
        <div className="avatar">
          <div className="w-13 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <div className="flex items-start gap-1 flex-col">
          <div className="font-semibold">Totok Michael</div>
          <div className="text-base-content/60">
            {localStorage.getItem("userEmail")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
