import type { CurriculumTopic } from '../../../types';

export const conference39: CurriculumTopic = {
    id: 'conf-39',
    title: 'Conf. 39: Depuración y Errores',
    content: [
        { type: 'heading', text: 'Conferencia 39: Depuración y Manejo de Errores (Local) (2h)' },
        { type: 'list', items: [
            'Uso de herramientas de depuración de Expo (Chrome Debugger, Metro Bundler) y de tu IDE.',
            'Estrategias para el registro de errores (**console.log** avanzado, herramientas de monitoreo de errores si se usan alternativas locales).',
            'Implementación de límites de error (Error Boundaries) para prevenir fallos críticos en la UI.',
            'Buenas prácticas para escribir código defensivo y robusto.',
        ]},
    ]
};