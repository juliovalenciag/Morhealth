import { createContext } from "react";

export const LanguageContext = createContext({
    currentLanguage: "en",
    setCurrentLanguage: () => { },
});
