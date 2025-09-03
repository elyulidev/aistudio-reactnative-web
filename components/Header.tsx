
import React, from 'react';
import { ChatIcon } from './Icons';

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
