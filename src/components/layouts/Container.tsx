import { PropsWithChildren } from 'react';

export default function Container(props: PropsWithChildren) {
  const { children } = props;
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="container mx-auto px-10 md:px-20">{children}</div>
    </main>
  );
}
