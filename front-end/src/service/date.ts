interface Iskills {
  id: number;
  name: string;
  time: string;
}

interface Icertificates {
  id: number;
  title: string;
  issuingOrganization: string;
  emission: string;
  description: string;
  link: string;
}

const skills: Iskills[] = [
  {
    id: 1,
    name: 'JavaScript',
    time: 'July 21,2022',
  },
  {
    id: 2,
    name: 'TypeScript',
    time: 'Marth 9,2023',
  },
  {
    id: 3,
    name: 'React',
    time: 'September 20,2022',
  },
  {
    id: 4,
    name: 'Redux',
    time: 'Octuber 24,2022',
  },
  {
    id: 5,
    name: 'NodeJS',
    time: 'January 30,2023',
  },
  {
    id: 6,
    name: 'Express',
    time: 'January 30,2023',
  },
  {
    id: 7,
    name: 'MySQL',
    time: 'February 8,2023',
  },
  {
    id: 8,
    name: 'Sequelize',
    time: 'February 28,2023',
  },
  {
    id: 9,
    name: 'MongoDB',
    time: 'April 11,2023',
  },
  {
    id: 10,
    name: 'Jest',
    time: 'September 5,2022',
  },
  {
    id: 11,
    name: 'Docker',
    time: 'January 12,2023',
  },
  {
    id: 12,
    name: 'TailwindCss',
    time: 'September 28,2023',
  },
];

const certificates: Icertificates[] = [
  {
    id: 1,
    title: 'Fundamentos do Desenvolvimento Web',
    issuingOrganization: 'Trybe',
    emission: 'Setembro de 2022',
    description: `A pessoa que recebeu esse certificado completou o 
      primeiro módulo da Trybe, que aborda conteúdos relacionados a 
      Fundamentos do Desenvolvimento Web, aplicando de forma prática 
      conteúdos como: Unix & Bash, Git, JS Básico & DOM, HTML, CSS, 
      JS ES6, Higher Order Functions e Testes Unitários, assim como 
      metodologias ágeis e habilidades comportamentais.`,
    link: 'https://www.credential.net/181a95b3-b8dc-465f-ac06-35f2bd61bfe1#gs.ll3ewv',
  },
  {
    id: 2,
    title: 'Front-End',
    issuingOrganization: 'Trybe',
    emission: 'Janeiro de 2023',
    description: `A pessoa que recebeu esse certificado completou o 
      segundo módulo da Trybe, que aborda conteúdos relacionados a 
      desenvolvimento Front-end, React, incluindo Componentes, Estado 
      e Eventos, Componentes Controlados, Ciclo de Vida, Router, Testes 
      com RTL, Redux com React, Context API, React Hooks, metodologias 
      ágeis e habilidades comportamentais.`,
    link: `https://www.credential.net/a0fb8025-d814-465b-bf77-46a669c4d037
    ?record_view=true#gs.25hv6h`,
  },
  {
    id: 3,
    title: 'Back-End',
    issuingOrganization: 'Trybe',
    emission: 'Maio de 2023',
    description: `A pessoa que recebeu esse certificado concluiu com sucesso
      o terceiro módulo da formação em Desenvolvimento Web da Trybe. Durante 
      este período, apronfudou-se e aplicou de forma prática conteúdos como: 
      Docker, banco de dados SQL e NoSQL, Node.js e Express, Mocha, Chai e Sinon, 
      construção de APIs em camadas, REST, JWT, ORM/ODM, Deploy, TypeScript, POO, 
      SOLID, conceitos de CI/CD com Github Actions.`,
    link: 'https://www.credential.net/8d0c40b5-5be3-4fb9-9144-a4b3a33c65ca#gs.25hwx1',
  },
  {
    id: 4,
    title: 'Ciência da Computação',
    issuingOrganization: 'Trybe',
    emission: 'junho de 2023',
    description: `A pessoa que recebeu esse certificado completou o quarto módulo 
      da Trybe, que aborda conteúdos relacionados a Ciência da Computação, incluindo 
      Python e OOP, Algoritmos e Complexidade, Estrutura de Dados e Resolução de 
      Problemas, metodologias ágeis e habilidades comportamentais.`,
    link: 'https://www.credential.net/ecbba56d-bbaa-4b7a-a510-3b40593f3e30#gs.25hwkb',
  },
  {
    id: 5,
    title: 'Eletiva em Python',
    issuingOrganization: 'Trybe',
    emission: 'Setembro de 2023',
    description: `Concluiu com sucesso o quinto módulo da formação em Desenvolvimento 
      Full-Stack da Trybe. Durante este período, em uma carga horária de 170 horas/aula, 
      aprofundou-se e aplicou de forma prática conteúdos como: Testes Unitários 
      com Pytest, Debugging no VS Code, POO com subtipagem estrutural e nominal, 
      Raspagem de Dados com BeautifulSoup e Selenium, APIs REST, Flask, Django, 
      Django REST Framework, MongoDB, SSR, Docker e Deployment. Além disso, 
      concluiu 100 horas/aula de conteúdos revisionais de Carreira, incluindo 
      revisões de Front-end e Back-end e um desafio full stack.`,
    link: 'https://www.credential.net/8e68c0a4-69b3-487e-ad3a-18b358ade26e#gs.25hwmw',
  },
  {
    id: 6,
    title: 'Excel Básico e Avançado',
    issuingOrganization: 'Instituto Brasil Qualificar',
    emission: 'Julho de 2021',
    description: `Introdução ao Excel: Requisitos do Sistema. Acesso ao Software, 
      Interface e Saindo do Excel. Office Online. Criando e Salvando uma Planilha. 
      Conceito de Planilha Eletrônica e Pasta de Trabalho. Fontes. Alinhamento. Linhas 
      e colunas. Formato das Cédulas e Tipos de Dados. Operadores Matemáticos e Cálculos 
      Básicos. Inserção de Imagens. Trabalhando com Formas e Ícones. Formatos de 
      arquivos - Salvar como e Impressão. Movimentação de Cursor pelo Teclado. Fórmulas 
      Básicas. Classificação. Conectando planilhas. Filtro. Formatação Condicional. 
      Fórmulas Avançadas: Procv, SE.`,
    link: `https://estudandoead.com/ibq/loja_virtual/
    verificar_certificado.php?codigoc=CERT63a20c182ed9e`,
  },
];

export { certificates };
export default skills;
