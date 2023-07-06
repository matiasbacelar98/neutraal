import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-up" />} />
      <Route path="/sign-up" element={<div>Create account</div>} />
      <Route path="/sign-in" element={<div>Log in</div>} />
      <Route path="/account/*" element={<MultiStepRouter />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

function MultiStepRouter() {
  return (
    <Routes>
      <Route
        path="/multistep-form"
        element={
          <div>
            <p>Shared multistep component</p>
            <Outlet />
          </div>
        }
      >
        <Route path="details" element={<div>Details component</div>} />
        <Route path="plan" element={<div>Plan component</div>} />
        <Route path="confirm" element={<div>Confirm component</div>} />
      </Route>

      <Route path="/success" element={<div>Process completed</div>} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
