// components/ToggleLayoutButton.tsx
import { useLayout } from '@/context/LayoutContext';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

const ToggleLayoutButton = () => {
  const { toggleLayout } = useLayout(); // Access toggleLayout from context

  return (
    <button onClick={toggleLayout} title='Switch Layout'>
      <ArrowsRightLeftIcon className='size-5' />
    </button>
  );
};

export default ToggleLayoutButton;
