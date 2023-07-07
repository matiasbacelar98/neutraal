import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from '@pages/SignUp';
import SignIn from '@pages/SignIn';
import MultiStepForm from '@pages/MultiStepForm';
import Success from '@pages/Success';
import NotFound from '@pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-up" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/account/*" element={<MultiStepRouter />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

function MultiStepRouter() {
  return (
    <Routes>
      <Route path="/multistep-form" element={<MultiStepForm />}>
        <Route path="details" element={<div>Details component</div>} />
        <Route path="plan" element={<div>Plan component</div>} />
        <Route path="confirm" element={<div>Confirm component</div>} />
      </Route>

      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
