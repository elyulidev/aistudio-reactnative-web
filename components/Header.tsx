import React, { useState, useRef, useEffect } from 'react';
import { ChatIcon, GlobeAltIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const languages: { code: Language, name: string }[] = [
        { code: 'es', name: 'Español' },
        { code: 'pt', name: 'Português' },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode: Language) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-900"
                aria-label="Change language"
            >
                <GlobeAltIcon className="w-6 h-6" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-20">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm ${language === lang.code ? 'bg-primary-500 text-white' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


interface HeaderProps {
    topicTitle: string;
    onChatToggle: () => void;
    isChatOpen: boolean;
    children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ topicTitle, onChatToggle, isChatOpen, children }) => {
    return (
        <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-10">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white truncate">
                {topicTitle}
            </h1>
            <div className="flex items-center space-x-2">
                <LanguageSwitcher />
                {children}
                <button
                    onClick={onChatToggle}
                    className={`p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-900 ${isChatOpen ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300' : ''}`}
                    aria-label="Toggle AI Assistant"
                >
                    <ChatIcon className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
};
