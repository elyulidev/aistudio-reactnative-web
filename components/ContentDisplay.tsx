import React, { useState, useMemo } from 'react';
import type { CurriculumTopic, ContentPart, IconMap, QuizQuestion, FileItem } from '../types';
import { CodeBlock } from './CodeBlock';
import { useLanguage } from '../contexts/LanguageContext';
import { 
    InfoIcon, WarningIcon, TipIcon, DevicePhoneMobileIcon, CodeBracketIcon, BoltIcon,
    UsersIcon, AcademicCapIcon, FolderIcon, RectangleGroupIcon, ArrowRightIcon, FileIcon,
    DocumentTextIcon, PhotoIcon, Bars3BottomLeftIcon, ArrowsUpDownIcon, CursorArrowRaysIcon, PowerIcon, ListBulletIcon,
    // New Icons for Conf 4
    ArrowPathIcon, ChatBubbleBottomCenterTextIcon, SparklesIcon, KeyIcon, LinkIcon, RectangleStackIcon, MagnifyingGlassPlusIcon, WindowIcon
} from './Icons';

// Map icon names from data to actual components
const icons: IconMap = {
    DevicePhoneMobileIcon, CodeBracketIcon, BoltIcon, UsersIcon, 
    AcademicCapIcon, FolderIcon, RectangleGroupIcon, ArrowRightIcon,
    DocumentTextIcon, PhotoIcon, Bars3BottomLeftIcon, ArrowsUpDownIcon, 
    CursorArrowRaysIcon, PowerIcon, ListBulletIcon,
    // New Icons for Conf 4
    ArrowPathIcon, ChatBubbleBottomCenterTextIcon, SparklesIcon, KeyIcon, LinkIcon, RectangleStackIcon, MagnifyingGlassPlusIcon, WindowIcon
};

