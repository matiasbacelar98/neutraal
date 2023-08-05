import { Routes, Route, Navigate } from 'react-router-dom';

import SignUp from '@pages/SignUp';
import SignIn from '@pages/SignIn';
import MultiStepForm from '@pages/MultiStepForm';
import Success from '@pages/Success';
import NotFound from '@pages/NotFound';

import ProtectedRoute from '@components/ProtectedRoute';

import { useUserContext } from '@contexts/UserContext';

import { paths } from '@constants';

export default function Router() {
  const { user } = useUserContext();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={paths.get('sign-up') || ''} />} />
      <Route path={paths.get('sign-up')} element={<SignUp />} />
      <Route path={paths.get('sign-in')} element={<SignIn />} />
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
      <Route path={paths.get('multistep-form')} element={<MultiStepForm />}>
        <Route path={paths.get('details')} element={<div>Details component</div>} />
        <Route path={paths.get('plan')} element={<div>Plan component</div>} />
        <Route path={paths.get('confirm')} element={<div>Confirm component</div>} />
      </Route>

      <Route path={paths.get('success')} element={<Success />} />
      <Route path={paths.get('not-found')} element={<NotFound />} />
    </Routes>
  );
}
