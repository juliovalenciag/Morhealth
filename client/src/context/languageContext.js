import { createContext, useState } from "react";
import axios from "axios";

export const LanguageContext = createContext();

const translateText = async (text, targetLanguage) => {
    try {
        const response = await axios.post("https://libretranslate.de/translate", {
            q: text,
            source: "auto",
            target: targetLanguage,
        });

        return response.data.translatedText;
    } catch (error) {
        console.error("Error al traducir el texto:", error);
        return text;
    }
};

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const [translations, setTranslations] = useState({});

    const changeLanguage = async (languageCode) => {
        setCurrentLanguage(languageCode);

        
    };

    const getTranslation = async (text) => {
        if (translations[currentLanguage] && translations[currentLanguage][text]) {
            return translations[currentLanguage][text];
        }

        const translatedText = await translateText(text, currentLanguage);
        setTranslations((prevTranslations) => ({
            ...prevTranslations,
            [currentLanguage]: {
                ...prevTranslations[currentLanguage],
                [text]: translatedText,
            },
        }));

        return translatedText;
    };

    return (
        <LanguageContext.Provider
            value={{ currentLanguage, changeLanguage, getTranslation }}
        >
            {children}
        </LanguageContext.Provider>
    );
};