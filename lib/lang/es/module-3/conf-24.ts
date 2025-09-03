import type { CurriculumTopic } from '../../../types';

export const conference24: CurriculumTopic = {
    id: 'conf-24',
    title: 'Conf. 24: Seeding de BD',
    content: [
        { type: 'heading', text: 'Conferencia 24: Seeding de la Base de Datos Local (2h)' },
        { type: 'list', items: [
            '¿Qué es el "seeding" de la base de datos y su utilidad en el desarrollo?',
            'Creación de un script para poblar la base de datos local con datos de prueba realistas.',
            'La importancia de los datos de prueba para el desarrollo rápido de la interfaz de usuario y la lógica.',
            'Práctica: Implementación de un script de seeding para la aplicación To-Do o un prototipo de Expense Tracker.',
        ]},
    ]
};