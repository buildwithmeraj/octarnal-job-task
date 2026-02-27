import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdArrowDropup } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { TiVideo } from "react-icons/ti";
import { FaMagic } from "react-icons/fa";
import { GrPauseFill } from "react-icons/gr";
import { FaStop } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";

const API_BASE = "https://task-api-eight-flax.vercel.app";

const Content = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE}/api/dashboard`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        setDashboardData(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Could not load dashboard data");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchDashboardData();

    return () => controller.abort();
  }, []);

  const overview = dashboardData?.overview || {};
  const users = dashboardData?.users || [];
  const analytics = dashboardData?.analytics || [];
  const products = dashboardData?.products || [];

  const totalUsers = overview.totalUsers || 0;
  const activeUsers = overview.activeUsers || 0;
  const revenue = overview.revenue || 0;
  const growth = overview.growth || 0;

  const views0 = analytics[0]?.views || 0;
  const views1 = analytics[1]?.views || 0;
  const views2 = analytics[2]?.views || 0;
  const views3 = analytics[3]?.views || 0;
  const views4 = analytics[4]?.views || 0;

  const maxViews = Math.max(views0, views1, views2, views3, views4, 1);
  const toHeight = (views) =>
    `${Math.max(52, Math.round((views / maxViews) * 112))}px`;

  const progressPct = totalUsers
    ? Math.round((activeUsers / totalUsers) * 100)
    : 0;

  const user0 = users[0];
  const user1 = users[1];
  const user2 = users[2];
  const user3 = users[3];
  const reminderUser = users[0];

  const product0 = products[0];
  const product1 = products[1];
  const product2 = products[2];
  const product3 = products[3];

  return (
    <div className="bg-base-200 rounded-3xl mt-3 p-3 md:p-4 lg:h-[calc(100vh-8rem)] flex flex-col overflow-hidden anim-fade-up">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between shrink-0">
        <div>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Dashboard
          </h2>
          <p className="mt-1 md:mt-2 text-sm md:text-base text-base-content/60">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <button className="btn btn-primary rounded-full bg-linear-to-r from-secondary to-primary btn-sm md:btn-md lg:btn-lg hover-glow">
            <IoAdd />
            Add Project
          </button>
          <button className="btn btn-outline border-primary text-primary rounded-full btn-sm md:btn-md lg:btn-lg hover-lift">
            Import Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-2 shrink-0">
        <div className="rounded-3xl p-5 flex flex-col gap-3 h-full bg-linear-to-r from-secondary to-primary text-white hover-lift anim-fade-up anim-delay-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Total Users</h3>
            <button
              type="button"
              className="rounded-full p-2 bg-base-100 text-base-content"
            >
              <GoArrowUpRight size={20} />
            </button>
          </div>
          <div className="text-5xl font-semibold mt-auto">
            {loading ? "--" : totalUsers.toLocaleString()}
          </div>
          <div className="mt-auto text-xs flex items-center gap-2 text-success">
            <span className="px-1.5 rounded-md border border-success/40 text-success">
              {loading ? "--" : `${growth}%`}{" "}
              <IoMdArrowDropup className="inline -ml-1 mb-0.5" />
            </span>
            Live API overview
          </div>
        </div>

        <div className="rounded-3xl p-5 flex flex-col gap-3 h-full bg-white hover-lift anim-fade-up anim-delay-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Active Users</h3>
            <button
              type="button"
              className="rounded-full p-2 border text-base-content"
            >
              <GoArrowUpRight size={20} />
            </button>
          </div>
          <div className="text-5xl font-semibold mt-auto">
            {loading ? "--" : activeUsers.toLocaleString()}
          </div>
          <div className="mt-auto text-xs flex items-center gap-2 text-primary">
            <span className="px-1.5 rounded-md border border-success/40 text-success">
              {loading ? "--" : `${progressPct}%`}{" "}
              <IoMdArrowDropup className="inline -ml-1 mb-0.5" />
            </span>
            Active ratio
          </div>
        </div>

        <div className="rounded-3xl p-5 flex flex-col gap-3 h-full bg-white hover-lift anim-fade-up anim-delay-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Revenue</h3>
            <button
              type="button"
              className="rounded-full p-2 border text-base-content"
            >
              <GoArrowUpRight size={20} />
            </button>
          </div>
          <div className="text-5xl font-semibold mt-auto">
            {loading ? "--" : `$${revenue.toLocaleString()}`}
          </div>
          <div className="mt-auto text-xs flex items-center gap-2 text-primary">
            <span className="px-1.5 rounded-md border border-success/40 text-success">
              100 <IoMdArrowDropup className="inline -ml-1 mb-0.5" />
            </span>
            From API overview
          </div>
        </div>

        <div className="rounded-3xl p-5 flex flex-col gap-3 h-full bg-white hover-lift anim-fade-up anim-delay-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Products</h3>
            <button
              type="button"
              className="rounded-full p-2 border text-base-content"
            >
              <GoArrowUpRight size={20} />
            </button>
          </div>
          <div className="text-5xl font-semibold mt-auto">
            {loading ? "--" : products.length}
          </div>
          <div className="mt-auto text-xs flex items-center gap-2 text-primary">
            <span className="px-1.5 rounded-md border border-success/40 text-success">
              {loading ? "--" : `${growth}%`}{" "}
              <IoMdArrowDropup className="inline -ml-1 mb-0.5" />
            </span>
            Product catalog size
          </div>
        </div>
      </div>

      {error && (
        <div className="alert alert-error mt-3 py-2 text-sm shrink-0">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 mt-3 md:mt-4 gap-3 flex-1 min-h-0">
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-3 min-h-0">
          <div className="flex flex-col md:flex-row flex-1 gap-3 min-h-0">
            <div className="bg-white rounded-3xl p-4 md:p-6 md:flex-[2] min-h-0 hover-lift anim-fade-up anim-delay-1">
              <span className="font-semibold text-lg">Project Analytics</span>
              <div className="grid grid-cols-7 items-end gap-2 md:gap-3 mt-5 md:mt-8">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full max-w-8 md:max-w-12 rounded-full border border-base-content/40 bg-[repeating-linear-gradient(45deg,#9ca3af_0_2px,transparent_2px_6px)]"
                    style={{ height: toHeight(views0) }}
                  />
                  <span className="text-xs text-base-content/50">S</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full max-w-8 md:max-w-12 rounded-full bg-secondary"
                    style={{ height: toHeight(views1) }}
                  />
                  <span className="text-xs text-base-content/50">M</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full max-w-8 md:max-w-12 rounded-full bg-success"
                    style={{ height: toHeight(views2) }}
                  />
                  <span className="text-xs text-base-content/50">T</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full max-w-8 md:max-w-12 rounded-full bg-secondary"
                    style={{ height: toHeight(views3) }}
                  />
                  <span className="text-xs text-base-content/50">W</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full max-w-8 md:max-w-12 rounded-full border border-base-content/40 bg-[repeating-linear-gradient(45deg,#9ca3af_0_2px,transparent_2px_6px)]"
                    style={{ height: toHeight(views4) }}
                  />
                  <span className="text-xs text-base-content/50">T</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full max-w-8 md:max-w-12 rounded-full border border-base-content/40 bg-[repeating-linear-gradient(45deg,#9ca3af_0_2px,transparent_2px_6px)]"
                    style={{ height: "70px" }}
                  />
                  <span className="text-xs text-base-content/50">F</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full max-w-8 md:max-w-12 rounded-full border border-base-content/40 bg-[repeating-linear-gradient(45deg,#9ca3af_0_2px,transparent_2px_6px)]"
                    style={{ height: "82px" }}
                  />
                  <span className="text-xs text-base-content/50">S</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-4 md:p-6 md:flex-1 min-h-0 hover-lift anim-fade-up anim-delay-2">
              <span className="font-semibold text-lg">Reminders</span>
              <h4 className="text-xl md:text-2xl font-semibold text-primary leading-tight mb-2">
                {reminderUser
                  ? `Follow up with ${reminderUser.name}`
                  : "No reminder"}
              </h4>
              <p className="text-base-content/60 mb-3">
                {reminderUser
                  ? `Joined on ${reminderUser.joinDate}`
                  : "Time: --"}
              </p>
              <button className="btn bg-linear-to-r from-secondary to-primary text-white btn-md md:btn-lg rounded-full w-full mt-3 md:mt-4 hover-glow">
                <TiVideo size={22} className="mt-0.5" />
                Start Meeting
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 flex-1">
            <div className="bg-white rounded-3xl p-4 md:p-6 md:flex-[3] min-h-0 hover-lift anim-fade-up anim-delay-2">
              <span className="font-semibold text-lg">Team Collaboration</span>
              <ul className="space-y-1">
                <li className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://i.pravatar.cc/36?u=1"
                      alt="avatar"
                      className="avatar rounded-full"
                    />
                    <div>
                      <p className="font-medium">{user0?.name || "No User"}</p>
                      <p className="text-xs text-base-content/60">
                        {user0?.email || "--"}
                      </p>
                    </div>
                  </div>
                  <span className="badge badge-sm badge-success badge-soft">
                    {user0?.status || "--"}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://i.pravatar.cc/36?u=2"
                      alt="avatar"
                      className="avatar rounded-full"
                    />
                    <div>
                      <p className="font-medium">{user1?.name || "No User"}</p>
                      <p className="text-xs text-base-content/60">
                        {user1?.email || "--"}
                      </p>
                    </div>
                  </div>
                  <span className="badge badge-sm badge-warning badge-soft">
                    {user1?.status || "--"}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://i.pravatar.cc/36?u=3"
                      alt="avatar"
                      className="avatar rounded-full"
                    />
                    <div>
                      <p className="font-medium">{user2?.name || "No User"}</p>
                      <p className="text-xs text-base-content/60">
                        {user2?.email || "--"}
                      </p>
                    </div>
                  </div>
                  <span className="badge badge-sm badge-error badge-soft">
                    {user2?.status || "--"}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://i.pravatar.cc/36?u=4"
                      alt="avatar"
                      className="avatar rounded-full"
                    />
                    <div>
                      <p className="font-medium">{user3?.name || "No User"}</p>
                      <p className="text-xs text-base-content/60">
                        {user3?.email || "--"}
                      </p>
                    </div>
                  </div>
                  <span className="badge badge-sm badge-warning badge-soft">
                    {user3?.status || "--"}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-4 hover-lift anim-fade-up anim-delay-3">
              <span className="font-semibold text-lg">Project Progress</span>
              <div className="relative -mt-4 flex justify-center">
                <svg
                  viewBox="0 0 220 140"
                  className="w-full max-w-[220px] md:max-w-[250px]"
                  aria-label="Project progress gauge"
                >
                  <defs>
                    <pattern
                      id="pendingStripes"
                      width="6"
                      height="6"
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="8"
                        stroke="#a4afa9"
                        strokeWidth="3"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M171 67 A75 75 0 0 1 185 110"
                    fill="none"
                    stroke="url(#pendingStripes)"
                    strokeWidth="24"
                    strokeLinecap="round"
                  />
                  <path
                    d="M97 36 A75 75 0 0 1 171 67"
                    fill="none"
                    stroke="#0f5f41"
                    strokeWidth="24"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 110 A75 75 0 0 1 97 36"
                    fill="none"
                    stroke="#2a8f63"
                    strokeWidth="24"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                  <p className="text-4xl md:text-5xl leading-none font-semibold">
                    {loading ? "--" : `${progressPct}%`}
                  </p>
                  <p className="text-sm text-base-content/60">Active Ratio</p>
                </div>
              </div>
              <div className="mt-2 md:mt-3 flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 text-success">
                  <span className="size-3 rounded-full bg-success" />
                  Completed
                </div>
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="size-3 rounded-full bg-primary" />
                  In Progress
                </div>
                <div className="flex items-center gap-1.5 text-base-content/70">
                  <span className="size-3 rounded-full border border-base-content/40 bg-[repeating-linear-gradient(45deg,#9ca3af_0_2px,transparent_2px_3px)]" />
                  Pending
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 min-h-0">
          <div className="bg-white rounded-3xl p-4 flex-1 min-h-0 hover-lift anim-fade-up anim-delay-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">Products</span>
              <button className="btn btn-sm btn-outline border-primary text-primary rounded-full hover-lift">
                <FiPlus />
                New
              </button>
            </div>
            <ul className="space-y-1 h-full overflow-y-auto mt-2 pr-1">
              <li className="text-sm text-base-content/80 mb-3 flex items-center gap-2">
                <AiFillProduct className="inline text-primary mr-2" size={28} />
                <div className="text-sm">
                  {product0?.name || "No Product"} <br />
                  <span className="text-xs text-base-content/50">
                    Price: {product0?.price ?? "--"} | Sales:{" "}
                    {product0?.sales ?? "--"}
                  </span>
                </div>
              </li>
              <li className="text-sm text-base-content/80 mb-3 flex items-center gap-2">
                <AiFillProduct className="inline text-primary mr-2" size={28} />
                <div className="text-sm">
                  {product1?.name || "No Product"} <br />
                  <span className="text-xs text-base-content/50">
                    Price: {product1?.price ?? "--"} | Sales:{" "}
                    {product1?.sales ?? "--"}
                  </span>
                </div>
              </li>
              <li className="text-sm text-base-content/80 mb-3 flex items-center gap-2">
                <AiFillProduct className="inline text-primary mr-2" size={28} />
                <div className="text-sm">
                  {product2?.name || "No Product"} <br />
                  <span className="text-xs text-base-content/50">
                    Price: {product2?.price ?? "--"} | Sales:{" "}
                    {product2?.sales ?? "--"}
                  </span>
                </div>
              </li>
              <li className="text-sm text-base-content/80 mb-3 flex items-center gap-2">
                <AiFillProduct className="inline text-primary mr-2" size={28} />
                <div className="text-sm">
                  {product3?.name || "No Product"} <br />
                  <span className="text-xs text-base-content/50">
                    Price: {product3?.price ?? "--"} | Sales:{" "}
                    {product3?.sales ?? "--"}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[url(/time_tracker_bg.jpg)] bg-cover rounded-3xl p-4 h-40 md:h-44 lg:h-48 shrink-0 relative text-white hover-lift anim-fade-up anim-delay-3">
            <div className="absolute inset-0 bg-black/35 rounded-3xl" />
            <div className="relative z-10">
              <span className="font-semibold text-lg text-white z-30">
                Time Tracker
              </span>
              <p className="text-3xl md:text-4xl font-semibold mt-3 md:mt-4 text-center">
                01:24:08
              </p>
              <div className="flex gap-3 justify-center mt-3 md:mt-4">
                <button className="btn btn-circle btn-sm border-none text-base-content hover-lift">
                  <GrPauseFill size={16} />
                </button>
                <button className="btn btn-circle btn-sm btn-error text-white hover-glow">
                  <FaStop size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
