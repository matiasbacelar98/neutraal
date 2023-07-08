import { PropsWithChildren } from 'react';

export default function Parragraph(props: PropsWithChildren) {
  const { children } = props;
  return <p className="font-base font-book text-text">{children}</p>;
}
