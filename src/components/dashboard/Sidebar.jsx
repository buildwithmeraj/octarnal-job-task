import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { TbBrandGoogleAnalytics, TbUsers } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { PiLifebuoy, PiFiles } from "react-icons/pi";
import { BiDoorOpen } from "react-icons/bi";

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    window.location.href = "/login";
  };
  return (
    <div className="bg-base-300 col-span-2 m-4 rounded-3xl flex flex-10 flex-col gap-4 justify-between">
      <div className="flex-7 p-8 text-xl text-base-content/60">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-base-content/80 font-bold text-3xl">
            <img src="/icon.png" alt="Icon" className="h-14" /> Donezo
          </div>
          <div className="mt-6 text-sm">MENU</div>
          <div className="relative text-green-800 font-bold pl-8 -ml-8">
            <span className="absolute left-0 -top-1.5 bottom-0 h-10 w-2 bg-green-700 rounded-r-full" />
            <MdDashboard className="inline mb-1 mr-1.5" />
            Dashboard
          </div>
          <div className="flex items-center justify-between">
            <div>
              <PiFiles className="inline mb-1 mr-1.5" />
              Tasks
            </div>
            <div className="px-2 bg-green-800 text-sm text-white rounded-lg">
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
        <div className="flex flex-col gap-4 pt-12">
          <div className="mt-6 text-sm">GENERAL</div>
          <div>
            <IoSettingsOutline className="inline mb-0.5 mr-1.5" />
            Settings
          </div>
          <div>
            <PiLifebuoy className="inline mb-0.5 mr-1.5" size={22} />
            Help
          </div>
          <div
            onClick={logout}
            className="cursor-pointer hover:text-green-800 hover:font-semibold"
          >
            <BiDoorOpen className="inline mr-1.5" size={22} />
            Logout
          </div>
        </div>
      </div>

      <div className="bg-[url(/app_download_bg.jpg)] bg-cover rounded-3xl flex-3 ">
        <div className="bg-black/40 h-full rounded-3xl text-white flex flex-col gap-1 p-3">
          <div className="text-success bg-base-100 p-1 rounded-full w-fit">
            <LiaCertificateSolid size={30} className="" />
          </div>
          <div className="text-2xl">
            <span className="font-bold">Download</span> Our Mobile App
          </div>
          <div>Get easy in another way</div>
          <div className="mt-auto">
            <button className="btn btn-block rounded-full bg-green-800 text-white font-bold border-green-800 shadow-none">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
