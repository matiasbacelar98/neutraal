import { useState, useContext, createContext, PropsWithChildren } from 'react';

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

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
}

//----------- Hooks -----------//
export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
