import React from 'react';
import type { CurriculumTopic, ContentPart, IconMap } from '../types';
import { CodeBlock } from './CodeBlock';
import { 
    InfoIcon, WarningIcon, TipIcon, DevicePhoneMobileIcon, CodeBracketIcon, BoltIcon,
    UsersIcon, AcademicCapIcon, FolderIcon, RectangleGroupIcon, ArrowRightIcon 
} from './Icons';

// Map icon names from data to actual components
const icons: IconMap = {
    DevicePhoneMobileIcon, CodeBracketIcon, BoltIcon, UsersIcon, 
    AcademicCapIcon, FolderIcon, RectangleGroupIcon, ArrowRightIcon
};

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
        return <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100 border-b pb-2 border-slate-200 dark:border-slate-700">{part.text}</h2>;
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
