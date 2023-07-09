import { Fragment, PropsWithChildren } from 'react';
import Head from '@components/Head';
import Header from '@components/Header';
import Footer from '@ui/Footer';

type LayoutProps = {
  metadata: {
    title: string;
    description: string;
  };
};

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children, metadata } = props;

  return (
    <Fragment>
      <Head title={metadata.title} description={metadata.description} />

      <div className="text-text bg-bg min-h-screen flex flex-col justify-between">
        <Header />
        <main className="wrapper">{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
}
