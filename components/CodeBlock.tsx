
import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-slate-800 dark:bg-black/50 rounded-lg my-6 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-700 dark:bg-slate-900/80">
        <span className="text-xs font-sans text-slate-400 uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4 mr-1 text-green-400" />
              Copiado
            </>
          ) : (
            <>
              <CopyIcon className="w-4 h-4 mr-1" />
              Copiar
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="font-mono text-slate-200">{code.trim()}</code>
      </pre>
    </div>
  );
};
