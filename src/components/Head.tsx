import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title: string;
  description: string;
};

export default function Head(props: HeadProps) {
  const { title, description } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
