import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
};

export const DefaultLink = () => <Link href="https://github.com/${GITHUB_ACCOUNT}/${APP_NAME}">View Repository on GitHub</Link>;
