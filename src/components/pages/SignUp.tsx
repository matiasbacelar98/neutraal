import Layout from '@layouts/Layout';
import Form from '@components/Form';
import { Title, Parragraph } from '@ui/Typography';
import { GoogleBtn } from '@ui/Buttons';

const SIGN_UP_METADATA = {
  title: 'Sign up',
  description: 'Sign up page',
};

export default function SignUp() {
  return (
    <Layout metadata={SIGN_UP_METADATA}>
      <section className="flex flex-col items-center justify-center">
        <div className="w-full max-w-mds space-y-10 flex flex-col items-center">
          <Title>Create account</Title>
          <GoogleBtn onClick={() => console.log('create-account')}>Sign up with google</GoogleBtn>
          <Parragraph>or</Parragraph>
          <Form isSignIn onSubmit={() => console.log('create-account')} />
        </div>
      </section>
    </Layout>
  );
}
