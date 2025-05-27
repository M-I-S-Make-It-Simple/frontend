"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/locales/locale";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [locale, setLocale] = useState("uk");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && translations[savedLocale]) {
      setLocale(savedLocale);
    }
    setIsInitialized(true);
  }, []);

  const t = (key) => {
    return translations[locale]?.[key] || key;
  };

  const changeLanguage = (newLocale) => {
    console.log("Changing language to:", newLocale);
    if (translations[newLocale]) {
      setLocale(newLocale);
      localStorage.setItem("locale", newLocale);
    }
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <TranslationContext.Provider value={{ t, locale, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
