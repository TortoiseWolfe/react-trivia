import React from 'react';

interface NavListProps {
  items: string[];
  activeIndex: number;
  onItemClick?: (index: number) => void;
}

export const NavList: React.FC<NavListProps> = ({ items, activeIndex, onItemClick }) => {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li
          key={index}
          className={`cursor-pointer ${index === activeIndex ? 'text-gold font-bold' : 'text-ivory'}`}
          onClick={() => onItemClick && onItemClick(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
