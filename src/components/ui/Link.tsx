import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
