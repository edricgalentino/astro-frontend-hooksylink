import { useStore } from '@nanostores/react';
import Button from '../Common/Button';
import { LINK_TEMPLATE } from '../../lib/stores/hooksylink';

const AdminTopbar = () => {
  const link = useStore(LINK_TEMPLATE);
  return (
    <div className="relative top-5 w-full">
      <div className="absolute z-20 flex w-full items-center justify-between gap-20">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-tertiary underline"
        >
          {link}
        </a>
        <Button color="secondary">Share</Button>
      </div>
    </div>
  );
};

export default AdminTopbar;
