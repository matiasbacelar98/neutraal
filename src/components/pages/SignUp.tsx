import Layout from '@layouts/Layout';

const SIGN_UP_METADATA = {
  title: 'Sign up',
  description: 'Sign up page',
};

export default function SignUp() {
  return (
    <Layout metadata={SIGN_UP_METADATA}>
      <span>Sign Up</span>
    </Layout>
  );
}
