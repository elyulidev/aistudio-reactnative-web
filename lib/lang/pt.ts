import type { CurriculumTopic, CurriculumModule } from '../../types';

const objetivoGeneral: CurriculumTopic = {
    id: 'objetivo-general',
    title: 'Objetivo Geral',
    content: [
      { type: 'heading', text: 'Objetivo Geral do Bootcamp' },
      { type: 'paragraph', text: 'Capacitá-lo para construir aplicações móveis multiplataforma (Android, iOS e Web) utilizando React Native e Expo, com foco no desenvolvimento local e na persistência de dados com SQLite e Drizzle ORM.' },
      { 
        type: 'image', 
        imageUrl: 'https://images.unsplash.com/photo-1607799279861-4d5ae1387c09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Um ecossistema de desenvolvimento moderno para aplicações móveis.'
      },
    ]
};

const modules: CurriculumModule[] = [
    // Módulo 1
    {
        id: 'modulo-1',
        title: 'Módulo 1: Fundamentos',
        overview: {
            id: 'modulo-1-overview',
            title: 'Módulo 1: Fundamentos',
            content: [
              { type: 'heading', text: 'Módulo 1: Fundamentos de React Native e Configuração' },
              { type: 'paragraph', text: 'Duração: 16 horas / 8 Palestras' },
              { type: 'paragraph', text: 'Este módulo estabelece as bases para o desenvolvimento móvel, cobrindo a configuração do ambiente e os componentes essenciais da interface do usuário.' },
            ]
        },
        conferences: [
            {
                id: 'conf-1',
                title: 'Conf. 1: Introdução a RN e Expo',
                content: [
                  { type: 'heading', text: 'Introdução ao React Native e Expo' },
                  { type: 'paragraph', text: 'Uma compreensão sólida de React Native e Expo, cobrindo seus fundamentos, configuração do ambiente, componentes básicos de UI e os conceitos essenciais de roteamento.' },
                  
                  { type: 'divider' },
                  
                  { type: 'subtitle', text: 'Parte 1: Descobrindo o React Native' },
                  { type: 'paragraph', text: 'React Native é um framework que permite construir aplicações móveis nativas para iOS e Android a partir de uma única base de código usando React.' },
                  { type: 'featureCard', featureItems: [
                    { icon: 'CodeBracketIcon', title: 'Código Único', text: 'Escreva o código uma vez e implemente-o em iOS и Android, economizando tempo e recursos.' },
                    { icon: 'UsersIcon', title: 'Grande Adoção', text: 'Utilizado por gigantes como Meta, Microsoft, Tesla e Airbnb.' },
                    { icon: 'BoltIcon', title: 'Alto Desempenho', text: 'A nova arquitetura (JSI, Turbo Modules, Fabric) oferece um desempenho próximo ao nativo.' },
                  ]},
                  
                  { type: 'callout', alertType: 'info', text: 'Aproximadamente 75% do conhecimento de React para desenvolvimento web é transferido diretamente para o móvel.' },
                  
                  { type: 'subtitle', text: 'React Native vs. React Web' },
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/react-native-vs-web.png', caption: 'Visualização conceitual das diferenças de componentes entre React Web e React Native.' },
                  { type: 'twoColumn', columns: [
                    { title: 'Componentes', content: [
                      '<div> → <View>',
                      '<p>, <h1> → <Text>',
                      '<img> → <Image>',
                      '<input> → <TextInput>',
                    ]},
                    { title: 'Estilos e Eventos', content: [
                      'className → style={StyleSheet.create(...)}',
                      'CSS → NativeWind (Tailwind)',
                      'onClick → onPress',
                      'onMouseOver → onLongPress',
                    ]}
                  ]},
                  
                  { type: 'divider' },

                  { type: 'subtitle', text: 'Parte 2: Introdução ao Expo' },
                  { type: 'paragraph', text: 'Expo é um framework e ecossistema de ferramentas para React Native que simplifica enormemente o desenvolvimento, a revisão e a implantação.' },
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/expo-ecosystem.png', caption: 'O ecossistema Expo: um conjunto de ferramentas sobre React Native para agilizar o desenvolvimento.' },
                  { type: 'featureCard', featureItems: [
                    { icon: 'AcademicCapIcon', title: 'Recomendado Oficialmente', text: 'A documentação do React Native recomenda o Expo como a melhor maneira de começar.' },
                    { icon: 'BoltIcon', title: 'Configuração Simples', text: 'Você não precisa instalar o Android Studio ou o Xcode para começar a desenvolver.' },
                    { icon: 'DevicePhoneMobileIcon', title: 'Expo Go', text: 'Um aplicativo para testar seus desenvolvimentos в tempo real no seu dispositivo físico.' },
                    { icon: 'FolderIcon', title: 'Expo Router', text: 'Sistema de roteamento baseado em arquivos, semelhante ao Next.js.' },
                  ]},

                  { type: 'divider' },

                  { type: 'subtitle', text: 'Parte 3: Configuração e Estrutura' },
                   { type: 'paragraph', text: 'Começar um novo projeto é tão simples quanto executar um único comando no seu terminal.' },
                  { type: 'code', language: 'bash', code: 'npx create-expo-app my-app' },
                  { type: 'paragraph', text: 'Em seguida, inicie-o e escaneie o QR com o aplicativo Expo Go no seu telefone.' },
                  { type: 'code', language: 'bash', code: 'cd my-app\nnpx expo start' },
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/expo-go-workflow.png', caption: 'Fluxo de desenvolvimento com o Expo Go: codifique, escaneie o QR e visualize seu aplicativo instantaneamente no seu dispositivo.' },
                  { type: 'callout', alertType: 'warning', text: 'Importante: Seu computador e seu dispositivo móvel devem estar conectados à mesma rede Wi-Fi.' },

                  { type: 'divider' },

                  { type: 'subtitle', text: 'Parte 4: Componentes Core e Estilos' },
                  { type: 'paragraph', text: 'A UI é construída combinando componentes. Os mais básicos são View para contêineres e Text para qualquer texto.' },
                   { type: 'featureCard', featureItems: [
                    { icon: 'RectangleGroupIcon', title: 'SafeAreaView', text: 'Essencial para garantir que sua UI não se sobreponha à barra de status ou aos entalhes do dispositivo.' },
                    { icon: 'CodeBracketIcon', title: 'StyleSheet.create', text: 'A maneira recomendada de organizar e reutilizar estilos para um desempenho ideal.' },
                    { icon: 'ArrowRightIcon', title: 'FlatList', text: 'Componente de alto desempenho para renderizar listas longas e dinâmicas de dados.' },
                  ]},
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/safe-area-view.png', caption: 'Comparação visual: Sem `SafeAreaView` (esquerda) o conteúdo é obstruído pelos elementos do sistema, enquanto com `SafeAreaView` (direita) se ajusta perfeitamente à área visível.' },
                  
                  { type: 'divider' },

                  { type: 'subtitle', text: 'Parte 5: Roteamento com Expo Router' },
                  { type: 'paragraph', text: 'A navegação em seu aplicativo é definida pela estrutura de arquivos dentro da pasta `app/`.' },
                  { type: 'code', language: 'typescript', code: `
// app/_layout.tsx (Define a navegação principal)
import { Stack } from 'expo-router';
export default () => <Stack />;

// app/index.tsx -> Rota '/'
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
export default () => (
  <View>
    <Text>Home Screen</Text>
    <Link href="/about">Go to About</Link>
  </View>
);

// app/about.tsx -> Rota '/about'
import { Text, View } from 'react-native';
export default () => <Text>About Screen</Text>;
                  `},
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/stack-vs-tabs.png', caption: 'Padrões de navegação: Stack Navigator organiza as telas em uma pilha, enquanto Tabs Navigator oferece uma barra de abas para a navegação principal.' },

                  { type: 'divider' },
                  
                  { type: 'subtitle', text: 'Parte 6: Próximos Passos' },
                  { type: 'list', items: [
                    { text: 'Autenticação e Gerenciamento de Usuários', subItems: []},
                    { text: 'Gerenciamento de Dados e Backend', subItems: []},
                    { text: 'Estilização Avançada e Otimização', subItems: []},
                    { text: 'Implantação na App Store e Google Play', subItems: []},
                  ]}

                ]
            },
            {
                id: 'conf-2',
                title: 'Conf. 2: Configuração do Ambiente',
                content: [
                  { type: 'heading', text: 'Configuração do Ambiente de Desenvolvimento' },
                  
                  { type: 'subtitle', text: 'Instalação do Node.js e Gerenciadores de Pacotes' },
                  { type: 'paragraph', text: 'Node.js é o ambiente de execução para JavaScript e um pré-requisito para o desenvolvimento com React Native. Recomenda-se instalar a versão LTS (Long-Term Support) a partir do seu site oficial.' },
                  { type: 'paragraph', text: 'Uma vez instalado, pode verificar a versão no seu terminal:' },
                  { type: 'code', language: 'bash', code: 'node --version' },
                  { type: 'paragraph', text: 'Juntamente com o Node.js, é instalado o npm (Node Package Manager). O npm e o pnpm são gerenciadores de pacotes usados para instalar dependências no seu projeto.' },
                  { type: 'code', language: 'bash', code: `npm install <package-name>  # Instala um pacote com npm
pnpm add <package-name>      # Instala um pacote com pnpm

npm install -D <package-name> # Instala dependência de desenvolvimento com npm
pnpm add -D <package-name>    # Instala dependência de desenvolvimento com pnpm` },
                
                  { type: 'subtitle', text: 'Configuração do seu Editor de Código: VS Code' },
                  { type: 'paragraph', text: 'O Visual Studio Code (VS Code) é o editor de código mais popular na comunidade de desenvolvimento. O seu vasto ecossistema de extensões torna-o muito poderoso.' },
                  { type: 'list', items: ['**Recomendação:** Instale extensões para React e React Native para obter trechos de código (snippets) úteis, como `rnfce` para criar componentes rapidamente.'] },
                  
                  { type: 'subtitle', text: 'Criação de um Projeto com Expo' },
                  { type: 'paragraph', text: 'Expo está para o React Native assim como o Next.js está para o React. É o framework recomendado pela equipe do React Native para uma melhor experiência de desenvolvimento, pois simplifica enormemente a configuração.' },
                  { type: 'paragraph', text: 'Para inicializar o seu projeto, use o seguinte comando no seu terminal:'},
                  { type: 'code', language: 'bash', code: 'npx create-expo-app@latest meu-super-app' },
                  { type: 'paragraph', text: 'Se quiser instalá-lo no diretório atual, basta adicionar um ponto no final:'},
                  { type: 'code', language: 'bash', code: 'npx create-expo-app@latest .' },

                  { type: 'subtitle', text: 'Funcionalidades do Template Padrão' },
                  { type: 'paragraph', text: 'O template inicial do Expo vem com várias funcionalidades pré-configuradas para acelerar o seu desenvolvimento:' },
                  { type: 'list', items: [
                      '**Duas telas de exemplo:** Localizadas em `app/(tabs)/index.tsx` e `app/(tabs)/explore.tsx`, com uma navegação de abas configurada em `app/(tabs)/_layout.tsx`.',
                      '**Roteamento baseado em arquivos:** A estrutura da pasta `app` define a navegação da sua aplicação.',
                      '**Suporte para modo claro e escuro:** O template adapta-se automaticamente ao tema do sistema.',
                      '**TypeScript por padrão:** Para um código mais robusto e de fácil manutenção.'
                  ]},
                  {
                      type: 'callout',
                      alertType: 'tip',
                      text: 'O template padrão é um excelente ponto de partida, mas às vezes você vai querer começar do zero.'
                  },
                  { type: 'subtitle', text: 'Reiniciar o seu Projeto' },
                  { type: 'paragraph', text: 'Se preferir começar com uma estrutura mínima em vez do template de exemplo, pode remover o código padrão executando um script incluído:'},
                  { type: 'code', language: 'bash', code: 'npm run reset-project' },
                  { type: 'paragraph', text: 'Este comando moverá o conteúdo da pasta `app` para uma nova pasta `app-example` (para que possa consultá-la) e criará uma nova pasta `app` com apenas um arquivo `index.tsx` básico.' },

                  { type: 'subtitle', text: 'Estrutura de Arquivos do Projeto' },
                  { type: 'paragraph', text: 'Ao criar um projeto Expo, é gerada uma estrutura de arquivos padrão. Explore os arquivos e pastas principais para entender o seu propósito:'},
                  {
                    type: 'fileStructure',
                    files: [
                      { id: 'app', name: 'app', description: [
                        "Contém a navegação da aplicação, que é baseada em arquivos. A estrutura de arquivos do diretório `app` determina a navegação da aplicação.",
                        "Por exemplo, `app/index.tsx` é a rota principal, e `app/detalhes.tsx` torna-se a rota `/detalhes`."
                      ]},
                      { id: 'assets', name: 'assets', description: [
                        "Contém imagens, fontes e outros arquivos estáticos. Por exemplo, o ícone da aplicação (`icon.png`) e a tela de início (`splash.png`)."
                      ]},
                      { id: 'components', name: 'components', description: [
                        "Uma pasta para os seus componentes React reutilizáveis que são usados em toda a aplicação, como botões personalizados, cartões ou cabeçalhos."
                      ]},
                      { id: 'constants', name: 'constants', description: [
                        'Um local para armazenar valores constantes usados na aplicação, como paletas de cores, dimensões ou configurações.'
                      ]},
                      { id: 'app.json', name: 'app.json', description: [
                        "Contém as opções de configuração para o projeto. Estas opções alteram o comportamento do seu projeto durante o desenvolvimento, a construção e a publicação da sua aplicação."
                      ]},
                      { id: 'package.json', name: 'package.json', description: [
                        "Contém as dependências do projeto, os scripts (como `npm start`) e os metadados. Sempre que uma nova dependência é adicionada, ela é registada aqui."
                      ]},
                      { id: 'tsconfig.json', name: 'tsconfig.json', description: [
                        "Contém as regras que o TypeScript utilizará para impor a segurança de tipos em todo o projeto, ajudando a prevenir erros."
                      ]},
                    ]
                  },
                  
                  { type: 'subtitle', text: 'Execução da sua Primeira App no Expo Go' },
                  { type: 'paragraph', text: 'O Expo Go é uma aplicação móvel que lhe permite testar e prototipar rapidamente nos seus dispositivos físicos (Android/iOS). Descarregue-a da App Store ou Google Play Store.' },
                  { type: 'paragraph', text: 'Para iniciar o servidor de desenvolvimento, execute:'},
                  { type: 'code', language: 'bash', code: 'npx expo start' },
                  { type: 'paragraph', text: 'Aparecerá um código QR no seu terminal. Digitalize-o com a câmara (iOS) ou a partir da app Expo Go (Android). O seu computador e o seu dispositivo móvel devem estar na mesma rede Wi-Fi!'},
                  { type: 'callout', alertType: 'warning', text: 'Resolução de problemas comuns: Certifique-se de dar permissão de rede local no iOS. Se continuar a falhar, tente usar um túnel com `npx expo start --tunnel`.' },
                  { type: 'paragraph', text: 'Qualquer alteração que faça no código (por exemplo, em `app/index.tsx`) será refletida instantaneamente no seu dispositivo graças ao \'hot reloading\'.'},

                  { type: 'subtitle', text: 'Configuração Opcional de Simuladores' },
                  { type: 'paragraph', text: 'Os simuladores oferecem uma experiência mais integrada no seu computador, permitindo-lhe ter o código e a app lado a lado.' },
                  { type: 'list', items: [
                      '**Emulador de Android:** Requer a instalação do Android Studio, uma aplicação pesada que consome muitos recursos.',
                      '**Simulador de iOS:** Requer a instalação do Xcode num Mac, que também consome bastante potência.',
                      '**Recomendação:** Instale-os apenas se planeia desenvolver mais aplicações no futuro.'
                  ]},
                  { type: 'paragraph', text: 'Com o servidor de desenvolvimento a correr (`npx expo start`), pressione `a` no terminal para abrir o emulador de Android ou `i` para o simulador de iOS.' },
                  
                  { type: 'divider' },
                  { type: 'heading', text: 'Teste os seus conhecimentos!' },
                  { type: 'quiz', questions: [
                      { "question": "Qual é o comando para criar um novo projeto com Expo no diretório atual?", "options": ["npx create-expo-app .", "expo new project .", "npx expo init .", "npm create expo-app ."], "correctAnswer": 0 },
                      { "question": "O que é o Expo Go?", "options": ["Um editor de código para React Native", "Uma aplicação móvel para testar e prototipar projetos Expo", "Uma biblioteca de componentes de UI", "O compilador do React Native"], "correctAnswer": 1 },
                      { "question": "Para que o Expo Go funcione corretamente, o computador e o dispositivo móvel devem...", "options": ["Estar ligados por USB", "Ter o mesmo sistema operativo", "Estar na mesma rede Wi-Fi", "Ter o Bluetooth ativado"], "correctAnswer": 2 },
                      { "question": "No terminal onde `npx expo start` está a ser executado, que tecla pressiona para abrir o simulador de iOS?", "options": ["s", "a", "i", "e"], "correctAnswer": 2 }
                    ]
                  }
                ]
            },
            {
                id: 'conf-3',
                title: 'Conf. 3: Componentes de UI I',
                content: [
                  { type: 'heading', text: 'Palestra 3: Componentes Essenciais da UI I (2h)' },
                  { type: 'list', items: [
                      'O **View** como bloco de construção fundamental da interface do usuário, semelhante a um **div** na web.',
                      '**Text**: Um componente indispensável para exibir qualquer conteúdo textual.',
                      '**Image**: Como integrar e gerenciar imagens (locais e de URLs).',
                      '**TextInput**: Capturando a entrada do usuário com campos de texto.',
                      'Exploração de propriedades comuns como **style**, **placeholder**, **value** e **onChangeText**.',
                  ]},
                ]
            },
            {
                id: 'conf-4',
                title: 'Conf. 4: Componentes de UI II',
                content: [
                  { type: 'heading', text: 'Palestra 4: Componentes Essenciais da UI II (2h)' },
                  { type: 'list', items: [
                      '**TouchableOpacity**: Criação de botões com feedback visual ao toque.',
                      '**ScrollView**: Tornando seu conteúdo rolável para listas longas.',
                      '**SafeAreaView**: Componente crucial para evitar sobreposições com a barra de status, entalhes e a área de gestos em dispositivos modernos.',
                      '**KeyboardAvoidingView**: Ajustando a UI automaticamente para evitar que o teclado virtual oculte as entradas.',
                      'Comparação de componentes e conceitos entre o desenvolvimento web e o React Native.',
                  ]},
                ]
            },
            {
                id: 'conf-5',
                title: 'Conf. 5: Estilização e StyleSheet',
                content: [
                  { type: 'heading', text: 'Palestra 5: Estilização Básica e StyleSheet (2h)' },
                  { type: 'list', items: [
                      'O modelo de caixa no React Native e como ele difere da web.',
                      'Criação e gerenciamento de estilos com **StyleSheet.create()**.',
                      'Dominando o flexbox no React Native (lembrando que a direção padrão é **column**).',
                      'Vantagens de usar StyleSheet em vez de estilos em linha.',
                      'Introdução à criação e gerenciamento de temas para sua aplicação.',
                  ]},
                ]
            },
            {
                id: 'conf-6',
                title: 'Conf. 6: NativeWind e Tailwind',
                content: [
                  { type: 'heading', text: 'Palestra 6: Estilização Avançada com NativeWind e Tailwind CSS (2h)' },
                  { type: 'list', items: [
                      'Instalação e configuração do NativeWind para integrar o Tailwind CSS no React Native.',
                      'Uso de classes do Tailwind CSS para estilos rápidos, consistentes e responsivos.',
                      'Aproveitando a funcionalidade do IntelliSense e personalizando o tema do Tailwind.',
                      'Gerenciamento de um arquivo **globals.css** para classes de utilidade reutilizáveis.',
                      'Prática: Refatoração de estilos de componentes existentes usando NativeWind.',
                  ]},
                ]
            },
            {
                id: 'conf-7',
                title: 'Conf. 7: Gerenciamento de Ativos',
                content: [
                  { type: 'heading', text: 'Palestra 7: Gerenciamento de Ativos (Imagens, Fontes, Ícones) (2h)' },
                  { type: 'list', items: [
                      'Uso eficiente de imagens locais usando **require()**.',
                      'Configuração e aplicação de fontes personalizadas.',
                      'Integração de bibliotecas de ícones como Expo Vector Icons, Ion Icons e Feather Icons.',
                      'Prática: Adicionar imagens, fontes e ícones a um projeto de aplicativo.',
                  ]},
                ]
            },
            {
                id: 'conf-8',
                title: 'Conf. 8: Mini Projeto de UI',
                content: [
                  { type: 'heading', text: 'Palestra 8: Mini Projeto de Interface do Usuário (2h)' },
                  { type: 'list', items: [
                      'Projeto: Construção de uma interface de usuário complexa, como um cartão de filme detalhado ou um perfil de usuário, aplicando todos os conceitos de componentes e estilização aprendidos.',
                      'Foco na estruturação de componentes e na consistência visual.',
                      'Sessão de revisão de código e resolução de dúvidas para solidificar o aprendizado.',
                  ]},
                ]
            },
        ]
    },
    // Módulo 2
    {
        id: 'modulo-2',
        title: 'Módulo 2: Navegação',
        overview: {
            id: 'modulo-2-overview',
            title: 'Módulo 2: Navegação',
            content: [
              { type: 'heading', text: 'Módulo 2: Navegação e Estrutura de Aplicações' },
              { type: 'paragraph', text: 'Duração: 16 horas / 8 Palestras' },
              { type: 'paragraph', text: 'Este módulo foca em como organizar e navegar entre as diferentes telas da sua aplicação, utilizando as ferramentas de roteamento do Expo.' },
            ]
        },
        conferences: [
            {
                id: 'conf-9',
                title: 'Conf. 9: Expo Router',
                content: [
                  { type: 'heading', text: 'Palestra 9: Introdução à Navegação com Expo Router (2h)' },
                  { type: 'list', items: [
                      'Princípios fundamentais da navegação em aplicações móveis.',
                      'Expo Router: Um sistema de roteamento moderno baseado na estrutura de arquivos do seu projeto.',
                      'Stack Navigator: Criando pilhas de telas navegáveis. **_layout.tsx**, **index.tsx**, **screen.tsx** como arquivos especiais.',
                      'Configuração de opções de tela: **headerShown**, **title** e personalização da barra de título.',
                      'Gerenciamento de redirecionamentos e fluxos de navegação.',
                  ]},
                ]
            },
            {
                id: 'conf-10',
                title: 'Conf. 10: Tab Navigator',
                content: [
                  { type: 'heading', text: 'Palestra 10: Tab Navigator e Rotas Baseadas em Arquivos (2h)' },
                  { type: 'list', items: [
                      'Implementação da navegação inferior com Tab Navigator para diferentes seções da aplicação.',
                      'Personalização detalhada de ícones, etiquetas e estilos das abas ativas e inativas.',
                      'O papel do arquivo **_layout.tsx** dentro de um diretório de abas.',
                      'Interação entre a navegação de abas e a pilha de navegação.',
                  ]},
                ]
            },
            {
                id: 'conf-11',
                title: 'Conf. 11: Rotas Aninhadas e Dinâmicas',
                content: [
                  { type: 'heading', text: 'Palestra 11: Rotas Aninhadas e Dinâmicas com Expo Router (2h)' },
                  { type: 'list', items: [
                      'Estratégias para a criação de rotas aninhadas para organizar seções da aplicação.',
                      'Implementação de rotas dinâmicas para exibir detalhes de itens específicos (ex. **/movie/[id].tsx**).',
                      'Extração de parâmetros de rota utilizando o hook **useLocalSearchParams**.',
                      'Prática: Desenvolvimento de rotas dinâmicas para uma tela de detalhes de filmes ou produtos.',
                  ]},
                ]
            },
            {
                id: 'conf-12',
                title: 'Conf. 12: Agrupamento de Rotas',
                content: [
                  { type: 'heading', text: 'Palestra 12: Agrupamento de Rotas e Layouts Específicos (2h)' },
                  { type: 'list', items: [
                      'Uso de pastas com parênteses **()** para agrupar rotas e controlar como elas aparecem na URL.',
                      'Aplicação de layouts condicionais para grupos de rotas específicos.',
                      'Gerenciamento de rotas que não pertencem a um Tab Navigator (ex. uma tela de detalhes que não tem abas inferiores).',
                      'Prática: Aplicar agrupamentos de rotas para diferenciar layouts em uma aplicação de Imóveis ou Entrega de Comida.',
                  ]},
                ]
            },
            {
                id: 'conf-13',
                title: 'Conf. 13: Estado Local e Context API',
                content: [
                  { type: 'heading', text: 'Palestra 13: Gerenciamento de Estado Local e Context API (2h)' },
                  { type: 'list', items: [
                      'Uso avançado de **useState** e **useEffect** para o gerenciamento do estado dentro de componentes funcionais.',
                      'Introdução ao Context API do React para o gerenciamento do estado global na aplicação.',
                      'Criação de um provedor de contexto e um hook personalizado para consumir o contexto.',
                      'Análise das vantagens e desvantagens do Context API em diferentes cenários.',
                  ]},
                ]
            },
            {
                id: 'conf-14',
                title: 'Conf. 14: Hooks Personalizados',
                content: [
                  { type: 'heading', text: 'Palestra 14: Hooks Personalizados e Reutilização de Lógica (2h)' },
                  { type: 'list', items: [
                      'Princípios fundamentais para a criação de hooks personalizados (Custom Hooks).',
                      'Exemplos práticos de hooks personalizados para encapsular lógica comum (ex. **useDebounce** para buscas, **useTheme** para temas).',
                      'Estratégias para melhorar a reutilização do código e a legibilidade da aplicação.',
                      'Prática: Desenvolvimento de um hook personalizado para gerenciar o tema da aplicação (modo claro/escuro).',
                  ]},
                ]
            },
            {
                id: 'conf-15',
                title: 'Conf. 15: Tipagem com TypeScript',
                content: [
                  { type: 'heading', text: 'Palestra 15: Tipagem com TypeScript (2h)' },
                  { type: 'list', items: [
                      'Introdução e configuração do TypeScript em um projeto React Native.',
                      'Benefícios do TypeScript: Segurança de tipos, refatoração mais segura e melhor manutenção do código.',
                      'Declaração de tipos e interfaces para propriedades (props), estados (state) e dados.',
                      'Integração do TypeScript com o Expo Router e componentes do React Native.',
                  ]},
                ]
            },
            {
                id: 'conf-16',
                title: 'Conf. 16: Mini Projeto de Navegação',
                content: [
                  { type: 'heading', text: 'Palestra 16: Mini Projeto de Navegação Completa (2h)' },
                  { type: 'list', items: [
                      'Projeto: Construção de um mini projeto que integre todos os conceitos de navegação e estrutura de aplicações, incluindo Stack, Tabs, rotas dinâmicas e agrupamentos.',
                      'Projeto de uma estrutura de pastas e arquivos lógica e escalável.',
                      'Sessão de revisão de código e resolução de dúvidas para garantir uma compreensão profunda.',
                  ]},
                ]
            },
        ]
    },
    // Módulo 3
    {
        id: 'modulo-3',
        title: 'Módulo 3: Persistência de Dados',
        overview: {
            id: 'modulo-3-overview',
            title: 'Módulo 3: Persistência de Dados',
            content: [
                { type: 'heading', text: 'Módulo 3: Persistência de Dados Local com SQLite e Drizzle ORM' },
                { type: 'paragraph', text: 'Duração: 20 horas / 10 Palestras' },
                { type: 'paragraph', text: 'Neste módulo, você aprenderá a armazenar e gerenciar dados diretamente no dispositivo do usuário, utilizando o Expo SQLite e o Drizzle ORM como uma solução local.' },
            ]
        },
        conferences: [
            {
                id: 'conf-17',
                title: 'Conf. 17: BD Locais',
                content: [
                    { type: 'heading', text: 'Palestra 17: Introdução a Bancos de Dados Locais (2h)' },
                    { type: 'list', items: [
                        'Por que a persistência de dados local é fundamental em aplicações móveis (suporte offline, desempenho)?',
                        'Exploração de opções populares para bancos de dados locais: SQLite, MMKV, WatermelonDB, AsyncStorage.',
                        'Vantagens de utilizar um ORM (Object-Relational Mapper) como o Drizzle para interagir com o banco de dados.',
                        'Instalação do módulo **expo-sqlite** no seu projeto.',
                    ]},
                ]
            },
            {
                id: 'conf-18',
                title: 'Conf. 18: Drizzle ORM e Kit',
                content: [
                    { type: 'heading', text: 'Palestra 18: Configuração do Drizzle ORM e Drizzle Kit (2h)' },
                    { type: 'list', items: [
                        'Instalação das bibliotecas **@drizzle-team/orm** e **drizzle-kit**.',
                        'Configuração do arquivo **drizzle.config.ts** para conectar o Drizzle com o SQLite.',
                        'Criação de scripts npm para o Drizzle Kit (**generate**, **migrate**) para automatizar o processo do banco de dados.',
                        'Considerações para o gerenciamento do banco de dados em ambientes de desenvolvimento e produção.',
                    ]},
                ]
            },
            {
                id: 'conf-19',
                title: 'Conf. 19: Esquemas Drizzle I',
                content: [
                    { type: 'heading', text: 'Palestra 19: Definição de Esquemas com Drizzle ORM I (2h)' },
                    { type: 'list', items: [
                        'Conceitos básicos de esquemas e tabelas em bancos de dados relacionais.',
                        'Definição de tabelas simples utilizando construtores do Drizzle (**table**, **text**, **integer**, **boolean**, **real**).',
                        'Tipos de dados específicos do SQLite e seu mapeamento no Drizzle.',
                        'Definição de chaves primárias (**primaryKey**) e campos autoincrementais (**autoincrement**).',
                        'Prática: Definição do esquema inicial de usuários para uma aplicação de Lista de Tarefas.',
                    ]},
                ]
            },
            {
                id: 'conf-20',
                title: 'Conf. 20: Esquemas Drizzle II',
                content: [
                    { type: 'heading', text: 'Palestra 20: Definição de Esquemas com Drizzle ORM II (2h)' },
                    { type: 'list', items: [
                        'Implementação de colunas com valores padrão (**default**).',
                        'Configuração de colunas únicas (**unique**) e obrigatórias (**notNull**).',
                        'Estabelecimento de relações entre tabelas (ex. um-para-muitos, muitos-para-um) com **relations** do Drizzle.',
                        'Uso de tipos **enum** para limitar valores a opções predefinidas.',
                        'Prática: Definição do esquema para tarefas, incluindo relações com usuários.',
                    ]},
                ]
            },
            {
                id: 'conf-21',
                title: 'Conf. 21: Migrações',
                content: [
                    { type: 'heading', text: 'Palestra 21: Geração e Aplicação de Migrações (2h)' },
                    { type: 'list', items: [
                        'O que são migrações de bancos de dados e sua importância no ciclo de vida do desenvolvimento?',
                        'Uso do **drizzle-kit generate** para criar arquivos de migração a partir das mudanças no esquema.',
                        'Análise do conteúdo dos arquivos de migração gerados.',
                        'Implementação da lógica para aplicar as migrações ao iniciar a aplicação.',
                        'Prática: Gerar e aplicar migrações para os esquemas de usuários e tarefas.',
                    ]},
                ]
            },
            {
                id: 'conf-22',
                title: 'Conf. 22: CRUD (Criar e Ler)',
                content: [
                    { type: 'heading', text: 'Palestra 22: Operações CRUD Básicas (Criar e Ler) (2h)' },
                    { type: 'list', items: [
                        'Estabelecimento da conexão entre o Drizzle ORM e o Expo SQLite na aplicação.',
                        'Implementação da operação de criação de dados (**insert**).',
                        'Realização da operação de leitura de dados (**select**) com filtros básicos (**where**).',
                        'Prática: Criar novos usuários e tarefas, e ler todas as tarefas na aplicação de Lista de Tarefas.',
                    ]},
                ]
            },
            {
                id: 'conf-23',
                title: 'Conf. 23: CRUD (Atualizar e Excluir)',
                content: [
                    { type: 'heading', text: 'Palestra 23: Operações CRUD Básicas (Atualizar e Excluir) (2h)' },
                    { type: 'list', items: [
                        'Implementação da operação de atualização de dados (**update**).',
                        'Realização da operação de exclusão de dados (**delete**).',
                        'Breve introdução ao conceito de transações em bancos de dados.',
                        'Prática: Atualizar o estado de uma tarefa (concluída/incompleta) e excluir tarefas específicas na aplicação de Lista de Tarefas.',
                    ]},
                ]
            },
            {
                id: 'conf-24',
                title: 'Conf. 24: Semeando o BD',
                content: [
                    { type: 'heading', text: 'Palestra 24: Semeando o Banco de Dados Local (2h)' },
                    { type: 'list', items: [
                        'O que é "seeding" de banco de dados e sua utilidade no desenvolvimento?',
                        'Criação de um script para popular o banco de dados local com dados de teste realistas.',
                        'A importância dos dados de teste para o desenvolvimento rápido da interface do usuário e da lógica.',
                        'Prática: Implementação de um script de seeding para a aplicação de Lista de Tarefas ou um protótipo de Rastreador de Despesas.',
                    ]},
                ]
            },
            {
                id: 'conf-25',
                title: 'Conf. 25: Drizzle Studio',
                content: [
                    { type: 'heading', text: 'Palestra 25: Drizzle Studio e Depuração de Dados Locais (2h)' },
                    { type: 'list', items: [
                        'Integração e uso do Drizzle Studio como ferramenta visual para inspecionar e manipular o banco de dados local.',
                        'Benefícios de uma interface gráfica para a depuração e compreensão da estrutura de dados.',
                        'Visualização de tabelas, colunas e conteúdo do banco de dados.',
                        'Prática: Utilizar o Drizzle Studio para verificar os dados da aplicação de Lista de Tarefas e corrigir possíveis erros.',
                    ]},
                ]
            },
            {
                id: 'conf-26',
                title: 'Conf. 26: Mini Projeto App de Lista de Tarefas',
                content: [
                    { type: 'heading', text: 'Palestra 26: Mini Projeto: Aplicação de Lista de Tarefas Completa (Local) (2h)' },
                    { type: 'list', items: [
                        'Projeto: Desenvolvimento de uma aplicação de Lista de Tarefas completa, integrando o Expo SQLite e o Drizzle ORM para todas as funcionalidades CRUD.',
                        'Gerenciamento de estados de tarefas (adicionar, editar, marcar como concluídas, excluir) com persistência local.',
                        'Foco no gerenciamento de dados exclusivamente no dispositivo do usuário.',
                        'Revisão final e polimento da aplicação.',
                    ]},
                ]
            },
        ]
    },
    // Módulo 4
    {
        id: 'modulo-4',
        title: 'Módulo 4: APIs e Otimização',
        overview: {
            id: 'modulo-4-overview',
            title: 'Módulo 4: APIs e Otimização',
            content: [
              { type: 'heading', text: 'Módulo 4: Consumo de APIs Externas e Otimização' },
              { type: 'paragraph', text: 'Duração: 20 horas / 10 Palestras' },
              { type: 'paragraph', text: 'Este módulo ensinará você a integrar dados de serviços web externos em suas aplicações, bem como a otimizar o desempenho para uma experiência de usuário fluida.' },
            ]
        },
        conferences: [
            {
                id: 'conf-27',
                title: 'Conf. 27: Consumo de APIs',
                content: [
                    { type: 'heading', text: 'Palestra 27: Consumo de APIs Externas (2h)' },
                    { type: 'list', items: [
                        'Realização de requisições HTTP utilizando **fetch** ou **axios** para interagir com serviços web.',
                        'Manuseio e transformação de dados no formato JSON.',
                        'Trabalho com APIs REST públicas (ex. TheMovieDB para filmes, TheMealDB para receitas).',
                        'Gerenciamento seguro de chaves de API e outras variáveis de ambiente locais (.env).',
                    ]},
                ]
            },
            {
                id: 'conf-28',
                title: 'Conf. 28: Gerenciamento de Estados da API',
                content: [
                    { type: 'heading', text: 'Palestra 28: Gerenciamento de Estados de Carregamento, Erros e Dados (2h)' },
                    { type: 'list', items: [
                        'Implementação de lógica para gerenciar os estados **loading** (carregando), **error** (erro) e **data** (dados) nas chamadas à API.',
                        'Uso de componentes de UI para indicar o estado de carregamento (ex. **ActivityIndicator**, spinners).',
                        'Projeto e apresentação de mensagens de erro claras e amigáveis para o usuário.',
                        'Estratégias para lidar com valores **null** ou **undefined** nos dados recebidos da API.',
                    ]},
                ]
            },
            {
                id: 'conf-29',
                title: 'Conf. 29: Debouncing',
                content: [
                    { type: 'heading', text: 'Palestra 29: Otimização de Requisições: Debouncing (2h)' },
                    { type: 'list', items: [
                        'Identificação de problemas de desempenho causados por buscas em tempo real e chamadas excessivas à API.',
                        'Conceito de "debouncing" para limitar a frequência de execução de funções.',
                        'Implementação de um hook **useDebounce** (personalizado ou de uma biblioteca externa).',
                        'Prática: Aplicação de debouncing a um campo de busca em uma aplicação para otimizar as chamadas à API.',
                    ]},
                ]
            },
            {
                id: 'conf-30',
                title: 'Conf. 30: FlatList',
                content: [
                    { type: 'heading', text: 'Palestra 30: Listas Grandes e Desempenho: FlatList (2h)' },
                    { type: 'list', items: [
                        'Análise dos problemas de desempenho ao renderizar listas longas com **ScrollView**.',
                        'Introdução ao **FlatList** como componente otimizado para listas extensas.',
                        'Propriedades essenciais do FlatList: **data**, **renderItem**, **keyExtractor** e **ListEmptyComponent**.',
                        'Prática: Migração de uma lista de **ScrollView** para **FlatList** para melhorar o desempenho.',
                    ]},
                ]
            },
            {
                id: 'conf-31',
                title: 'Conf. 31: FlatList Avançado',
                content: [
                    { type: 'heading', text: 'Palestra 31: Recursos Avançados do FlatList (2h)' },
                    { type: 'list', items: [
                        'Implementação de **onEndReached** para o carregamento infinito (infinite scrolling) de dados.',
                        'Uso de **ListHeaderComponent** e **ListFooterComponent** para adicionar conteúdo aos extremos da lista.',
                        'Integração de **RefreshControl** para a funcionalidade "puxar para atualizar".',
                        'Prática: Adicionar carregamento infinito e "puxar para atualizar" a uma lista de itens.',
                    ]},
                ]
            },
            {
                id: 'conf-32',
                title: 'Conf. 32: Mini Projeto de Filmes I',
                content: [
                    { type: 'heading', text: 'Palestra 32: Mini Projeto: App de Filmes/Receitas (Busca) (2h)' },
                    { type: 'list', items: [
                        'Projeto: Criação de uma aplicação para buscar filmes ou receitas, integrando uma API externa (TheMovieDB ou TheMealDB).',
                        'Implementação de uma tela de busca com **TextInput** e debouncing.',
                        'Visualização dos resultados de busca utilizando **FlatList** e gerenciamento dos estados de carregamento e erro.',
                        'Construção da interface do usuário para a tela de busca e visualização de resultados.',
                    ]},
                ]
            },
            {
                id: 'conf-33',
                title: 'Conf. 33: Mini Projeto de Filmes II',
                content: [
                    { type: 'heading', text: 'Palestra 33: App de Filmes/Receitas (Detalhes e Salvamento Local) (2h)' },
                    { type: 'list', items: [
                        'Projeto e desenvolvimento de uma tela de detalhes para exibir informações estendidas de um filme ou receita selecionada.',
                        'Extração de parâmetros de rota para carregar os dados específicos do item.',
                        'Implementação de uma funcionalidade para salvar itens como "favoritos" localmente utilizando SQLite e Drizzle ORM.',
                        'Prática: Construção da UI de detalhes e da lógica para adicionar/remover dos favoritos.',
                    ]},
                ]
            },
            {
                id: 'conf-34',
                title: 'Conf. 34: Imagens e Sistema de Arquivos',
                content: [
                    { type: 'heading', text: 'Palestra 34: Manuseio de Imagens e Sistema de Arquivos Local (2h)' },
                    { type: 'list', items: [
                        'Captura de imagens da galeria ou da câmera do dispositivo com **expo-image-picker**.',
                        'Armazenamento de imagens de forma persistente no sistema de arquivos local do dispositivo utilizando **expo-file-system**.',
                        'Visualização de imagens previamente salvas localmente.',
                        'Prática: Adicionar funcionalidade para selecionar ou tirar fotos em uma aplicação de perfil ou para criar publicações com imagens.',
                    ]},
                ]
            },
            {
                id: 'conf-35',
                title: 'Conf. 35: Busca e Filtragem',
                content: [
                    { type: 'heading', text: 'Palestra 35: Busca e Filtragem Dinâmica (2h)' },
                    { type: 'list', items: [
                        'Implementação de funcionalidades de filtragem por categorias, tipo ou múltiplos critérios.',
                        'Atualização dinâmica da interface do usuário em resposta aos filtros selecionados.',
                        'Combinação da busca por texto e dos filtros para refinar os resultados.',
                        'Prática: Adicionar capacidades avançadas de filtragem à aplicação de filmes/receitas ou Entrega de Comida.',
                    ]},
                ]
            },
            {
                id: 'conf-36',
                title: 'Conf. 36: Workshop de APIs',
                content: [
                    { type: 'heading', text: 'Palestra 36: Workshop: Consumo de API e Otimização (2h)' },
                    { type: 'list', items: [
                        'Projeto: Construção de uma aplicação de Entrega de Comida básica, com um menu armazenado localmente (SQLite) e opções de filtragem. Inclui o consumo de uma API externa simples para dados adicionais, se necessário.',
                        'Revisão de código ao vivo e resolução de dúvidas sobre a integração de APIs e otimização.',
                    ]},
                ]
            },
        ]
    },
    // Módulo 5
    {
        id: 'modulo-5',
        title: 'Módulo 5: Tópicos Avançados',
        overview: {
            id: 'modulo-5-overview',
            title: 'Módulo 5: Tópicos Avançados',
            content: [
              { type: 'heading', text: 'Módulo 5: Aplicações Avançadas e Melhores Práticas' },
              { type: 'paragraph', text: 'Duração: 24 horas / 12 Palestras' },
              { type: 'paragraph', text: 'Este módulo foca na arquitetura de aplicações, técnicas avançadas de UI/UX, refatoração e preparação para a implantação.' },
            ]
        },
        conferences: [
            {
                id: 'conf-37',
                title: 'Conf. 37: Arquitetura',
                content: [
                    { type: 'heading', text: 'Palestra 37: Arquitetura de Aplicações Móveis (2h)' },
                    { type: 'list', items: [
                        'Princípios de projeto de sistemas escaláveis e de fácil manutenção no desenvolvimento móvel.',
                        'Implementação de uma arquitetura baseada em componentes (Component-Driven Architecture).',
                        'Estrutura de pastas e arquivos recomendada: **src**, **components**, **hooks**, **utils**, **lib**, **database**.',
                    ]},
                ]
            },
            {
                id: 'conf-38',
                title: 'Conf. 38: Gerenciamento de Estado Avançado',
                content: [
                    { type: 'heading', text: 'Palestra 38: Gerenciamento de Estado Global Avançado (2h)' },
                    { type: 'list', items: [
                        'Padrões avançados para o gerenciamento do estado global no React Native (Context API, Zustand como alternativa).',
                        'Uso do Context API para gerenciar dados do usuário, configurações da aplicação ou temas.',
                        'Estratégias eficientes para atualizar e consumir o estado global.',
                    ]},
                ]
            },
            {
                id: 'conf-39',
                title: 'Conf. 39: Depuração e Erros',
                content: [
                    { type: 'heading', text: 'Palestra 39: Depuração e Tratamento de Erros (Local) (2h)' },
                    { type: 'list', items: [
                        'Uso de ferramentas de depuração do Expo (Chrome Debugger, Metro Bundler) e do seu IDE.',
                        'Estratégias para o registro de erros (**console.log** avançado, ferramentas de monitoramento de erros se alternativas locais forem usadas).',
                        'Implementação de limites de erro (Error Boundaries) para prevenir falhas críticas na UI.',
                        'Boas práticas para escrever código defensivo e robusto.',
                    ]},
                ]
            },
            {
                id: 'conf-40',
                title: 'Conf. 40: Código Limpo',
                content: [
                    { type: 'heading', text: 'Palestra 40: Refatoração e Código Limpo (2h)' },
                    { type: 'list', items: [
                        'Aplicação de princípios de código limpo como SOLID e DRY em projetos React Native.',
                        'Identificação de "code smells" e técnicas para refatorar componentes e funções complexas.',
                        'Modularização eficaz e criação de componentes altamente reutilizáveis.',
                        'Prática: Refatorar um componente ou módulo complexo dentro de uma das aplicações desenvolvidas.',
                    ]},
                ]
            },
            {
                id: 'conf-41',
                title: 'Conf. 41: Mini Projeto de Imóveis I',
                content: [
                    { type: 'heading', text: 'Palestra 41: Mini Projeto: Aplicação de Imóveis (UI Complexa) (2h)' },
                    { type: 'list', items: [
                        'Projeto: Construção de uma aplicação de Imóveis focada em uma UI rica e complexa, sem autenticação externa ou backend na nuvem.',
                        'Visualização de listagens de propriedades a partir de dados locais (SQLite).',
                        'Projeto de cartões de propriedades, funcionalidades de filtro e uma navegação intuitiva.',
                        'Prática: Implementação da tela inicial e da listagem de propriedades.',
                    ]},
                ]
            },
            {
                id: 'conf-42',
                title: 'Conf. 42: Mini Projeto de Imóveis II',
                content: [
                    { type: 'heading', text: 'Palestra 42: Aplicação de Imóveis (Detalhes e Formulários) (2h)' },
                    { type: 'list', items: [
                        'Desenvolvimento de uma tela de detalhes de propriedade com múltiplas seções (galeria de imagens, descrição, características, avaliações, etc.).',
                        'Criação de formulários para adicionar ou editar propriedades, com validação de entrada de dados, armazenando as alterações localmente.',
                        'Prática: Implementação da tela de detalhes de propriedade e formulários interativos.',
                    ]},
                ]
            },
            {
                id: 'conf-43',
                title: 'Conf. 43: UI Responsiva',
                content: [
                    { type: 'heading', text: 'Palestra 43: Design de UI Responsiva (2h)' },
                    { type: 'list', items: [
                        'Uso da API **Dimensions** e **PixelRatio** para adaptar a UI a diferentes tamanhos e densidades de tela.',
                        'Gerenciamento da orientação da tela (vertical vs. horizontal) и como isso afeta o layout.',
                        'Considerações de acessibilidade e usabilidade no design responsivo.',
                        'Prática: Garantir que a aplicação de Imóveis seja completamente responsiva em diferentes dispositivos e orientações.',
                    ]},
                ]
            },
            {
                id: 'conf-44',
                title: 'Conf. 44: Componentes Reutilizáveis',
                content: [
                    { type: 'heading', text: 'Palestra 44: Componentes Reutilizáveis e Padrões de Design (2h)' },
                    { type: 'list', items: [
                        'Estratégias para construir uma biblioteca de componentes de UI reutilizáveis.',
                        'Introdução a padrões de design como Render Props e Higher-Order Components (se aplicáveis e simples de integrar sem um backend complexo).',
                        'Documentação de componentes para facilitar sua reutilização por outros desenvolvedores.',
                    ]},
                ]
            },
            {
                id: 'conf-45',
                title: 'Conf. 45: UI/UX Avançada',
                content: [
                    { type: 'heading', text: 'Palestra 45: UI/UX Avançada: Modais, Alertas e Animações Básicas (2h)' },
                    { type: 'list', items: [
                        'Implementação de **Modal** para janelas pop-up interativas.',
                        'Uso do componente **Alert** para exibir confirmações, mensagens de aviso ou informações críticas.',
                        'Introdução à **Animated API** do React Native para criar animações simples e fluidas na interface.',
                        'Prática: Adicionar Modais e Alertas interativos com animações básicas às aplicações.',
                    ]},
                ]
            },
            {
                id: 'conf-46',
                title: 'Conf. 46: Mini Projeto de Mídia Social',
                content: [
                    { type: 'heading', text: 'Palestra 46: Mini Projeto: Mídia Social (Feed e Postagens Locais) (2h)' },
                    { type: 'list', items: [
                        'Projeto: Design de um feed de publicações (semelhante ao X/Twitter ou Instagram) onde as postagens são gerenciadas localmente.',
                        'Implementação da criação de publicações com texto e imagens (armazenadas localmente com **expo-file-system**).',
                        'Interações básicas como "Curtidas" e "Comentários" (gerenciadas completamente no SQLite).',
                        'Prática: Construção da UI do feed e da lógica para criar e interagir com publicações.',
                    ]},
                ]
            },
            {
                id: 'conf-47',
                title: 'Conf. 47: Publicação Local',
                content: [
                    { type: 'heading', text: 'Palestra 47: Preparação para a Publicação Local e Desafios (2h)' },
                    { type: 'list', items: [
                        'Geração de builds básicos de Android (.apk) e iOS (.ipa) para testes internos, utilizando as ferramentas do Expo.',
                        'Revisão das considerações finais de desempenho antes da implantação.',
                        'Introdução a exercícios e desafios avançados para continuar o aprendizado.',
                    ]},
                ]
            },
            {
                id: 'conf-48',
                title: 'Conf. 48: Recapitulação',
                content: [
                    { type: 'heading', text: 'Conferência 48: Recapitulação e Rota de Aprendizagem Contínua (2h)' },
                    { type: 'list', items: [
                        'Resumo exaustivo de todos os conceitos, ferramentas e tecnologias abordadas no bootcamp.',
                        'Orientação sobre recursos para a aprendizagem contínua (documentação oficial, comunidades, cursos avançados de React Native).',
                        'Dicas para o desenvolvimento profissional como engenheiro móvel e como continuar crescendo na indústria.',
                    ]},
                ]
            },
        ]
    }
];


export const ptCurriculum = {
    objetivoGeneral,
    modules,
};