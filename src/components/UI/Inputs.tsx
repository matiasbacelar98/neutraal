import { useState } from 'react';
import type { ComponentProps } from 'react';

import { UseFormRegister, RegisterOptions, Path } from 'react-hook-form';

import Show from '@components/Show';
import { EyeVisibleIcon, EyeInvisibleIcon } from '@ui/Icons';
import { FormTypes } from '@types';

interface FormSignInProps extends ComponentProps<'input'> {
  register: UseFormRegister<FormTypes>;
  options: RegisterOptions;
  name: Path<FormTypes>;
  id: string;
}

//-------- Email input --------//
export function EmailInput({ register, options, name, id }: FormSignInProps) {
  return (
    <input
      className="
    w-full h-10 pl-2 pr-8 font-book text-text bg-bg text-base
    border-2 border-gray-light rounded transition duration-300
  focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      type="email"
      id={id}
      {...register(name, options)}
    />
  );
}

//------- Password input --------//
export function PasswordInput({ register, options, name, id }: FormSignInProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <input
        className={`
        w-full h-10 pl-2 pr-8 font-book text-text bg-bg
        border-2 border-gray-light rounded transition duration-300
        focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
        ${isVisible ? 'text-base' : 'text-xsm'}
        `}
        id={id}
        type={isVisible ? 'text' : 'password'}
        {...register(name, options)}
      />

      <Show when={isVisible} fallback={<EyeBtn onClick={() => setIsVisible(true)} />}>
        <EyeBtn visible onClick={() => setIsVisible(false)} />
      </Show>
    </div>
  );
}

type EyeBtnProps = {
  onClick: () => void;
  visible?: boolean;
};

function EyeBtn({ onClick, visible = false }: EyeBtnProps) {
  return (
    <button
      className="absolute top-2/4 right-0 -translate-y-1/2 mr-2 focus:border-primary rounded"
      type="button"
      onClick={onClick}
    >
      <Show when={visible} fallback={<EyeInvisibleIcon />}>
        <EyeVisibleIcon />
      </Show>
    </button>
  );
}

//------- Checkbox input -------//
type CheckboxInput = {
  checked: boolean;
  name: string;
  id: string;
  onChange: () => void;
};

export function CheckboxInput(props: CheckboxInput) {
  const { checked, name, id, onChange } = props;

  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      className="ring-0
      w-4 h-4 rounded border-2 border-gray-light
    text-primary focus:border-primary
      transition-colors duration-150"
    />
  );
}
