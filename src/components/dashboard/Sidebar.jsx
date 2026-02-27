import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { TbBrandGoogleAnalytics, TbUsers } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { PiLifebuoy, PiFiles } from "react-icons/pi";
import { BiDoorOpen } from "react-icons/bi";

const Sidebar = ({ isBelow7xl = false, isOpen = false, onClose }) => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    window.location.href = "/login";
  };

  const containerClass = isBelow7xl
    ? `fixed top-3 bottom-3 left-3 z-50 w-72 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-[120%]"
      }`
    : "col-span-3 m-3 rounded-3xl flex flex-col gap-3 lg:gap-4 lg:justify-between lg:h-[calc(100vh-1.5rem)]";

  return (
    <>
      {isBelow7xl && isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 bg-black/35 z-40"
        />
      )}

      <aside
        className={`bg-base-200 rounded-3xl flex flex-col ${containerClass} anim-pop-in`}
      >
        <div className="p-4 md:p-6 text-base md:text-xl text-base-content/60">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-base-content/80 font-semibold text-xl md:text-2xl">
              <img src="/icon.png" alt="Icon" className="h-8 md:h-10" /> Donezo
            </div>
            <div className="mt-2 lg:mt-6 text-xs md:text-sm">MENU</div>
            <div className="relative font-bold pl-8 -ml-8">
              <span className="absolute left-2 -top-1.5 bottom-0 h-10 w-2 bg-linear-to-r from-secondary to-primary rounded-r-full" />
              <MdDashboard className="inline mb-1 mr-1.5 text-primary" />
              <span className=" text-base-content">Dashboard</span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:block">
              <div className="flex items-center justify-between lg:mb-4">
                <div>
                  <PiFiles className="inline mb-1 mr-1.5" />
                  Tasks
                </div>
                <div className="px-1 bg-accent text-xs md:text-sm text-white rounded-lg">
                  12+
                </div>
              </div>
              <div>
                <IoMdCalendar className="inline mb-1 mr-1.5" />
                Calendar
              </div>
              <div>
                <TbBrandGoogleAnalytics className="inline mb-1.5 mr-1.5" />
                Analytics
              </div>
              <div>
                <TbUsers className="inline mb-1 mr-1.5" />
                Team
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-4 pt-4 lg:pt-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1 mt-2 lg:mt-6 text-xs md:text-sm">
              GENERAL
            </div>
            <div>
              <IoSettingsOutline className="inline mb-0.5 mr-1.5" />
              Settings
            </div>
            <div>
              <PiLifebuoy className="inline mb-0.5 mr-1.5" size={20} />
              Help
            </div>
            <div
              onClick={logout}
              className="cursor-pointer hover:text-primary hover:font-semibold"
            >
              <BiDoorOpen className="inline mr-1.5" size={22} />
              Logout
            </div>
          </div>
        </div>

        <div className="bg-[url(/app_download_bg.jpg)] bg-cover rounded-3xl m-4 hidden lg:block">
          <div className="bg-black/40 h-full rounded-3xl text-white flex flex-col gap-1 p-3">
            <div className="text-success bg-base-100 p-1 rounded-full w-fit">
              <LiaCertificateSolid size={20} className="" />
            </div>
            <div className="text-xl">
              <span className="font-bold">Download</span> Our Mobile App
            </div>
            <div className="text-xs">Get easy in another way</div>
            <div className="mt-auto">
              <button className="btn btn-block rounded-full btn-accent text-white font-bold shadow-none hover-glow">
                Download
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
