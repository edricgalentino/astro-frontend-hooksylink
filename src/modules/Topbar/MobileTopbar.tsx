import { useState } from "react";
import { createPortal } from "react-dom";
import useDisableScroll from "../../lib/hooks/useDisableScroll";
import Button from "../../components/Common/Button";

const MobileTopbar = ({ links }: { links: string[] }) => {
  const [isPublishSideMenuOpen, setIsPublishSideMenuOpen] = useState(false);

  useDisableScroll(isPublishSideMenuOpen);
  return (
    <>
      <button
        className="sign-up-button bg-tertiary flex whitespace-nowrap rounded-full p-2 px-4 font-semibold text-white md:hidden md:p-3 md:px-6 lg:p-4 lg:px-8"
        onClick={() => setIsPublishSideMenuOpen(true)}
      >
        {/* <Icon name='hamburger' />  */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {isPublishSideMenuOpen &&
        createPortal(
          <div className="fixed left-0 top-0 z-[998] h-full w-full bg-black bg-opacity-60" onClick={() => setIsPublishSideMenuOpen(false)} />,
          document.body,
        )}
      <aside
        className={`text-primaryv2 fixed right-0 top-0 z-[999] flex h-screen w-full flex-col items-center gap-8 rounded-l-lg bg-white px-6 py-8 duration-300 ease-in-out md:w-[50vw]
      ${isPublishSideMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex w-full items-center justify-between text-xl">
          <a href="/" className="flex items-end justify-center gap-1">
            <img src="/logo/hooksylink_logo.png" alt="HooksyLink" className="h-10 w-10" />
            <h1
              style={{
                textShadow: "2px 4px #f8f4e1",
              }}
              className="text-2xl font-extrabold"
            >
              ooksyLink
            </h1>
          </a>
          <button
            className="text-tertiary flex items-center justify-center rounded-full bg-slate-100 p-2"
            onClick={() => setIsPublishSideMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* <Icon
            icon="close"
            className="text-secondaryv2 cursor-pointer text-2xl"
            onClick={() => setIsPublishSideMenuOpen(false)}
          /> */}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          {links.map((link) => (
            <a
              href={link}
              onClick={() => setIsPublishSideMenuOpen(false)}
              className="hover:bg-default bg-tertiary hover:text-tertiary flex w-full items-center justify-center gap-4 rounded-full border px-6 py-3 text-center text-lg capitalize text-white transition-all hover:border-black"
            >
              <p>{link.slice(1)}</p>
            </a>
          ))}
        </div>
        <div className="flex w-full gap-4 text-base">
          <a href="/login" className="w-full">
            <Button accent="outline" size="lg" className="!w-full" isRounded={false}>
              Login
            </Button>
          </a>
          <a href="/signup" className="w-full">
            <Button color="tertiary" size="lg" className="!w-full">
              Sign up free
            </Button>
          </a>
        </div>

        <a href="/support">
          <Button color="secondary" size="lg" className="fixed bottom-8 right-8 shadow-md">
            Customer Support
          </Button>
        </a>
      </aside>
    </>
  );
};

export default MobileTopbar;
