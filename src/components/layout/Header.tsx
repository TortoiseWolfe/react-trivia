import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-copper dark:bg-copper-dark py-4 px-6">
      <h1 className="text-3xl font-special steampunk-gradient text-center">
        {title}
      </h1>
    </header>
  );
};
