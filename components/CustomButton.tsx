
import Image from 'next/image';
import { customButtonProps } from '@/types';

const CustomButton = ({title,containerStyles,handleClick}:customButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>Explore Vehicles</span>
    </button>
  );
};

export default CustomButton;
