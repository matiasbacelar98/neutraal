import {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from 'react';
import { supabase } from '@services/supabase';

//----------- Types -----------//
type UserContextType = {
  user: null | boolean;
  updateUser(value: null | boolean): void;
};

type UserType = null | boolean;

//----------- Provider -----------//
const UserContext = createContext<UserContextType>({
  user: null,
  updateUser() {},
});

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserType>(null);

  function updateUser(value: boolean | null): void {
    setUser(value);
  }

  const memoizedUpdateUser = useCallback(updateUser, []);

  // Update user auth status
  useUpdateUserAuth(memoizedUpdateUser);

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
}

//----------- Hooks -----------//
type useUpdateUserType = (value: null | boolean) => void;

function useUpdateUserAuth(updateUser: useUpdateUserType) {
  useEffect(() => {
    // set auth when mount
    updateUser(supabase?.auth ? true : null);

    // update auth
    supabase.auth.onAuthStateChange((event, session) => {
      updateUser(session ? true : false);
    });
  }, [updateUser]);
}

export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
