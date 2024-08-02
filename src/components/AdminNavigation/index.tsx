import { RiArrowLeftSLine, RiLogoutBoxLine } from "react-icons/ri";
import MainLogo from "../Common/MainLogo";
import Auth from "../../lib/helpers/auth";
import { useStore } from "@nanostores/react";
import { IS_NAVIGATION_OPEN } from "../../lib/stores/navbar";
import { LuSettings } from "react-icons/lu";
import { TfiViewList } from "react-icons/tfi";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaPalette } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useState } from "react";
import storage from "../../lib/helpers/storage";

const AdminNavigation = () => {
  // const $isNavigationOpen = useStore(IS_NAVIGATION_OPEN);
  const [isNavigationOpen, setIsNavigationOpen] = useState(storage.get("nav_side_active") === "true" || false);

  return (
    <div id="navigation" className="sticky z-50 mb-2 pb-28 transition-[background] md:left-0 md:top-0 md:mb-0 md:h-screen md:pb-0">
      <nav
        id="mobile-navigation"
        className="flex h-16 w-full items-center justify-between gap-6 rounded-full bg-white px-4 shadow-md md:hidden"
      ></nav>
      <nav id="desktop-navigation" className={`hidden h-screen p-2 md:flex group`}>
        <div
          className={`flex flex-col h-full bg-white items-center justify-start gap-6 py-6 w-20 rounded-[40px] ${
            isNavigationOpen ? "!w-[260px] !rounded-[41px]" : ""
          } shadow-md transition-all duration-300 ease-in-out`}
        >
          <section className="flex w-full justify-between relative">
            <MainLogo
              className={`${isNavigationOpen ? "px-6" : ""}`}
              align={isNavigationOpen ? "start" : "center"}
              withText={false}
              withTitle={isNavigationOpen}
            />
            <div className={`absolute -right-16 -top-3 w-16 h-16 flex justify-center items-center`}>
              <button
                className={`group-hover:scale-100 scale-0 transition-all duration-100 ease-in-out rounded-full bg-white p-2`}
                onClick={() => {
                  setIsNavigationOpen(!isNavigationOpen);
                  storage.set("nav_side_active", !isNavigationOpen);
                }}
              >
                <RiArrowLeftSLine
                  className={`text-2xl text-tertiary ${!isNavigationOpen ? "rotate-180" : ""} transition-all duration-100 ease-in-out`}
                />
              </button>
            </div>
          </section>
          <ul className="w-full pt-4 px-2 flex flex-col h-full justify-between">
            <div className="flex flex-col gap-2 h-full">
              {SidebarChild.map((item, index) => (
                <li key={index} className="relative flex w-full items-center justify-center rounded-full">
                  <a
                    href={item.path}
                    className={`peer flex items-center ${isNavigationOpen ? "justify-start px-4 w-full" : "justify-center w-min"} ${
                      window.location.pathname === item.path ? "text-secondary bg-primary hover:bg-primary" : "text-tertiary hover:text-secondary"
                    } gap-4 rounded-full p-2 hover:text-secondary transition-all duration-250 hover:bg-background`}
                  >
                    <item.icon className="text-2xl" />
                    <span className={`whitespace-nowrap ${isNavigationOpen ? "block" : "hidden"}`}>{item.title}</span>
                  </a>
                  <div
                    className={`peer-hover:scale-100 scale-0 absolute left-20 whitespace-nowrap text-xs px-2 py-1 transition-all duration-100 ease-in-out rounded-lg bg-tertiary text-white ${isNavigationOpen ? "hidden" : "block"}`}
                  >
                    {item.title}
                  </div>
                </li>
              ))}
            </div>
            <div className="relative flex w-full items-center justify-center rounded-full">
              <button
                className={`peer flex w-full items-center p-2 px-4 gap-4 hover:text-secondary ${isNavigationOpen ? "justify-between" : "justify-center"}`}
                onClick={Auth.logoutUser}
              >
                {isNavigationOpen && <p>Logout</p>}
                <RiLogoutBoxLine className="text-2xl" />
              </button>

              <div
                className={`peer-hover:scale-100 scale-0 absolute left-20 whitespace-nowrap text-xs px-2 py-1 transition-all duration-100 ease-in-out rounded-lg bg-tertiary text-white ${isNavigationOpen ? "hidden" : "block"}`}
              >
                Logout
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavigation;

const SidebarChild = [
  // {
  //   title: "Dashboard",
  //   icon: RiDashboardLine,
  //   path: "/admin/dashboard",
  // },
  {
    title: "Actions",
    icon: BsRocketTakeoff,
    path: "/admin",
  },
  {
    title: "Social Links",
    icon: FiLink,
    path: "/admin/social-links",
  },
  {
    title: "Content",
    icon: TfiViewList,
    path: "/admin/content",
  },
  {
    title: "Design",
    icon: FaPalette,
    path: "/admin/design",
  },
  {
    title: "Settings",
    icon: LuSettings,
    path: "/admin/settings",
  },
];
