import create from "zustand";
import { setCookie, parseCookies } from "nookies";

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => {
  const cookies = parseCookies();
  const initialLanguage = cookies.language || "sk";
  if (!cookies.language) {
    setCookie(null, "language", initialLanguage, { path: "/" });
  }

  return {
    language: initialLanguage,
    setLanguage: (lang: string) => {
      setCookie(null, "language", lang, { path: "/" });
      set({ language: lang });
    },
  };
});

export default useLanguageStore;
