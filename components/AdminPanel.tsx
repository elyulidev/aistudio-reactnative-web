import React, { useState, useEffect, useMemo } from 'react';
import { getQuizAttempts, getCourses } from '../services/supabase';
import type { QuizAttempt, Course } from '../types';
import { Spinner } from './Spinner';
import { CloseIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

export const AdminPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { t } = useLanguage();
    const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterCourse, setFilterCourse] = useState<string>('all');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [attemptsRes, coursesRes] = await Promise.all([
                    getQuizAttempts(),
                    getCourses()
                ]);

                if (attemptsRes.error) throw attemptsRes.error;
                if (coursesRes.error) throw coursesRes.error;

                setAttempts(attemptsRes.data || []);
                setCourses(coursesRes.data || []);
            } catch (error) {
                console.error("Error fetching admin data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredAttempts = useMemo(() => {
        if (filterCourse === 'all') {
            return attempts;
        }
        return attempts.filter(attempt => attempt.course_id === filterCourse);
    }, [attempts, filterCourse]);

    return (
        <div className="flex flex-col h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
            <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {t('adminPanelTitle')}
                </h1>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none"
                    aria-label="Close admin panel"
                >
                    <CloseIcon className="w-6 h-6" />
                </button>
            </header>
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white dark:bg-slate-900 shadow-md rounded-lg p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold mb-2 sm:mb-0">{t('adminQuizAttempts')}</h2>
                            <div>
                                <label htmlFor="course-filter" className="text-sm font-medium mr-2">{t('adminFilterByCourse')}:</label>
                                <select
                                    id="course-filter"
                                    value={filterCourse}
                                    onChange={(e) => setFilterCourse(e.target.value)}
                                    className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md px-3 py-1 text-sm focus:ring-primary-500 focus:border-primary-500"
                                >
                                    <option value="all">{t('adminAllCourses')}</option>
                                    {courses.map(course => (
                                        <option key={course.id} value={course.id}>{course.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <Spinner />
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                                    <thead className="bg-slate-50 dark:bg-slate-800">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">{t('adminTableUser')}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">{t('adminTableQuiz')}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">{t('adminTableScore')}</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">{t('adminTableDate')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-700">
                                        {filteredAttempts.length > 0 ? filteredAttempts.map(attempt => (
                                            <tr key={attempt.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">{attempt.profiles?.email || 'N/A'}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{attempt.quiz_id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${attempt.score >= 70 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                        {attempt.score}%
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{new Date(attempt.created_at!).toLocaleString()}</td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={4} className="px-6 py-4 text-center text-sm text-slate-500">{t('adminNoResults')}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
