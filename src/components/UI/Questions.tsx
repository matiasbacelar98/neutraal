import { AuthLink, Parragraph } from '@ui';

export function LogInQuestion() {
  return (
    <article className="flex items-center sm:space-x-2">
      <div className="hidden sm:block">
        <Parragraph>Already have an account?</Parragraph>
      </div>

      <AuthLink path="/sign-in">Log In</AuthLink>
    </article>
  );
}

export function SignUpQuestion() {
  return (
    <article className="flex items-center sm:space-x-2">
      <div className="hidden sm:block">
        <Parragraph>Don’t have an account?</Parragraph>
      </div>

      <AuthLink path="/sign-up">Create account</AuthLink>
    </article>
  );
}
