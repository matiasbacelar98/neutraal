import Layout from '@components/Layout';

const SUCCESS_METADATA = {
  title: 'Success',
  description: 'Success page',
};

export default function Success() {
  return <Layout metadata={SUCCESS_METADATA}>Success page</Layout>;
}
