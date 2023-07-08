import { PropsWithChildren } from 'react';

export default function Title(props: PropsWithChildren) {
  const { children } = props;
  return <h1 className="text-xl font-bold text-text md:text-2xl">{children}</h1>;
}
