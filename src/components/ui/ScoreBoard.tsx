import React from 'react';

interface ScoreBoardProps {
  score: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className="mb-4 p-2 bg-gray-800 text-white rounded shadow">
      <h2 className="text-xl font-bold">Score: {score}</h2>
    </div>
  );
};
