import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { translations } from '../lib/i18n';
import type { Language, CurriculumTopic } from '../types';

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string, options?: { [key: string]: string }) => string;
    curriculum: typeof translations.es.curriculum;
    selectedTopic: CurriculumTopic | null;
    handleTopicSelect: (topic: CurriculumTopic) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedLang = window.localStorage.getItem('language');
            if (storedLang === 'es' || storedLang === 'pt') {
                return storedLang;
            }
        }
        const browserLang = navigator.language.split('-')[0];
        return browserLang === 'pt' ? 'pt' : 'es';
    });

    const [selectedTopic, setSelectedTopic] = useState<CurriculumTopic | null>(
        () => translations[language].curriculum.objetivoGeneral
    );

    useEffect(() => {
        localStorage.setItem('language', language);
        setSelectedTopic(translations[language].curriculum.objetivoGeneral);
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const handleTopicSelect = useCallback((topic: CurriculumTopic) => {
      setSelectedTopic(topic);
    }, []);

    const t = (key: string, options?: { [key: string]: string }): string => {
        let text = translations[language].ui[key as keyof typeof translations.es.ui] || key;
        if (options) {
            Object.keys(options).forEach(optionKey => {
                text = text.replace(`{${optionKey}}`, options[optionKey]);
            });
        }
        return text;
    };

    const value = {
        language,
        setLanguage,
        t,
        curriculum: translations[language].curriculum,
        selectedTopic,
        handleTopicSelect,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
