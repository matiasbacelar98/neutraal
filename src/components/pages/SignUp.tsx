import { useForm } from 'react-hook-form';

import Layout from '@layouts/Layout';
import { InputGroup, CheckboxGroup } from '@layouts/InputGroups';

import { Title, Parragraph } from '@ui/Typography';
import { Button, GoogleBtn } from '@ui/Buttons';
import { EmailInput, PasswordInput, CheckboxInput } from '@ui/Inputs';
import Label from '@ui/Label';
import ErrorMessage from '@ui/ErrorMessage';

import { EMAIL_REGEX } from '@constants';
import { FormTypes } from '@types';

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
          <SignUpForm />
        </div>
      </section>
    </Layout>
  );
}

//---------- Components ----------//
function SignUpForm() {
  const form = useForm<FormTypes>({ mode: 'onTouched' });
  const { register, formState, handleSubmit } = form;
  const { errors, isDirty, isValid } = formState;

  function onSubmit(data: FormTypes): void {
    console.log(data);
  }

  return (
    <form className="w-full space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <EmailInput
          name="email"
          id="email"
          register={register}
          options={{
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid email',
            },
          }}
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          name="password"
          id="password"
          register={register}
          options={{
            validate: {
              empty: fieldValue => {
                return fieldValue !== '' || 'Password is required';
              },
              checkLength: fieldValue => {
                return fieldValue.length >= 3 || 'The password needs to be at least 3 characters';
              },
            },
          }}
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
      </InputGroup>

      <CheckboxGroup>
        <CheckboxInput
          name="terms"
          id="terms"
          register={register}
          options={{
            required: {
              value: true,
              message: 'Please accept the terms and conditions',
            },
          }}
        />
        <Label htmlFor="terms">I agree to Neutraal terms and conditions.</Label>
        <ErrorMessage>{errors?.terms?.message}</ErrorMessage>
      </CheckboxGroup>

      <Button isSubmit disabled={!isDirty || !isValid}>
        Create account
      </Button>
    </form>
  );
}
