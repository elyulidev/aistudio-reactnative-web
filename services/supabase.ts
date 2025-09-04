import { createClient } from '@supabase/supabase-js';
import type { QuizAttempt, AssignmentSubmission } from '../types';
import { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_ID } from '../constants';

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

// Check if placeholder values are still being used.
const isSupabaseConfigured = !supabaseUrl.includes('<your-project-id>') && !supabaseAnonKey.includes('<your-supabase-anon-key>');

let supabase;

if (isSupabaseConfigured) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
    // If Supabase is not configured, we'll log a warning and use a mock client.
    // This allows the rest of the app to function without crashing.
    console.warn("Supabase credentials are not set. Please update constants.ts with your own credentials for authentication and data storage to work.");
    
    const mockAuth = {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signInWithPassword: () => Promise.resolve({ data: { user: null, session: null }, error: { message: 'Supabase not configured. Check constants.ts' } }),
        signUp: () => Promise.resolve({ data: { user: null, session: null }, error: { message: 'Supabase not configured. Check constants.ts' } }),
        signOut: () => Promise.resolve({ error: null }),
    };

    const mockDB = {
        from: () => ({
            select: () => Promise.resolve({ data: [], error: null }),
            insert: (data: any) => Promise.resolve({ data, error: { message: 'Supabase not configured. Check constants.ts' } }),
        }),
    };

    supabase = {
        ...mockDB,
        auth: mockAuth,
    } as any;
}


export { supabase };


export const saveQuizAttempt = async (attempt: QuizAttempt) => {
    if (!isSupabaseConfigured) {
        console.log("Attempted to save quiz attempt without Supabase configured:", attempt);
        return { data: null, error: { message: 'Supabase not configured.' } };
    }
    // Use .select() to get the inserted row back, .single() to get a single object instead of an array
    return await supabase.from('quiz_attempts').insert(attempt).select().single();
};

export const getQuizAttemptForUser = async (userId: string, quizId: string) => {
    if (!isSupabaseConfigured) {
        return { data: null, error: { message: 'Supabase not configured.' } };
    }
    // maybeSingle returns a single record or null, without throwing an error if not found.
    return await supabase.from('quiz_attempts').select('*').eq('user_id', userId).eq('quiz_id', quizId).maybeSingle();
}

export const getQuizAttempts = async () => {
    if (!isSupabaseConfigured) return { data: [], error: null };
    return await supabase
        .from('quiz_attempts')
        .select('*, profiles(email), courses(name)')
        .order('created_at', { ascending: false });
};

export const getCourses = async () => {
    if (!isSupabaseConfigured) return { data: [], error: null };
    return await supabase.from('courses').select('*');
};

// --- Assignment Submissions ---

export const saveAssignmentSubmission = async (submission: AssignmentSubmission) => {
    if (!isSupabaseConfigured) {
        console.log("Attempted to save assignment submission without Supabase configured:", submission);
        return { data: null, error: { message: 'Supabase not configured.' } };
    }
    return await supabase.from('assignment_submissions').insert(submission).select().single();
};

export const getAssignmentSubmissionForUser = async (userId: string, assignmentId: string) => {
    if (!isSupabaseConfigured) {
        return { data: null, error: { message: 'Supabase not configured.' } };
    }
    return await supabase.from('assignment_submissions').select('*').eq('user_id', userId).eq('assignment_id', assignmentId).maybeSingle();
};