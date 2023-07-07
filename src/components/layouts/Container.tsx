import { PropsWithChildren } from 'react';

export default function Container(props: PropsWithChildren) {
  const { children } = props;
  return <main className="bg-primary">{children}</main>;
}
