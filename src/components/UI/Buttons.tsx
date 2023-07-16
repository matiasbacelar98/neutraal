import { PropsWithChildren } from 'react';
import GoogleIcon from '@assets/svg/google-icon.svg';

type Btn = {
  handleClick: () => void;
  disabled?: boolean;
};

//---------- Button ----------//
export function Button(props: PropsWithChildren<Btn>) {
  const { handleClick, children, disabled } = props;

  return (
    <button
      type="button"
      className="w-full font-base font-book bg-primary text-bg rounded flex items-center justify-center
      h-10 transition duration-300 hover:bg-primary-hover disabled:bg-disabled disabled:pointer-events-none"
      onClick={handleClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
}

//-------- Google Btn --------//
export function GoogleBtn(props: PropsWithChildren<Btn>) {
  const { handleClick, children } = props;

  return (
    <button
      type="button"
      className="font-base font-book bg-bg border-2 rounded w-full flex items-center justify-center h-10"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-1">
        <img src={GoogleIcon} alt="google logo" />
        <p>{children}</p>
      </div>
    </button>
  );
}

//-------- Logout Btn --------//
export function LogoutBtn(props: Btn) {
  const { handleClick } = props;

  return (
    <button
      type="button"
      className="
      font-base font-book text-error
      focus-visible:border focus-visible:border-error
      focus-visible:outline-none focus-visible:rounded"
      onClick={handleClick}
    >
      Log out
    </button>
  );
}
