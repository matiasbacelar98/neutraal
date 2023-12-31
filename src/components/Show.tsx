import React, { Fragment, PropsWithChildren } from 'react';

type ShowProps = {
  when: boolean | null;
  fallback: React.ReactNode;
};

export default function Show(props: PropsWithChildren<ShowProps>) {
  const { children, when, fallback } = props;
  if (when) return <Fragment>{children}</Fragment>;
  return fallback;
}
