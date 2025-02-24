import React from 'react';

interface UnorderedListProps {
  items: string[];
  activeIndex: number;
  onItemClick?: (index: number) => void;
}

export const UnorderedList: React.FC<UnorderedListProps> = ({ items, activeIndex, onItemClick }) => {
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
