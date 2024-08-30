import { useStorageState } from "@/hooks/useStorageState";
import { router } from "expo-router";
import { createContext, PropsWithChildren } from "react";

/**
 *  Made with help from expo auth tutorial: https://docs.expo.dev/router/reference/authentication/
 */

interface AuthContextType {
  signIn: (userName: string, password: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  signIn: (userName: string, password: string) => null,
  signOut: () => null,
  session: null,
  isLoading: true,
});

export function AuthSessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  const signIn = (userName: string, password: string) => {
    // TODO: Perform sign in logic here - for now push a dummy token
    // TODO: DO NOT LOG PASSWORD
    console.log(
      `[AuthSessionProvider AuthSessionProvider] Logging in for user ${userName} with password ${password}`
    );
    setSession("xxx");

    // TODO: Make sure login actually succeeded here before routing to index
    router.push("/");
  };

  const signOut = () => {
    // TODO: API Call to tell our auth system to kill the existing token
    setSession(null);
    router.push("/sign-in");
  };

  return (
    <AuthContext.Provider
      value={{
        signIn: signIn,
        signOut: signOut,
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
