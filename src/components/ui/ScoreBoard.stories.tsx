import { ScoreBoard } from './ScoreBoard';

export default {
  title: 'Components/ScoreBoard',
  component: ScoreBoard,
};

export const DefaultScoreBoard = () => <ScoreBoard score={5} />;
