import { useState } from 'react';

const MobileTopbar = ({ links }: { links: string[] }) => {
  const [isPublishSideMenuOpen, setIsPublishSideMenuOpen] = useState(false);
  return (
    <>
      <button
        className="sign-up-button p-2md: whitespace-nowrap rounded-full bg-slate-900 p-3 px-4 font-semibold text-white md:px-6 lg:p-4 lg:px-8"
        onClick={() => setIsPublishSideMenuOpen(true)}
      >
        {/* <Icon name='hamburger' />  */}
        open
      </button>
      <aside
        className={`text-primaryv2 fixed right-0 top-0 z-[999] flex h-screen w-full flex-col items-center gap-8 rounded-l-lg bg-white px-6 py-8 duration-300 ease-in-out md:w-[50vw]
      ${isPublishSideMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        <div className="flex w-full items-center justify-between text-xl">
          <a href="/" className="flex items-end justify-center gap-1">
            <img
              src="/public/logo/hooksylink_logo.png"
              alt="HooksyLink"
              className="h-10 w-10"
            />
            <h1 className="topbar-title text-2xl font-extrabold">ooksyLink</h1>
          </a>
          <button
            className="flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-900"
            onClick={() => setIsPublishSideMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* <Icon
            icon="close"
            className="text-secondaryv2 cursor-pointer text-2xl"
            onClick={() => setIsPublishSideMenuOpen(false)}
          /> */}
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-10">
          {links.map((link) => (
            <a
              href={`/${link}`}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-center text-lg capitalize text-white transition-all hover:bg-slate-200"
            >
              {link}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default MobileTopbar;
