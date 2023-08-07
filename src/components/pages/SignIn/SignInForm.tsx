import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { InputGroup } from '@layouts';
import { Button, EmailInput, PasswordInput, Label, ErrorMessage } from '@ui';

import { supabase } from '@services/supabase';

import { EMAIL_REGEX } from '@constants';
import { FormTypes } from '@types';
import { Popup } from '@utils';

export default function SignInForm() {
  const form = useForm<FormTypes>({ mode: 'onTouched' });
  const { register, formState, reset, handleSubmit } = form;
  const { errors, isDirty, isValid } = formState;

  const navigate = useNavigate();

  async function onSubmit(data: FormTypes): Promise<void> {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      Popup({
        type: 'error',
        title: 'Error',
        text: 'Please try again later',
      });
    } else {
      // Reset form fields
      reset();

      // Navigate to
      navigate('/account/multistep-form');
    }
  }

  return (
    <form className="w-full space-y-8" onSubmit={handleSubmit(onSubmit)}>
      {/*------- Email field -------*/}
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

      {/*------- Password field -------*/}
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
                return fieldValue.length >= 6 || 'The password needs to be at least 6 characters';
              },
            },
          }}
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
      </InputGroup>

      <Button isSubmit disabled={!isDirty || !isValid}>
        Log In
      </Button>
    </form>
  );
}
