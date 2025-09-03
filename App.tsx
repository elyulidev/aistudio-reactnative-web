import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { Header } from './components/Header';
import { ChatPanel } from './components/ChatPanel';
import { useLanguage } from './contexts/LanguageContext';
import { MoonIcon, SunIcon } from './components/Icons';

const App: React.FC = () => {
  const { curriculum, selectedTopic, handleTopicSelect } = useLanguage();
  const [isChatPanelOpen, setChatPanelOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  if (!curriculum || !selectedTopic) {
    // Render a loading state or null while the language context is initializing
    return null;
  }

  return (
    <div className="flex h-screen font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950">
      <Sidebar 
        curriculum={curriculum} 
        selectedTopic={selectedTopic} 
        onTopicSelect={handleTopicSelect} 
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
            topicTitle={selectedTopic.title}
            onChatToggle={() => setChatPanelOpen(!isChatPanelOpen)}
            isChatOpen={isChatPanelOpen}
        >
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-900"
                aria-label="Toggle dark mode"
            >
                {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>
        </Header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <ContentDisplay topic={selectedTopic} />
        </main>
      </div>
      <ChatPanel 
        isOpen={isChatPanelOpen} 
        onClose={() => setChatPanelOpen(false)}
        topicContext={selectedTopic.title}
      />
    </div>
  );
};

export default App;
