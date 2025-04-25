// components/ToggleLayoutButton.tsx
import { useLayout } from '@/context/LayoutContext';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

const ToggleLayoutButton = ({ label = '' }: { label: string }) => {
  const { toggleLayout } = useLayout(); // Access toggleLayout from context

  return (
    <button
      onClick={toggleLayout}
      title='Switch Layout'
      className='px-2 py-2 rounded-full hover:bg-purple-400/10 transition duration-300 ease-in-out inline-flex items-center justify-center cursor-pointer gap-2'
    >
      {label && <span className='gradient-text'>{label}</span>}
      <ArrowsRightLeftIcon className='size-5 text-[var(--text)]' />
    </button>
  );
};

export default ToggleLayoutButton;
