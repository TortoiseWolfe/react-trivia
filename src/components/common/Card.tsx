import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="bg-ivory/10 border-2 border-copper rounded-lg p-6 shadow-lg">
      {title && (
        <h2 className="text-2xl font-special text-gold steampunk-gradient mb-4">
          {title}
        </h2>
      )}
      <div className="text-ivory font-arbutus">{children}</div>
    </div>
  );
};
