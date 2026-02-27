import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ showSidebarToggle = false, onToggleSidebar }) => {
  return (
    <div className="bg-base-200 rounded-3xl px-3 py-3 md:px-4 md:py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between anim-fade-up">
      <div className="w-full md:max-w-md flex items-center gap-2">
        {showSidebarToggle && (
          <button
            type="button"
            onClick={onToggleSidebar}
            className="btn btn-circle btn-sm md:btn-md bg-white border-0 shrink-0 hover-lift"
            aria-label="Toggle sidebar"
          >
            <RxHamburgerMenu size={20} />
          </button>
        )}
        <label className="input rounded-full input-md md:input-lg w-full border-0">
          <CiSearch size={24} className="md:hidden" />
          <CiSearch size={34} className="hidden md:inline" />
          <input type="search" className="grow" placeholder="Search Tasks" />
          <kbd className="hidden sm:flex px-1 bg-gray-200 rounded-lg items-center justify-center pt-0.5 text-sm">
            ⌘F
          </kbd>
        </label>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4">
        <div className="rounded-full p-2.5 md:p-3 bg-white hover-lift">
          <IoMailOutline size={20} />
        </div>
        <div className="rounded-full p-2.5 md:p-3 bg-white hover-lift">
          <HiOutlineBell size={22} />
        </div>
        <div className="avatar">
          <div className="w-11 md:w-13 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <div className="hidden sm:flex items-start gap-0.5 flex-col min-w-0">
          <div className="font-semibold">Totok Michael</div>
          <div className="text-base-content/60 truncate max-w-40 md:max-w-none">
            {localStorage.getItem("userEmail")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
