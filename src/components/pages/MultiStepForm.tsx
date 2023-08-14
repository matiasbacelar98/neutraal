import { Outlet } from 'react-router-dom';
import { Layout } from '@layouts';
import { StepsIndicator } from '@ui';

const MULTISTEP_FORM_METADATA = {
  title: 'Multistep form',
  description: 'Multistep form page',
};

export default function MultiStepForm() {
  return (
    <Layout metadata={MULTISTEP_FORM_METADATA}>
      <section className="flex flex-col items-center justify-center">
        <StepsIndicator />
        <Outlet />
      </section>
    </Layout>
  );
}
