import { PropsWithChildren } from 'react';

export default function ErrorMessage(props: PropsWithChildren) {
  const { children } = props;
  return <p className="font-sm font-book text-error w-full">{children}</p>;
}
