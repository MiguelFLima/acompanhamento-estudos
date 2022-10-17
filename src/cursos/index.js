let cursos = [
    {
        id: 1,
        nome: 'HTML5 e CSS3 parte 1: crie uma página da Web',
        data: new Date('2022, 06, 07'),
        link: 'https://cursos.alura.com.br/course/html5-css3-primeiros-passos',
        CursoAlura: true ,
        ERepetido: false,
        foco: 'HTML' || 'CSS',
    },
    {
        id: 2,
        nome: 'HTML5 e CSS3 parte 2: posicionamento, listas e navegação',
        data: new Date('2022, 06, 08'),
        link: 'https://cursos.alura.com.br/course/html5-css3-posicionamento-listas-navegacao',
        CursoAlura: true,
        ERepetido: false,
        foco: 'HTML' || 'CSS',
    },
    {
        id: 3,
        nome: 'HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas',
        data: new Date('2022, 06, 09'),
        link: 'https://cursos.alura.com.br/course/html5-css3-formularios-tabelas',
        CursoAlura: true,
        ERepetido: false,
        foco: 'HTML' || 'CSS',
    },
    {
        id: 4,
        nome: 'HTML5 e CSS3 parte 4: avançando no CSS',
        data: new Date('2022, 06, 10'),
        link: 'https://cursos.alura.com.br/course/html5-css3-avancando-css',
        CursoAlura: true,
        ERepetido: false,
        foco: 'HTML' || 'CSS',
    },
    {
        id: 5,
        nome: 'HTML e CSS: praticando HTML/CSS',
        data: new Date('2022, 06, 13'),
        link: 'https://cursos.alura.com.br/course/html-css-praticando-html-css',
        CursoAlura: true,
        ERepetido: false,
        foco: 'HTML' || 'CSS',
    },
    {
        id: 6,
        nome: 'SEO: otimização de sites',
        data: new Date('2022, 06, 14'),
        link: 'https://cursos.alura.com.br/course/seo-otimizacao-sites',
        CursoAlura: true,
        ERepetido: false,
        foco: 'HTML' || 'CSS',
    },
    {
        id: 8,
        nome: 'Flexbox: posicione elementos na tela',
        data: new Date('2022, 06, 15'),
        link: 'https://cursos.alura.com.br/course/posicione-elementos-com-flexbox',
        CursoAlura: true,
        ERepetido: false,
        foco: 'CSS'
    },
    {
        id: 9,
        nome: 'CSS Grid: simplificando layouts',
        data: new Date('2022, 06, 16'),
        link: 'https://cursos.alura.com.br/course/css-grid-layout',
        CursoAlura: true,
        ERepetido: false,
        foco: 'CSS',
    },
    {
        id: 10,
        nome: 'CSS: dispondo elementos com Flexbox e Grid',
        data: new Date('2022, 06, 17'),
        link: 'https://cursos.alura.com.br/course/css-dispondo-elementos-flexbox-grid',
        CursoAlura: true,
        ERepetido: false,
        foco: 'CSS',
    },
    {
        id: 11,
        nome: 'Layouts Responsivos: trabalhando com layouts mobile',
        data: new Date('2022, 06, 20'),
        link: 'https://cursos.alura.com.br/course/mobile-first-layouts-responsivos',
        CursoAlura: true,
        ERepetido: false,
        foco: 'CSS',
    },
    {
        id: 12,
        nome: 'Layouts Responsivos: trabalhando com layouts mobile',
        data: new Date('2022, 06, 21'),
        link: 'https://cursos.alura.com.br/course/mobile-first-layouts-responsivos',
        CursoAlura: true,
        ERepetido: true,
        foco: 'CSS',
    },
    {
        id: 13,
        nome: 'Arquitetura CSS: descomplicando os problemas',
        data: new Date('2022, 06, 22'),
        link: 'https://cursos.alura.com.br/course/arquitetura-css',
        CursoAlura: true,
        ERepetido: false,
        foco: 'CSS',
    },
    {
        id: 14,
        nome: 'Acessibilidade web parte 1: tornando seu front-end inclusivo',
        data: new Date('2022, 06, 23'),
        link: 'https://cursos.alura.com.br/course/acessibilidade-web-front-end',
        CursoAlura: true,
        ERepetido: false,
        foco: 'HTML',
    },
    {
        id: 15,
        nome: 'HTTP: Entendendo a web por baixo dos panos',
        data: new Date('2022, 06, 24'),
        link: 'https://cursos.alura.com.br/course/http-fundamentos',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla',
    },
    {
        id: 16,
        nome: 'JavaScript: manipulando o DOM',
        data: new Date('2022, 06, 27'),
        link: 'https://cursos.alura.com.br/course/javascript-manipulando-dom',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla',
    },
    {
        id: 17,
        nome: 'JavaScript na Web: validação de Formulários e HTML5',
        data: new Date('2022, 06, 28'),
        link: 'https://cursos.alura.com.br/course/javascript-web-validacao-formularios-html5',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla' || 'HTML',
    },
    {
        id: 18,
        nome: 'JavaScript para Web: Crie páginas dinâmicas',
        data: new Date('2022, 06, 29'),
        link: 'https://cursos.alura.com.br/course/javascript-web-paginas-dinamicas',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla',
    },
    {
        id: 19,
        nome: 'JavaScript: métodos de array',
        data: new Date('2022, 06, 30'),
        link: 'https://cursos.alura.com.br/course/javascript-metodos-array',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla',
    },
    {
        id: 20,
        nome: 'Expressões regulares: capturando textos de forma mágica',
        data: new Date('2022, 07, 01'),
        link: 'https://cursos.alura.com.br/course/expressoes-regulares',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla',
    },
    {
        id: 21,
        nome: 'Expressões regulares: capturando textos de forma mágica',
        data: new Date('2022, 07, 04'),
        link: 'https://cursos.alura.com.br/course/expressoes-regulares',
        CursoAlura: true,
        ERepetido: true,
        foco: 'JS Vanilla',
    },
    {
        id: 22,
        nome: 'JavaScript na Web: armazenando dados no navegador',
        data: new Date('2022, 07, 05'),
        link: 'https://cursos.alura.com.br/course/javascript-web-armazenando-dados-navegador',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla',
    },
    {
        id: 23,
        nome: 'JavaScript na Web: armazenando dados no navegador',
        data: new Date('2022, 07, 06'),
        link: 'https://cursos.alura.com.br/course/javascript-web-armazenando-dados-navegador',
        CursoAlura: true,
        ERepetido: true,
        foco: 'JS Vanilla',
    },
    {
        id: 24,
        nome: 'React: lidando com arquivos estáticos',
        data: new Date('2022, 07, 07'),
        link: 'https://cursos.alura.com.br/course/react-arquivos-estaticos',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS',
    },
    {
        id: 250,
        nome: 'React: lidando com arquivos estáticos',
        data: new Date('2022, 07, 08'),
        link: 'https://cursos.alura.com.br/course/react-arquivos-estaticos',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS',
    },
    {
        id: 25,
        nome: 'React: conhecendo a biblioteca React Router',
        data: new Date('2022, 07, 11'),
        link: 'https://cursos.alura.com.br/course/react-biblioteca-react-router',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS',
    },
    {
        id: 27,
        nome: 'React: conhecendo a biblioteca React Router',
        data: new Date('2022, 07, 12'),
        link: 'https://cursos.alura.com.br/course/react-biblioteca-react-router',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS',
    },
    {
        id: 28,
        nome: 'React: integrando seu projeto React com APIs',
        data: new Date('2022, 07, 13'),
        link: 'https://cursos.alura.com.br/course/react-integrando-projeto-react-apis',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS',
    },
    {
        id: 29,
        nome: 'React: integrando seu projeto React com APIs',
        data: new Date('2022, 07, 14'),
        link: 'https://cursos.alura.com.br/course/react-integrando-projeto-react-apis',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS',
    },
    {
        id: 30,
        nome: 'React: gerenciando estado com Recoil',
        data: new Date('2022, 07, 15'),
        link: 'https://cursos.alura.com.br/course/react-gerenciando-estado-recoil',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS',
    },
    {
        id: 31,
        nome: 'React: gerenciando estado com Recoil',
        data: new Date('2022, 07, 18'),
        link: 'https://cursos.alura.com.br/course/react-gerenciando-estado-recoil',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS',
    },
    {
        id: 32,
        nome: 'React: escrevendo com Typescript',
        data: new Date('2022, 07, 19'),
        link: 'https://cursos.alura.com.br/course/react-modernizando-escrever-typescript',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS' || 'TypeScript',
    },
    {
        id: 33,
        nome: 'React: escrevendo com Typescript',
        data: new Date('2022, 07, 20'),
        link: 'https://cursos.alura.com.br/course/react-modernizando-escrever-typescript',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS' || 'TypeScript',
    },
    {
        id: 34,
        nome: 'React: testando os seus componentes',
        data: new Date('2022, 07, 21'),
        link: 'https://cursos.alura.com.br/course/react-testando-componentes',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS',
    },
    {
        id: 35,
        nome: 'React: testando os seus componentes',
        data: new Date('2022, 07, 22'),
        link: 'https://cursos.alura.com.br/course/react-testando-componentes',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS',
    },
    {
        id: 36,
        nome: 'TypeScript parte 1: evoluindo seu JavaScript',
        data: new Date('2022, 07, 25'),
        link: 'https://cursos.alura.com.br/course/typescript-evoluindo-javascript',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS' || 'TypeScript',
    },
    {
        id: 37,
        nome: 'TypeScript parte 1: evoluindo seu JavaScript',
        data: new Date('2022, 07, 26'),
        link: 'https://cursos.alura.com.br/course/typescript-evoluindo-javascript',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS' || 'TypeScript',
    },
    {
        id: 38,
        nome: 'TypeScript parte 2: avançando na linguagem',
        data: new Date('2022, 07, 27'),
        link: 'https://cursos.alura.com.br/course/typescript-avancando-linguagem',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS' || 'TypeScript',
    },
    {
        id: 39,
        nome: 'TypeScript parte 2: avançando na linguagem',
        data: new Date('2022, 07, 28'),
        link: 'https://cursos.alura.com.br/course/typescript-avancando-linguagem',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS' || 'TypeScript',
    },
    {
        id: 40,
        nome: 'Typescript parte 3: mais técnicas e boas práticas',
        data: new Date('2022, 07, 29'),
        link: 'https://cursos.alura.com.br/course/typescript-tecnicas-boas-praticas',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS' || 'TypeScript',
    },
    {
        id: 41,
        nome: 'Typescript parte 3: mais técnicas e boas práticas',
        data: new Date('2022, 08, 01'),
        link: 'https://cursos.alura.com.br/course/typescript-tecnicas-boas-praticas',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS' || 'TypeScript',
    },
    {
        id: 42,
        nome: 'Next.js: tour pelo Next.js',
        data: new Date('2022, 08, 02'),
        link: 'https://cursos.alura.com.br/course/next-js-tour-next-js',
        CursoAlura: true,
        ERepetido: false,
        foco: 'NextJS',
    },
    {
        id: 43,
        nome: 'Next.js: tour pelo Next.js',
        data: new Date('2022, 08, 03'),
        link: 'https://cursos.alura.com.br/course/next-js-tour-next-js',
        CursoAlura: true,
        ERepetido: true,
        foco: 'NextJS',
    },
    {
        id: 44,
        nome: 'Next.js: explorando o framework',
        data: new Date('2022, 08, 04'),
        link: 'https://cursos.alura.com.br/course/next-js-iniciando-framework',
        CursoAlura: true,
        ERepetido: false,
        foco: 'NextJS',
    },
    {
        id: 45,
        nome: 'Next.js: explorando o framework',
        data: new Date('2022, 08, 05'),
        link: 'https://cursos.alura.com.br/course/next-js-iniciando-framework',
        CursoAlura: true,
        ERepetido: true,
        foco: 'NextJS',
    },
    {
        id: 46,
        nome: 'Next.js: autenticação e gerenciamento de Tokens',
        data: new Date('2022, 08, 08'),
        link: 'https://cursos.alura.com.br/course/nextjs-autenticacao-gerenciamento-tokens',
        CursoAlura: true,
        ERepetido: false,
        foco: 'NextJS',
    },
    {
        id: 47,
        nome: 'Next.js: autenticação e gerenciamento de Tokens',
        data: new Date('2022, 08, 09'),
        link: 'https://cursos.alura.com.br/course/nextjs-autenticacao-gerenciamento-tokens',
        CursoAlura: true,
        ERepetido: true,
        foco: 'NextJS',
    },
    {
        id: 48,
        nome: 'Next.js: trabalhando com um CMS',
        data: new Date('2022, 08, 10'),
        link: 'https://cursos.alura.com.br/course/next-js-trabalhando-cms',
        CursoAlura: true,
        ERepetido: false,
        foco: 'NextJS',
    },
    {
        id: 49,
        nome: 'Next.js: trabalhando com um CMS',
        data: new Date('2022, 08, 11'),
        link: 'https://cursos.alura.com.br/course/next-js-trabalhando-cms',
        CursoAlura: true,
        ERepetido: true,
        foco: 'NextJS',
    },
    {
        id: 50,
        nome: 'Next.js: trabalhando com arquitetura Front-end',
        data: new Date('2022, 08, 12'),
        link: 'https://cursos.alura.com.br/course/nextjs-arquitetura-front-end',
        CursoAlura: true,
        ERepetido: false,
        foco: 'NextJS',
    },
    {
        id: 51,
        nome: 'Next.js: trabalhando com arquitetura Front-end',
        data: new Date('2022, 08, 15'),
        link: 'https://cursos.alura.com.br/course/nextjs-arquitetura-front-end',
        CursoAlura: true,
        ERepetido: true,
        foco: 'NextJS',
    },
    {
        id: 52,
        nome: 'JavaScript: consumindo e tratando dados de uma API',
        data: new Date('2022, 08, 16'),
        link: 'https://cursos.alura.com.br/course/javascript-consumindo-tratando-dados-api',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla',
    },
    {
        id: 53,
        nome: 'JavaScript: consumindo e tratando dados de uma API',
        data: new Date('2022, 08, 17'),
        link: 'https://cursos.alura.com.br/course/javascript-consumindo-tratando-dados-api',
        CursoAlura: true,
        ERepetido: true,
        foco: 'JS Vanilla',
    },
    {
        id: 54,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 18'),
        link: '',
    },
    {
        id: 55,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 19'),
        link: '',
    },
    {
        id: 5444,
        nome: 'JavaScript: validações e reconhecimento de voz',
        data: new Date('2022, 08, 20'),
        link: 'https://cursos.alura.com.br/course/javascript-validacoes-reconhecimento-voz',
        CursoAlura: true,
        ERepetido: false,
        foco: 'JS Vanilla'
    },
    {
        id: 56,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 22'),
        link: '',
    },
    {
        id: 57,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 23'),
        link: '',
    },
    {
        id: 58,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 24'),
        link: '',
    },
    {
        id: 59,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 25'),
        link: '',
    },
    {
        id: 60,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 26'),
        link: '',
    },
    {
        id: 61,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 29'),
        link: '',
    },
    {
        id: 62,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 30'),
        link: '',
    },
    {
        id: 63,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 31'),
        link: '',
    },
    {
        id: 64,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 01'),
        link: '',
    },
    {
        id: 65,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 02'),
        link: '',
    },
    {
        id: 66,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 05'),
        link: '',
    },
    {
        id: 67,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 06'),
        link: '',
    },
    {
        id: 68,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 07'),
        link: '',
    },
    {
        id: 69,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 08'),
        link: '',
    },
    {
        id: 70,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 09'),
        link: '',
    },
    {
        id: 71,
        nome: 'Construindo site de acompanhamento de estudos',
        data: new Date('2022, 09, 12'),
        link: '',
    },
    {
        id: 72,
        nome: 'Construindo site de acompanhamento de estudos',
        data: new Date('2022, 09, 13'),
        link: '',
    },
    {
        id: 73,
        nome: 'Construindo site de acompanhamento de estudos',
        data: new Date('2022, 09, 14'),
        link: '',
    },
    {
        id: 74,
        nome: 'Construindo Portfolio',
        data: new Date('2022, 09, 15'),
        link: '',
    },
    {
        id: 75,
        nome: 'Construindo Portfolio',
        data: new Date('2022, 09, 16'),
        link: '',
    },
    {
        id: 76,
        nome: 'Manutenção Portfólio',
        data: new Date('2022, 09, 19'),
        link: '',
    },
    {
        id: 77,
        nome: 'Manutenção Portfólio',
        data: new Date('2022, 09, 20'),
        link: '',
    },
    {
        id: 78,
        nome: 'Melhorias Acompanhamento',
        data: new Date('2022, 09, 21'),
        link: '',
    },
    {
        id: 79,
        nome: 'Melhorias Acompanhamento',
        data: new Date('2022, 09, 22'),
        link: '',
    },
    {
        id: 80,
        nome: 'NextJS: CI e CD para Front-end com o Github Actions',
        data: new Date('2022, 09, 23'),
        link: 'https://cursos.alura.com.br/course/nextjs-ci-cd-front-end-github-actions',
        CursoAlura: true,
        ERepetido: false,
        foco: 'NextJS',
    },
    {
        id: 81,
        nome: 'Alura Challange 5',
        data: new Date('2022, 09, 26'),
        link: 'https://www.alura.com.br/challenges/front-end-5?host=https://cursos.alura.com.br',
        CursoAlura: false,
        ERepetido: false,
    },
    {
        id: 82,
        nome: 'Alura Challange 5',
        data: new Date('2022, 09, 27'),
        link: 'https://www.alura.com.br/challenges/front-end-5?host=https://cursos.alura.com.br',
        CursoAlura: false,
        ERepetido: false,
    },
    {
        id: 83,
        nome: 'CSS: Flexbox e layouts responsivos',
        data: new Date('2022, 09, 28'),
        link: 'https://cursos.alura.com.br/course/css-flexbox-layouts-responsivos',
        CursoAlura: true,
        ERepetido: false,
        foco: 'CSS',
    },
    {
        id: 84,
        nome: 'CSS: construindo layouts com Grid',
        data: new Date('2022, 09, 29'),
        link: 'https://cursos.alura.com.br/course/css-construindo-layouts-grid',
        CursoAlura: true,
        ERepetido: false,
        foco: 'CSS',
    },
    {
        id: 85,
        nome: 'React: desenvolvendo com JavaScript',
        data: new Date('2022, 09, 30'),
        link: 'https://cursos.alura.com.br/course/react-desenvolvendo-javascript',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS',
    },
    {
        id: 86,
        nome: 'React: desenvolvendo com JavaScript',
        data: new Date('2022, 10, 03'),
        link: 'https://cursos.alura.com.br/course/react-desenvolvendo-javascript',
        CursoAlura: true,
        ERepetido: true,
        foco: 'ReactJS',
    },
    {
        id: 87,
        nome: 'Alura Challange 5',
        data: new Date('2022, 10, 04'),
        link: 'https://www.alura.com.br/challenges/front-end-5?host=https://cursos.alura.com.br',
        CursoAlura: false,
        ERepetido: false,
    },
    {
        id: 88,
        nome: 'React: gerenciamento de estados globais com Redux',
        data: new Date('2022, 10, 05'),
        link: 'https://cursos.alura.com.br/course/react-gerenciamento-estados-globais-redux',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS',
    },
    {
        id: 89,
        nome: 'Imersão React/Next 4',
        data: new Date('2022, 10, 06'),
        link: 'https://cursos.alura.com.br/imersoes/aulas/aula-1-components-com-react-styled-components-e-nextjs-c53',
        CursoAlura: false,
        ERepetido: false,
    },
    {
        id: 90,
        nome: 'Imersão React/Next 4',
        data: new Date('2022, 10, 07'),
        link: 'https://cursos.alura.com.br/imersoes/aulas/aula-2-components-com-react-styled-components-e-nextjs-c53',
        CursoAlura: false,
        ERepetido: false,
    },
    {
        id: 91,
        nome: 'Imersão React/Next 4',
        data: new Date('2022, 10, 10'),
        link: 'https://cursos.alura.com.br/imersoes/aulas/aula-3-components-com-react-styled-components-e-nextjs-c53',
        CursoAlura: false,
        ERepetido: false,
    },
    {
        id: 92,
        nome: 'React (Autenticando Usuários)',
        data: new Date('2022, 10, 11'),
        link: 'https://cursos.alura.com.br/course/react-autenticando-usuarios',
        CursoAlura: true,
        ERepetido: false,
        foco: 'ReactJS',
    },
    {
        id: 93,
        nome: 'Amazon Clone',
        data: new Date('2022, 10, 13'),
        link: 'https://www.youtube.com/watch?v=DF68MNDxVwU&t=8781s',
        CursoAlura: false,
        ERepetido: false,
        foco: 'NextJS',
    },
    {
        id: 94,
        nome: 'Amazon Clone',
        data: new Date('2022, 10, 14'),
        link: 'https://www.youtube.com/watch?v=DF68MNDxVwU&t=8781s',
        CursoAlura: false,
        ERepetido: false,
        foco: 'NextJS',
    },
];

export default cursos;

