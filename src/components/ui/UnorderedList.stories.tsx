import { UnorderedList } from './UnorderedList';

export default {
  title: 'Components/UnorderedList',
  component: UnorderedList,
};

export const DefaultUnorderedList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return <UnorderedList items={items} activeIndex={1} onItemClick={(index) => alert('Clicked item ' + index)} />;
};
