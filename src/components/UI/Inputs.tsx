import { useState } from 'react';
import Show from '@components/Show';
import { EyeVisibleIcon, EyeInvisibleIcon, CheckIcon } from '@ui/Icons';

type Input = {
  value: string;
  name: string;
  id: string;
  onChange: () => void;
};

//-------- Email input --------//
export function EmailInput(props: Input) {
  const { value, id, name, onChange } = props;

  return (
    <input
      className="h-10 w-full pl-1 border rounded font-book text-base text-text bg-bg
    border-gray-light transition duration-300 focus:outline-transparent focus:border-primary"
      type="email"
      value={value}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
}

//------- Password input --------//
export function PasswordInput(props: Input) {
  const [isVisible, setIsVisible] = useState(false);
  const { value, id, name, onChange } = props;

  return (
    <div className="relative">
      <input
        className={`h-10 w-full pl-1 border rounded font-book text-text bg-bg
      border-gray-light transition duration-300 focus:outline-transparent focus:border-primary
        ${isVisible ? 'text-base' : 'text-xsm'}`}
        type={isVisible ? 'text' : 'password'}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
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
      className="absolute top-2/4 right-0 -translate-y-1/2 mr-1 focus:border-primary rounded"
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
    <div className="relative w-4 h-4">
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        className="
          appearance-none w-full h-full border rounded bg-bg border-gray-light transition-colors duration-150
        checked:bg-primary checked:border-0
        focus:ring-primary"
        onChange={onChange}
      />

      <Show when={checked} fallback={null}>
        <div className="absolute top-2/4 right-0 -translate-y-1/2 pointer-events-none">
          <CheckIcon />
        </div>
      </Show>
    </div>
  );
}
