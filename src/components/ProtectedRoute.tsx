import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  user: boolean | null;
  redirectPath?: string;
};

export default function ProtectedRoute({
  user,
  redirectPath = '/sign-in',
  children,
}: PropsWithChildren<ProtectedRouteProps>) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
