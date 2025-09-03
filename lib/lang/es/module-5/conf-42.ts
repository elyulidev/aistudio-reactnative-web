import type { CurriculumTopic } from '../../../types';

export const conference42: CurriculumTopic = {
    id: 'conf-42',
    title: 'Conf. 42: Mini Proyecto Real Estate II',
    content: [
        { type: 'heading', text: 'Conferencia 42: Aplicación de Real Estate (Detalles y Formularios) (2h)' },
        { type: 'list', items: [
            'Desarrollo de una pantalla de detalles de propiedad con múltiples secciones (galería de imágenes, descripción, características, reseñas, etc.).',
            'Creación de formularios para añadir o editar propiedades, con validación de entrada de datos, almacenando cambios localmente.',
            'Práctica: Implementación de la pantalla de detalles de propiedad y formularios interactivos.',
        ]},
    ]
};