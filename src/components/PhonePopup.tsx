import React from 'react';
import { Phone } from 'lucide-react';

interface PhonePopupProps {
  isVisible: boolean;
}

const PhonePopup: React.FC<PhonePopupProps> = ({ isVisible }) => {
  return (
    <div
      className={`
        absolute top-full left-1/2 -translate-x-1/2 mt-2
        bg-white text-gray-800 px-3 md:px-4 py-2 rounded-lg shadow-lg
        flex items-center gap-2 whitespace-nowrap
        transition-all duration-300 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        z-50
      `}
    >
      <Phone size={16} className="text-teal-500" />
      <span className="font-medium text-sm md:text-base">089 565 2375</span>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
    </div>
  );
}

export default PhonePopup;