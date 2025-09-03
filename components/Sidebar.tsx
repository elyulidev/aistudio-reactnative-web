import React, { useState, useEffect } from 'react';
import type { CurriculumTopic, CurriculumModule } from '../types';
import { ReactNativeIcon, ChevronDownIcon } from './Icons';

interface SidebarProps {
  curriculum: {
    objetivoGeneral: CurriculumTopic;
    modules: CurriculumModule[];
  };
  selectedTopic: CurriculumTopic;
  onTopicSelect: (topic: CurriculumTopic) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ curriculum, selectedTopic, onTopicSelect }) => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  // Effect to expand the module containing the selected topic
  useEffect(() => {
    const parentModule = curriculum.modules.find(m => 
        m.overview.id === selectedTopic.id || 
        m.conferences.some(c => c.id === selectedTopic.id)
    );
    if (parentModule) {
        setExpandedModule(parentModule.id);
    } else {
        setExpandedModule(null); // Collapse all if topic (like 'Objetivo General') has no parent
    }
  }, [selectedTopic, curriculum.modules]);

  const toggleModule = (moduleId: string) => {
    setExpandedModule(prev => (prev === moduleId ? null : moduleId));
  };

  const isTopicSelected = (topic: CurriculumTopic) => selectedTopic.id === topic.id;

  const baseButtonClass = "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150";
  const selectedClass = "bg-primary-500 text-white";
  const unselectedClass = "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800";

  return (
    <aside className="w-64 flex-shrink-0 bg-slate-100 dark:bg-slate-900 p-4 border-r border-slate-200 dark:border-slate-800 overflow-y-auto hidden md:block">
      <div className="flex items-center space-x-3 mb-6">
        <ReactNativeIcon className="w-10 h-10 text-primary-500"/>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Opcional I</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">React Native + Expo</p>
        </div>
      </div>
      <nav className="space-y-1">
        <button
            onClick={() => onTopicSelect(curriculum.objetivoGeneral)}
            className={`${baseButtonClass} ${isTopicSelected(curriculum.objetivoGeneral) ? selectedClass : unselectedClass}`}
        >
            {curriculum.objetivoGeneral.title}
        </button>

        {curriculum.modules.map(module => {
            const isExpanded = expandedModule === module.id;
            return (
                <div key={module.id}>
                    <button 
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md"
                        aria-expanded={isExpanded}
                    >
                        <span>{module.title}</span>
                        <ChevronDownIcon 
                            className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-0' : '-rotate-90'}`} 
                        />
                    </button>
                    
                    {isExpanded && (
                        <ul className="pl-3 mt-1 space-y-1 border-l border-slate-200 dark:border-slate-700 ml-3">
                            <li>
                                <button
                                    onClick={() => onTopicSelect(module.overview)}
                                    className={`${baseButtonClass} ${isTopicSelected(module.overview) ? selectedClass : unselectedClass}`}
                                >
                                    Resumen del Módulo
                                </button>
                            </li>
                            {module.conferences.map(topic => (
                                <li key={topic.id}>
                                    <button
                                        onClick={() => onTopicSelect(topic)}
                                        className={`${baseButtonClass} ${isTopicSelected(topic) ? selectedClass : unselectedClass}`}
                                    >
                                        {topic.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )
        })}
      </nav>
    </aside>
  );
};
