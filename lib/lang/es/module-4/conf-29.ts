import type { CurriculumTopic } from '../../../types';

export const conference29: CurriculumTopic = {
    id: 'conf-29',
    title: 'Conf. 29: Debouncing',
    content: [
        { type: 'heading', text: 'Conferencia 29: Optimización de Solicitudes: Debouncing (2h)' },
        { type: 'list', items: [
            'Identificación de problemas de rendimiento causados por búsquedas en tiempo real y llamadas excesivas a la API.',
            'Concepto de "debouncing" para limitar la frecuencia de ejecución de funciones.',
            'Implementación de un hook **useDebounce** (personalizado o de una librería externa).',
            'Práctica: Aplicación de debouncing a un campo de búsqueda en una aplicación para optimizar las llamadas a la API.',
        ]},
    ]
};