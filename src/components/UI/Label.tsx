import { PropsWithChildren } from 'react';

type Label = {
  htmlFor: string;
};

export default function Label(props: PropsWithChildren<Label>) {
  const { children, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="text-base font-book text-text">
      {children}
    </label>
  );
}
