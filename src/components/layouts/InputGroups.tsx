import { PropsWithChildren } from 'react';

export function InputGroup(props: PropsWithChildren) {
  const { children } = props;
  return <div className="w-full space-y-3">{children}</div>;
}

export function CheckboxGroup(props: PropsWithChildren) {
  const { children } = props;
  return <div className="w-full space-x-3">{children}</div>;
}
