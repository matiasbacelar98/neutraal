import { useLocation, useNavigate } from 'react-router-dom';

import { Show } from '@components';
import { Logo, SignUpQuestion, LogInQuestion, LogoutBtn } from '@ui';

import { useUserContext } from '@contexts/UserContext';

import { supabase } from '@services/supabase';
import { paths } from '@constants';
import { Popup } from '@utils';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isSignUpRoute = pathname === paths.get('sign-up');

  const { user } = useUserContext();

  // eslint-disable-next-line
  async function signOut(): Promise<any> {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Popup({
        type: 'error',
        title: 'Error',
        text: 'Please try again later',
      });
    } else {
      navigate('/sign-in');
    }
  }

  return (
    <header className="wrapper py-6 md:py-10 flex items-center justify-between">
      <Logo />

      <Show when={!user} fallback={<LogoutBtn onClick={signOut} />}>
        <Show when={isSignUpRoute} fallback={<SignUpQuestion />}>
          <LogInQuestion />
        </Show>
      </Show>
    </header>
  );
}
