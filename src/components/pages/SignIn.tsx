import Layout from '@layouts/Layout';
import Form from '@components/Form';
import { Title } from '@ui/Typography';
import { GoogleBtn } from '@ui/Buttons';

const SIGN_IN_METADATA = {
  title: 'Sign in',
  description: 'Sign in page',
};

export default function SignIn() {
  return (
    <Layout metadata={SIGN_IN_METADATA}>
      <section className="flex flex-col items-center justify-center">
        <div className="w-full max-w-mds space-y-10 flex flex-col items-center">
          <Title>Log In</Title>
          <GoogleBtn onClick={() => console.log('create-account')}>Sign In with google</GoogleBtn>
          <Form onSubmit={() => console.log('login user')} />
        </div>
      </section>
    </Layout>
  );
}
