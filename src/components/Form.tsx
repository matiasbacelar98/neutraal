import React from 'react';
import Show from '@components/Show';
import { InputGroup, CheckboxGroup } from '@layouts/InputGroups';
import { EmailInput, PasswordInput, CheckboxInput } from '@ui/Inputs';
import Label from '@ui/Label';
import ErrorMessage from '@ui/ErrorMessage';
import { Button } from '@ui/Buttons';

type FormProps = {
  onSubmit: (email: string, password: string, terms?: boolean) => void;
  isSignIn?: boolean;
};

export default function Form({ onSubmit, isSignIn = false }: FormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('onsubmit');

    // Create-account/login user
    onSubmit('email', 'password', true);
  }

  return (
    <form className="w-full space-y-8" onSubmit={e => handleSubmit(e)}>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <EmailInput value="" id="email" name="email" onChange={() => console.log('email')} />
        {/* <ErrorMessage>email error</ErrorMessage> */}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          value=""
          id="password"
          name="password"
          onChange={() => console.log('email')}
        />
        {/* <ErrorMessage>password error</ErrorMessage> */}
      </InputGroup>

      <Show when={isSignIn} fallback={null}>
        <CheckboxGroup>
          <CheckboxInput
            checked
            name="checkbox"
            id="checkbox"
            onChange={() => console.log('checkbox')}
          />
          <Label htmlFor="checkbox">I agree to Neutraal terms and conditions.</Label>
          {/* <ErrorMessage>checkbox error</ErrorMessage> */}
        </CheckboxGroup>
      </Show>

      <Button isSubmit>Create account</Button>
    </form>
  );
}
