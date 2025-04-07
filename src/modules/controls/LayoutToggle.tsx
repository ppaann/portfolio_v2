// components/ToggleLayoutButton.tsx
import { useLayout } from '@/context/LayoutContext';

const ToggleLayoutButton = () => {
  const { toggleLayout } = useLayout(); // Access toggleLayout from context

  return <button onClick={toggleLayout}>Switch Layout</button>;
};

export default ToggleLayoutButton;
