let cursos = [
    {
        id: 1,
        nome: 'HTML5 e CSS3 parte 1: crie uma página da Web',
        data: new Date('2022, 06, 07'),
    },
    {
        id: 2,
        nome: 'HTML5 e CSS3 parte 2: posicionamento, listas e navegação',
        data: new Date('2022, 06, 08'),
    },
    {
        id: 3,
        nome: 'HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas',
        data: new Date('2022, 06, 09'),
    },
    {
        id: 4,
        nome: 'HTML5 e CSS3 parte 4: avançando no CSS',
        data: new Date('2022, 06, 10'),
    },
    {
        id: 5,
        nome: 'HTML e CSS: praticando HTML/CSS',
        data: new Date('2022, 06, 13'),
    },
    {
        id: 6,
        nome: 'SEO: otimização de sites',
        data: new Date('2022, 06, 14'),
    },
    {
        id: 8,
        nome: 'Flexbox: posicione elementos na tela',
        data: new Date('2022, 06, 15'),
    },
    {
        id: 9,
        nome: 'CSS Grid: simplificando layouts',
        data: new Date('2022, 06, 16'),
    },
    {
        id: 10,
        nome: 'CSS: dispondo elementos com Flexbox e Grid',
        data: new Date('2022, 06, 17'),
    },
    {
        id: 11,
        nome: 'Layouts Responsivos: trabalhando com layouts mobile',
        data: new Date('2022, 06, 20'),
    },
    {
        id: 12,
        nome: 'Layouts Responsivos: trabalhando com layouts mobile',
        data: new Date('2022, 06, 21'),
    },
    {
        id: 13,
        nome: 'Arquitetura CSS: descomplicando os problemas',
        data: new Date('2022, 06, 22'),
    },
    {
        id: 14,
        nome: 'Acessibilidade web parte 1: tornando seu front-end inclusivo',
        data: new Date('2022, 06, 23'),
    },
    {
        id: 15,
        nome: 'HTTP: Entendendo a web por baixo dos panos',
        data: new Date('2022, 06, 24'),
    },
    {
        id: 16,
        nome: 'JavaScript: manipulando o DOM',
        data: new Date('2022, 06, 27'),
    },
    {
        id: 17,
        nome: 'JavaScript na Web: validação de Formulários e HTML5',
        data: new Date('2022, 06, 28'),
    },
    {
        id: 18,
        nome: 'JavaScript para Web: Crie páginas dinâmicas',
        data: new Date('2022, 06, 29'),
    },
    {
        id: 19,
        nome: 'JavaScript: métodos de array',
        data: new Date('2022, 06, 30'),
    },
    {
        id: 20,
        nome: 'Expressões regulares: capturando textos de forma mágica',
        data: new Date('2022, 07, 01'),
    },
    {
        id: 21,
        nome: 'Expressões regulares: capturando textos de forma mágica',
        data: new Date('2022, 07, 04'),
    },
    {
        id: 22,
        nome: 'JavaScript na Web: armazenando dados no navegador',
        data: new Date('2022, 07, 05'),
    },
    {
        id: 23,
        nome: 'JavaScript na Web: armazenando dados no navegador',
        data: new Date('2022, 07, 06'),
    },
    {
        id: 24,
        nome: 'React: lidando com arquivos estáticos',
        data: new Date('2022, 07, 07'),
    },
    {
        id: 25,
        nome: 'React: lidando com arquivos estáticos',
        data: new Date('2022, 07, 08'),
    },
    {
        id: 25,
        nome: 'React: conhecendo a biblioteca React Router',
        data: new Date('2022, 07, 11'),
    },
    {
        id: 27,
        nome: 'React: conhecendo a biblioteca React Router',
        data: new Date('2022, 07, 12'),
    },
    {
        id: 28,
        nome: 'React: integrando seu projeto React com APIs',
        data: new Date('2022, 07, 13'),
    },
    {
        id: 29,
        nome: 'React: integrando seu projeto React com APIs',
        data: new Date('2022, 07, 14'),
    },
    {
        id: 30,
        nome: 'React: gerenciando estado com Recoil',
        data: new Date('2022, 07, 15'),
    },
    {
        id: 31,
        nome: 'React: gerenciando estado com Recoil',
        data: new Date('2022, 07, 18'),
    },
    {
        id: 32,
        nome: 'React: escrevendo com Typescript',
        data: new Date('2022, 07, 19'),
    },
    {
        id: 33,
        nome: 'React: escrevendo com Typescript',
        data: new Date('2022, 07, 20'),
    },
    {
        id: 34,
        nome: 'React: testando os seus componentes',
        data: new Date('2022, 07, 21'),
    },
    {
        id: 35,
        nome: 'React: testando os seus componentes',
        data: new Date('2022, 07, 22'),
    },
    {
        id: 36,
        nome: 'TypeScript parte 1: evoluindo seu JavaScript',
        data: new Date('2022, 07, 25'),
    },
    {
        id: 37,
        nome: 'TypeScript parte 1: evoluindo seu JavaScript',
        data: new Date('2022, 07, 26'),
    },
    {
        id: 38,
        nome: 'TypeScript parte 2: avançando na linguagem',
        data: new Date('2022, 07, 27'),
    },
    {
        id: 39,
        nome: 'TypeScript parte 2: avançando na linguagem',
        data: new Date('2022, 07, 28'),
    },
    {
        id: 40,
        nome: 'Typescript parte 3: mais técnicas e boas práticas',
        data: new Date('2022, 07, 29'),
    },
    {
        id: 41,
        nome: 'Typescript parte 3: mais técnicas e boas práticas',
        data: new Date('2022, 08, 01'),
    },
    {
        id: 42,
        nome: 'Next.js: tour pelo Next.js',
        data: new Date('2022, 08, 02'),
    },
    {
        id: 43,
        nome: 'Next.js: tour pelo Next.js',
        data: new Date('2022, 08, 03'),
    },
    {
        id: 44,
        nome: 'Next.js: explorando o framework',
        data: new Date('2022, 08, 04'),
    },
    {
        id: 45,
        nome: 'Next.js: explorando o framework',
        data: new Date('2022, 08, 05'),
    },
    {
        id: 46,
        nome: 'Next.js: autenticação e gerenciamento de Tokens',
        data: new Date('2022, 08, 08'),
    },
    {
        id: 47,
        nome: 'Next.js: autenticação e gerenciamento de Tokens',
        data: new Date('2022, 08, 09'),
    },
    {
        id: 48,
        nome: 'Next.js: trabalhando com um CMS',
        data: new Date('2022, 08, 10'),
    },
    {
        id: 49,
        nome: 'Next.js: trabalhando com um CMS',
        data: new Date('2022, 08, 11'),
    },
    {
        id: 50,
        nome: 'Next.js: trabalhando com arquitetura Front-end',
        data: new Date('2022, 08, 12'),
    },
    {
        id: 51,
        nome: 'Next.js: trabalhando com arquitetura Front-end',
        data: new Date('2022, 08, 15'),
    },
    {
        id: 52,
        nome: 'JavaScript: consumindo e tratando dados de uma API',
        data: new Date('2022, 08, 16'),
    },
    {
        id: 53,
        nome: 'JavaScript: consumindo e tratando dados de uma API',
        data: new Date('2022, 08, 17'),
    },
    {
        id: 54,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 18'),
    },
    {
        id: 55,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 19'),
    },
    {
        id: 56,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 22'),
    },
    {
        id: 57,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 23'),
    },
    {
        id: 58,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 24'),
    },
    {
        id: 59,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 25'),
    },
    {
        id: 60,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 26'),
    },
    {
        id: 61,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 29'),
    },
    {
        id: 62,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 30'),
    },
    {
        id: 63,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 08, 31'),
    },
    {
        id: 64,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 01'),
    },
    {
        id: 65,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 02'),
    },
    {
        id: 66,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 05'),
    },
    {
        id: 67,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 06'),
    },
    {
        id: 68,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 07'),
    },
    {
        id: 69,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 08'),
    },
    {
        id: 70,
        nome: 'Estudos pelo youtube e outras plataformas',
        data: new Date('2022, 09, 09'),
    },
    {
        id: 71,
        nome: 'Construindo site de acompanhamento de estudos',
        data: new Date('2022, 09, 12'),
    },
    {
        id: 72,
        nome: 'Construindo site de acompanhamento de estudos',
        data: new Date('2022, 09, 13'),
    },
    {
        id: 73,
        nome: 'Construindo site de acompanhamento de estudos',
        data: new Date('2022, 09, 14'),
    },
];

export default cursos;

console.log(cursos.length)
