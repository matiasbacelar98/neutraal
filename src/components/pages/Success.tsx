import Layout from '@layouts/Layout';
import { Title } from '@ui/Typography';
import SuccessImg from '@ui/Success';

const SUCCESS_METADATA = {
  title: 'Success',
  description: 'Success page',
};

export default function Success() {
  return (
    <Layout metadata={SUCCESS_METADATA}>
      <section className="flex flex-col items-center justify-center space-y-8">
        <Title>Process completed</Title>
        <SuccessImg />
      </section>
    </Layout>
  );
}
