import { Layout } from '@layouts';
import { Title, NotFound as NotFoundImg } from '@ui';

const NOT_FOUND_METADATA = {
  title: 'Not found',
  description: 'The page was not found',
};

export default function NotFound() {
  return (
    <Layout metadata={NOT_FOUND_METADATA}>
      <section className="flex flex-col items-center justify-center space-y-8">
        <Title>Page not found</Title>
        <NotFoundImg />
      </section>
    </Layout>
  );
}
