// components/ToggleLayoutButton.tsx
import { useLayout } from '@/context/LayoutContext';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

const ToggleLayoutButton = () => {
  const { toggleLayout } = useLayout(); // Access toggleLayout from context

  return (
    <button
      onClick={toggleLayout}
      title='Switch Layout'
      className='p-1 rounded-full hover:bg-purple-400/10 transition duration-300 ease-in-out'
    >
      <ArrowsRightLeftIcon className='size-5 text-[var(--text)]' />
    </button>
  );
};

export default ToggleLayoutButton;
