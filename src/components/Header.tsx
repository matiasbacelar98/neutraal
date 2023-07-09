import { useLocation } from 'react-router-dom';
import Show from '@components/Show';
import Logo from '@ui/Logo';
import { SignUpQuestion, LogInQuestion } from '@ui/Questions';
import { paths } from '@constants';

export default function Header() {
  const { pathname } = useLocation();
  const isSignUpRoute = pathname === paths.get('sign-up');

  return (
    <header className="wrapper py-6 md:py-10 flex items-center justify-between">
      <Logo />
      <Show when={isSignUpRoute} fallback={<SignUpQuestion />}>
        <LogInQuestion />
      </Show>
    </header>
  );
}
