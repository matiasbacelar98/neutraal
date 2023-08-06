import { Layout } from '@layouts';
import { Title, Parragraph, GoogleBtn } from '@ui';
import SignUpForm from './SignUpForm';

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
          <GoogleBtn onClick={() => console.log('create account google')}>
            Sign up with google
          </GoogleBtn>
          <Parragraph>or</Parragraph>
          <SignUpForm />
        </div>
      </section>
    </Layout>
  );
}
