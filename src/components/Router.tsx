import { Routes, Route, Navigate } from 'react-router-dom';
import { SignUp, SignIn, MultiStepForm, Success, NotFound } from '@pages';
import { ProtectedRoute } from '@components';
import { useUserContext } from '@contexts/UserContext';
import { paths } from '@constants';

export default function Router() {
  const { user } = useUserContext();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={paths.get('sign-up') || ''} />} />
      <Route
        path={paths.get('sign-up')}
        element={
          <ProtectedRoute
            user={!user}
            redirectPath={`${paths.get('account')}/${paths.get('details')}`}
          >
            <SignUp />
          </ProtectedRoute>
        }
      />
      <Route
        path={paths.get('sign-in')}
        element={
          <ProtectedRoute
            user={!user}
            redirectPath={`${paths.get('account')}/${paths.get('details')}`}
          >
            <SignIn />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${paths.get('account')}/*`}
        element={
          <ProtectedRoute user={user}>
            <MultiStepRouter />
          </ProtectedRoute>
        }
      />
      <Route path={paths.get('not-found')} element={<NotFound />} />
    </Routes>
  );
}

function MultiStepRouter() {
  return (
    <Routes>
      <Route element={<MultiStepForm />}>
        <Route path={paths.get('details')} element={<div />} />
        <Route path={paths.get('plan')} element={<div>Plan component</div>} />
        <Route path={paths.get('confirm')} element={<div>Confirm component</div>} />
      </Route>

      <Route path={paths.get('success')} element={<Success />} />
      <Route path={paths.get('not-found')} element={<NotFound />} />
    </Routes>
  );
}
