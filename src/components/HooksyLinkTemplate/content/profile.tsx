import type { Template } from '../../../modules/Template/template';

interface HooksyLinkProfileProps {
  template: Template;
}

const HooksyLinkProfile = ({ template }: HooksyLinkProfileProps) => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <img
          src={template.profile_image}
          alt="Profile Image"
          className="h-[85px] w-[85px] rounded-full object-cover md:h-[100px] md:w-[100px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-center text-sm font-bold md:text-base 2xl:text-lg">
          {template.title}
        </h2>
        <p className="break-words text-center text-xs md:text-sm">
          {template.description}
        </p>
      </div>
    </>
  );
};

export default HooksyLinkProfile;
