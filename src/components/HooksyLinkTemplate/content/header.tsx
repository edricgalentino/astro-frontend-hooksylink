import type { Content } from '../../../modules/Content/content';

interface HooksyLinkHeaderContentProps {
  content: Content;
}

const HooksyLinkHeaderContent = ({ content }: HooksyLinkHeaderContentProps) => {
  return (
    <h2 className="my-2 text-center text-base font-bold md:my-3 md:text-sm 2xl:my-4 2xl:text-lg">
      {content.title}
    </h2>
  );
};

export default HooksyLinkHeaderContent;
