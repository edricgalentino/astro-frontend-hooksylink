import { useState } from 'react';
import { RiDashboardLine } from 'react-icons/ri';

const AdminNavigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  return (
    <div
      id="navigation"
      className="sticky z-50 mb-2 pb-28 transition-[background] md:fixed md:left-0 md:top-0 md:mb-0 md:h-screen md:pb-0"
    >
      <nav
        id="mobile-navigation"
        className="flex h-16 w-full items-center justify-between gap-6 rounded-full bg-white px-4 shadow-md md:hidden"
      ></nav>
      <nav
        id="desktop-navigation"
        className={`hidden h-screen w-20 rounded-[31px] ${
          isNavigationOpen ? '!w-[260px] !rounded-[41px]' : ''
        } flex-col items-center justify-start gap-6 bg-white p-4 shadow-md transition-all duration-300 ease-in-out group-hover:w-full md:flex`}
      >
        <section className="flex w-full justify-between">
          <a
            href="/"
            className="flex items-center justify-center gap-2 rounded-full"
          >
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
          </a>
          <button className="flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </section>
        <ul>
          {SidebarChild.map((item) => (
            <li className="group flex h-16 w-full items-center justify-center rounded-full">
              <a
                href={item.path}
                className="flex h-20 w-full flex-col items-center justify-center gap-1 rounded-full group-hover:bg-slate-100"
              >
                <item.icon client:load className="text-2xl text-slate-500" />
                <span
                  className={`text-xs text-slate-500 ${
                    isNavigationOpen ? 'block' : 'hidden'
                  }`}
                >
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavigation;

const SidebarChild = [
  {
    title: 'Dashboard',
    icon: RiDashboardLine,
    path: '/admin/dashboard',
  },
  {
    title: 'Actions',
    icon: RiDashboardLine,
    path: '/admin',
  },
  {
    title: 'Social Links',
    icon: RiDashboardLine,
    path: '/admin/social-links',
  },
  {
    title: 'Content',
    icon: RiDashboardLine,
    path: '/admin/content',
  },
  {
    title: 'Design',
    icon: RiDashboardLine,
    path: '/admin/design-settings',
  },
  {
    title: 'Settings',
    icon: RiDashboardLine,
    path: '/admin/settings',
  },
];
