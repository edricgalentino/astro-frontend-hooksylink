import { type ReactNode } from 'react';
import AccordionItem from './dist/AccordionItem';

interface accordionProps {
  children: ReactNode;
}
const Accordion = ({ children }: accordionProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-black bg-white">
      <div className="divide-border divide-y divide-black">{children}</div>
    </div>
  );
};

export default Accordion;

export { AccordionItem };
