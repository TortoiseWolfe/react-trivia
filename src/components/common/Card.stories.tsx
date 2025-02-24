import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const DefaultCard = () => (
  <Card title="Card Title">
    <p>This is some card content.</p>
  </Card>
);
