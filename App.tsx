import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { Header } from './components/Header';
import { ChatPanel } from './components/ChatPanel';
import { useLanguage } from './contexts/LanguageContext';
import { MoonIcon, SunIcon } from './components/Icons';
import { useAuth } from './contexts/AuthContext';
import { Auth } from './components/Auth';
import { AdminPanel } from './components/AdminPanel';
import { Spinner } from './components/Spinner';
import type { CurriculumTopic } from './types';

const App: React.FC = () => {
  const { curriculum, selectedTopic, handleTopicSelect } = useLanguage();
  const { session, loading } = useAuth();

  const [isChatPanelOpen, setChatPanelOpen] = useState<boolean>(false);
  const [isAdminPanelOpen, setAdminPanelOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
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

  const handleTopicSelection = (topic: CurriculumTopic) => {
    handleTopicSelect(topic);
    setSidebarOpen(false); // Close sidebar on topic selection
  };

  if (loading || !curriculum || !selectedTopic) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-slate-950">
        <Spinner />
      </div>
    );
  }

  if (isAdminPanelOpen && session) {
    return <AdminPanel onClose={() => setAdminPanelOpen(false)} />;
  }

  return (
    <>
      <div className="flex h-screen font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950">
        <Sidebar 
          curriculum={curriculum} 
          selectedTopic={selectedTopic} 
          onTopicSelect={handleTopicSelection}
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header 
              topicTitle={selectedTopic.title}
              onChatToggle={() => setChatPanelOpen(!isChatPanelOpen)}
              isChatOpen={isChatPanelOpen}
              onAdminToggle={() => setAdminPanelOpen(true)}
              onLoginClick={() => setAuthModalOpen(true)}
              onMenuToggle={() => setSidebarOpen(true)}
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
            <ContentDisplay topic={selectedTopic} onLoginRequest={() => setAuthModalOpen(true)} />
          </main>
        </div>
        <ChatPanel 
          isOpen={isChatPanelOpen} 
          onClose={() => setChatPanelOpen(false)}
          topicContext={selectedTopic.title}
        />
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
          <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
          ></div>
      )}

      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
             <Auth onAuthSuccess={() => setAuthModalOpen(false)} onClose={() => setAuthModalOpen(false)} />
        </div>
      )}
    </>
  );
};

export default App;