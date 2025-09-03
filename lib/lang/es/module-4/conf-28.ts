import type { CurriculumTopic } from '../../../types';

export const conference28: CurriculumTopic = {
    id: 'conf-28',
    title: 'Conf. 28: Manejo de Estados API',
    content: [
        { type: 'heading', text: 'Conferencia 28: Manejo de Estados de Carga, Errores y Datos (2h)' },
        { type: 'list', items: [
            'Implementación de lógica para gestionar los estados **loading** (cargando), **error** (error) y **data** (datos) en las llamadas a la API.',
            'Uso de componentes de UI para indicar el estado de carga (ej. **ActivityIndicator**, spinners).',
            'Diseño y presentación de mensajes de error claros y amigables para el usuario.',
            'Estrategias para manejar valores **null** o **undefined** en los datos recibidos de la API.',
        ]},
    ]
};