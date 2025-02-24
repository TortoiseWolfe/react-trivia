import { NavList } from './NavList';

export default {
  title: 'Components/NavList',
  component: NavList,
};

export const DefaultNavList = () => {
  const items = ['Home', 'About', 'Services', 'Contact'];
  return <NavList items={items} activeIndex={0} onItemClick={(index) => alert('Clicked item ' + index)} />;
};
