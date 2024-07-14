type MainLogoProps = {
  withTitle?: boolean;
  withText?: boolean;
  size?: "sm" | "md" | "lg";
  align?: "center" | "start" | "end";
  className?: string;
};

const MainLogo = ({ withTitle = true, withText = true, align, size, className }: MainLogoProps) => {
  return (
    <div className={`flex w-full flex-col items-${align ?? "center"} justify-center gap-4 ${className ?? ""}`}>
      <a href="/" className="flex items-end justify-center gap-1">
        <img src="/logo/hooksylink_logo.png" alt="HooksyLink" className={getSize(size)} />
        {withTitle && <h1 className="topbar-title text-xl font-extrabold text-slate-700 md:text-2xl">ooksyLink</h1>}
      </a>
      {withText && <p className="whitespace-nowrap text-sm md:text-base">One Link to Rule Them All.</p>}
    </div>
  );
};

export default MainLogo;

function getSize(size: "sm" | "md" | "lg" | undefined) {
  switch (size) {
    case "sm":
      return "md:h-8 md:w-8 h-6 w-6";
    case "md":
      return "md:h-10 md:w-10 h-8 w-8";
    case "lg":
      return "md:h-12 md:w-12 h-10 w-10";
    default:
      return "md:h-10 md:w-10 h-8 w-8";
  }
}
