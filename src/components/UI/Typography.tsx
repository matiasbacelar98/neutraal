import { PropsWithChildren } from 'react';

export function Title(props: PropsWithChildren) {
  const { children } = props;
  return <h1 className="text-xl font-bold text-center text-text md:text-2xl">{children}</h1>;
}

export function Parragraph(props: PropsWithChildren) {
  const { children } = props;
  return <p className="font-base font-book text-text">{children}</p>;
}

type StepTextProps = {
  color: string;
};

export function StepText(props: PropsWithChildren<StepTextProps>) {
  const { color, children } = props;
  return <p className={`font-sm font-book ${color}`}>{children}</p>;
}
