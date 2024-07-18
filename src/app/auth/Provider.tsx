"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../lib/firebaseClient";

export function getAuthToken(): string | undefined {
  return Cookies.get("FirebaseIdTokenTim");
}

export function setAuthToken(token: string): void {
  Cookies.set("FirebaseIdTokenTim", token, {
    secure: true,
    sameSite: "None",
    path: "/",
  });
}

export function removeAuthToken(): void {
  return Cookies.remove("FirebaseIdTokenTim");
}

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState<any>(null);
  // const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const accessToken = await user.getIdToken();
        setUser({
          accessToken: accessToken,
          auth: auth,
          displayName: user.displayName,
          email: user.email,
          provider: user.providerData[0].providerId,
          uid: user.uid,
        });
        setAuthToken(accessToken);
      } else {
        setUser(null);
        removeAuthToken();
      }
      setLoadingUser(false);
    });
    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);

      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);

      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const changePassword = async (
    currentPassword: string,
    newPassword: string
  ) => {
    const user_ = auth.currentUser;
    try {
      if (user_) {
        const credential = EmailAuthProvider.credential(
          user.email!,
          currentPassword
        );
        try {
          await reauthenticateWithCredential(user_, credential);
          await updatePassword(user_, newPassword);
          return {
            success: true,
            message: "Heslo bolo úspešne aktualižované.",
          };
        } catch (reauthError) {
          return { success: false, message: "Zadali ste zlé heslo." };
        }
      } else {
        return { success: false, message: "Užívateľ nie je prihlásený." };
      }
    } catch (error) {
      return { success: false, message: "Heslo sa nepodarilo aktualizovať." };
    }
  };

  const sendPasswordLink = async (typedEmail: string) => {
    try {
      await sendPasswordResetEmail(auth, typedEmail);
      return {
        success: true,
        message: "Odkaz na zmenu hesla bol úspešne odoslaný.",
      };
    } catch (e) {
      console.log(e);
    }
  };

  const loginWithGmail = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);

      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const loginWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);

      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loginWithGmail,
        loginWithFacebook,
        loadingUser,
        changePassword,
        sendPasswordLink,
      }}
    >
      {loadingUser ? null : children}
    </AuthContext.Provider>
  );
};
