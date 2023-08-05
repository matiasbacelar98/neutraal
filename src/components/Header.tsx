import { useLocation } from 'react-router-dom';
import Show from '@components/Show';
import Logo from '@ui/Logo';
import { SignUpQuestion, LogInQuestion } from '@ui/Questions';
import { LogoutBtn } from '@ui/Buttons';
import { paths } from '@constants';
import { useUserContext } from '@contexts/UserContext';

export default function Header() {
  const { pathname } = useLocation();
  const isSignUpRoute = pathname === paths.get('sign-up');

  const { user } = useUserContext();

  return (
    <header className="wrapper py-6 md:py-10 flex items-center justify-between">
      <Logo />

      <Show when={!user} fallback={<LogoutBtn onClick={() => console.log('logout')} />}>
        <Show when={isSignUpRoute} fallback={<SignUpQuestion />}>
          <LogInQuestion />
        </Show>
      </Show>
    </header>
  );
}
