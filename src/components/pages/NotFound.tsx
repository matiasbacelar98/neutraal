import Layout from '@components/Layout';

const NOT_FOUND_METADATA = {
  title: 'Not found',
  description: 'The page was not found',
};

export default function NotFound() {
  return <Layout metadata={NOT_FOUND_METADATA}>Not found...</Layout>;
}