// --- Quiz Component ---
interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const { t } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  
  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };
  
  const score = useMemo(() => {
    if (!quizFinished) return 0;
    const correctAnswers = questions.reduce((count, question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        return count + 1;
      }
      return count;
    }, 0);
    return Math.round((correctAnswers / totalQuestions) * 100);
  }, [quizFinished, questions, selectedAnswers, totalQuestions]);

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizFinished(false);
  };

  if (totalQuestions === 0) return null;

  const progress = ((quizFinished ? totalQuestions : currentQuestionIndex + 1) / totalQuestions) * 100;
  
  return (
    <div className="my-8 p-6 bg-slate-100 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
      {quizFinished ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('quizYourScore')}</h3>
          <p className="text-5xl font-extrabold text-primary-500 mb-4">{score}%</p>
          <p className="text-slate-600 dark:text-slate-300 mb-6">{t('quizScore', { score: String(score) })}</p>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-800"
          >
            {t('quizTryAgain')}
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                {t('quizQuestion', { current: String(currentQuestionIndex + 1), total: String(totalQuestions) })}
              </h4>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
              <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
            </div>
          </div>
          
          <p className="text-lg font-medium text-slate-900 dark:text-white my-4">{currentQuestion.question}</p>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors duration-200 ${
                    isSelected
                      ? 'bg-primary-100 dark:bg-primary-900/50 border-primary-500'
                      : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-primary-400'
                  }`}
                >
                  <span className={`font-medium ${isSelected ? 'text-primary-700 dark:text-primary-300' : 'text-slate-800 dark:text-slate-200'}`}>{option}</span>
                </button>
              );
            })}
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestionIndex] === undefined || selectedAnswers[currentQuestionIndex] === null}
              className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-800"
            >
              {currentQuestionIndex < totalQuestions - 1 ? t('quizNext') : t('quizSubmit')}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
// --- End Quiz Component ---

// --- FileStructure Component ---
interface FileStructureProps {
  files: FileItem[];
}

const FileStructure: React.FC<FileStructureProps> = ({ files }) => {
    const [selectedFile, setSelectedFile] = useState<FileItem | null>(files.length > 0 ? files[0] : null);

    if (files.length === 0) return null;

    return (
        <div className="my-6 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800/50">
                    <tr>
                        <th className="w-1/3 md:w-1/4 p-3 text-left font-semibold text-slate-800 dark:text-slate-200">Archivo/Carpeta</th>
                        <th className="p-3 text-left font-semibold text-slate-800 dark:text-slate-200">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="align-top">
                        <td className="p-0 border-r border-slate-200 dark:border-slate-700">
                            <div className="flex flex-col">
                                {files.map((file) => (
                                    <button
                                        key={file.id}
                                        className={`flex items-center gap-3 w-full p-3 text-left transition-colors ${
                                            selectedFile?.id === file.id
                                                ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300'
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                                        }`}
                                        onClick={() => setSelectedFile(file)}
                                    >
                                        <FileIcon className="w-4 h-4 flex-shrink-0" />
                                        <span className="font-medium">{file.name}</span>
                                    </button>
                                ))}
                            </div>
                        </td>
                        <td className="p-4">
                            {selectedFile ? (
                                <div className="space-y-3">
                                    {selectedFile.description.map((p, index) => (
                                        <p key={index} className="text-slate-600 dark:text-slate-300 leading-relaxed">{p}</p>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-full text-slate-500 dark:text-slate-400">
                                    Selecciona un archivo para ver su descripción
                                </div>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
// --- End FileStructure Component ---

// --- ComponentGrid Component ---
const ComponentGrid: React.FC<{ items: {id: string; title: string; icon: string}[] }> = ({ items }) => {
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
            {items.map(item => {
                const IconComponent = icons[item.icon];
                return (
                    <div
                        key={item.id}
                        onClick={() => handleScrollTo(item.id)}
                        className="flex flex-col items-center justify-center text-center p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:shadow-md transition-all duration-200 group cursor-pointer"
                    >
                        {IconComponent && <IconComponent className="w-8 h-8 mb-2 text-slate-600 dark:text-slate-300 group-hover:text-primary-500 transition-colors" />}
                        <span className="font-semibold text-sm text-slate-800 dark:text-slate-100">{item.title}</span>
                    </div>
                )
            })}
        </div>
    )
};
// --- End ComponentGrid Component ---


const Alert: React.FC<{ part: ContentPart }> = ({ part }) => {
    const alertStyles = {
        info: {
            bg: 'bg-blue-100 dark:bg-blue-900/50',
            border: 'border-blue-500',
            text: 'text-blue-800 dark:text-blue-200',
            icon: <InfoIcon className="w-5 h-5 text-blue-500" />
        },
        warning: {
            bg: 'bg-yellow-100 dark:bg-yellow-900/50',
            border: 'border-yellow-500',
            text: 'text-yellow-800 dark:text-yellow-200',
            icon: <WarningIcon className="w-5 h-5 text-yellow-500" />
        },
        tip: {
            bg: 'bg-green-100 dark:bg-green-900/50',
            border: 'border-green-500',
            text: 'text-green-800 dark:text-green-200',
            icon: <TipIcon className="w-5 h-5 text-green-500" />
        },
    };

    const styles = alertStyles[part.alertType || 'info'];

    return (
        <div className={`flex items-start p-4 my-6 rounded-lg border-l-4 ${styles.bg} ${styles.border}`} role="alert">
            <div className="flex-shrink-0 mr-3">{styles.icon}</div>
            <p className={`text-sm ${styles.text}`}>{part.text}</p>
        </div>
    );
};

const ContentPartRenderer: React.FC<{ part: ContentPart }> = ({ part }) => {
  switch (part.type) {
    case 'heading':
      return <h1 className="text-3xl font-extrabold mt-4 mb-4 text-slate-900 dark:text-white">{part.text}</h1>;
    case 'subtitle':
        const slug = part.id || part.text?.toLowerCase()
          .replace(/<[^>]*>?/gm, '') // Remove HTML tags
          .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
          .replace(/\s+/g, '-') // Collapse whitespace and replace by -
          .replace(/-+/g, '-'); // Collapse dashes
        return <h2 id={slug} className="text-2xl font-bold mt-12 mb-4 text-slate-800 dark:text-slate-100 border-b pb-2 border-slate-200 dark:border-slate-700 scroll-mt-20">{part.text}</h2>;
    case 'paragraph':
      return <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">{part.text}</p>;
    case 'code':
      return <CodeBlock code={part.code || ''} language={part.language || 'bash'} />;
    case 'list':
      return (
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2 text-slate-700 dark:text-slate-300">
          {part.items?.map((item, index) => {
            const itemText = typeof item === 'string' ? item : item.text;
            const subItems = typeof item !== 'string' ? item.subItems : [];
            const segments = itemText.split('**');
            return (
                <li key={index}>
                  {segments.map((segment, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="font-semibold text-slate-800 dark:text-slate-100">
                        {segment}
                      </strong>
                    ) : (
                      <React.Fragment key={i}>{segment}</React.Fragment>
                    )
                  )}
                   {subItems.length > 0 && (
                        <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
                            {subItems.map((subItem, subIndex) => <li key={subIndex}>{subItem}</li>)}
                        </ul>
                    )}
                </li>
            );
          })}
        </ul>
      );
    case 'alert':
    case 'callout':
        return <Alert part={part} />;
    case 'image':
        return (
            <figure className="my-6">
                <img src={part.imageUrl} alt={part.caption || 'Imagen de la conferencia'} className="rounded-lg shadow-lg w-full object-contain" />
                {part.caption && <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">{part.caption}</figcaption>}
            </figure>
        );
    case 'twoColumn':
        return (
            <div className="grid md:grid-cols-2 gap-6 my-6">
                {part.columns?.map((col, index) => (
                    <div key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">{col.title}</h3>
                        <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                            {col.content.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        );
    case 'featureCard':
        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 my-6">
                {part.featureItems?.map((item, index) => {
                    const IconComponent = icons[item.icon];
                    return (
                        <div key={index} className="flex items-start p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
                            {IconComponent && <div className="flex-shrink-0 mr-4 mt-1"><IconComponent className="w-6 h-6 text-primary-500" /></div>}
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    case 'divider':
        return <hr className="my-8 border-slate-200 dark:border-slate-700" />;
    case 'fileStructure':
        return <FileStructure files={part.files || []} />;
    case 'componentGrid':
        return <ComponentGrid items={part.componentGridItems || []} />;
    case 'quiz':
        return <Quiz questions={part.questions || []} />;
    default:
      return null;
  }
};

interface ContentDisplayProps {
  topic: CurriculumTopic;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ topic }) => {
  return (
    <article className="max-w-4xl mx-auto">
      {topic.content.map((part, index) => (
        <ContentPartRenderer key={index} part={part} />
      ))}
    </article>
  );
};