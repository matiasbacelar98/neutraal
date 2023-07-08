import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type AuthLinkProps = {
  path: string;
};

export default function AuthLink(props: PropsWithChildren<AuthLinkProps>) {
  const { children, path } = props;

  return (
    <Link to={path} className="text-primary font-base font-bold underline">
      {children}
    </Link>
  );
}
