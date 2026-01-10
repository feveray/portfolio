import floresEliImg from '../components/img/flores-eli668.png';
import arkanaBikesImg from '../components/img/arkana668.png';
import medsImg from '../components/img/meds668.png';
import calculadoraJS from '../components/img/calculadoraJS.png';
import geradorQRcode from '../components/img/geradorQRcode.png';
import portDigital from '../components/img/pdigital.png';

export const projects = [
  {
    title: 'Flores Eli',
    category: 'UX/UI',
    description: 'Loja online de flores com foco em experiência do usuário e conversão.',
    image: floresEliImg,
    prototypeLink: 'https://www.figma.com/proto/tnLWh0glS6AJEkbPNy07CC/-atualizado--prototipo-projeto-design-ux--Copy-?node-id=243-320&starting-point-node-id=243%3A320', // <-- coloque a URL do protótipo aqui
    prototypeText: 'Protótipo',      
    caseStudy: [
      'Usuários que buscam fazer pedidos online de forma descomplicada e que atenda suas necessidades com os produtos.',
      'um aplicativo para comprar os produtos da floricultura de forma simples, sem precisar sair do local e trazer a experiência de clientes que frequentam a loja.',
      'Uma interface intuitiva para os usuários.',
      '🚧',
    ],
  },
  {
    title: 'ARKANA Bikes',
    category: 'UX/UI',
    description: 'Loja responsiva focada em orientar usuários na escolha da bicicleta ideal.',
    image: arkanaBikesImg,
    prototypeLink: 'https://xd.adobe.com/view/c5491320-c210-473b-73d7-2e13fd9332de-b378/?fullscreen', // <-- coloque a URL do protótipo aqui
    prototypeText: 'Protótipo',    
    caseStudy: [
      'O objetivo do projeto foi criar um site responsivo onde fosse possível fornecer todos os itens necessários e orientar os usuários para adquirir um produto que atenda suas necessidades.',
      'Criar um design intuitivo e um processo de checkout rápido',
      '🚧',      
    ],
  },
  {
    title: 'Meds',
    category: 'UX/UI',
    description: 'Aplicativo para controle de medicamentos e lembretes de saúde.',
    image: medsImg,
    prototypeLink: 'https://www.figma.com/proto/1ls2I2DdXbRJxpA6VHF9tf/medicamentos_projeto3?page-id=0%3A1&node-id=34-518&viewport=158%2C-936%2C0.5&scaling=scale-down&starting-point-node-id=34%3A518&show-proto-sidebar=1', // <-- coloque a URL do protótipo aqui
    prototypeText: 'Protótipo',
    caseStudy: [
      'Objetivo: melhorar adesão ao tratamento de pacientes.',
      'Pesquisa: entrevistas com usuários e testes de usabilidade.',
      'Solução: lembretes, histórico e notificações integradas.',
      'Resultados: feedback positivo em testes piloto.',
      '🚧',
    ],
  },
  {
    title: 'Calculadora Web',
    category: 'Front-end',
    description: 'Calculadora desenvolvida com HTML, CSS e JavaScript',
    image: calculadoraJS,
    caseStudy: [],
  },
  {
    title: 'Gerador de QR Code',
    category: 'Front-end',
    description: 'Gerador de QR Code desenvolvido com HTML, CSS e JavaScript',
    image: geradorQRcode,
    caseStudy: [
        'Ferramenta web para geração de QR Codes a partir de texto ou links, desenvolvida com HTML, CSS e JavaScript, priorizando usabilidade e feedback visual.',
    ],
  },
  {
    title: 'Portfólio Digital',
    category: 'UX/UI + Front-end',
    description: 'Estudo de caso do processo de criação do portfólio digital.',
    image: portDigital,
    caseStudy: [
        'Estudo de caso deste portfólio digital, abordando decisões de UX/UI, organização de conteúdo, design responsivo e implementação front-end.',
        '🚧',
    ],
  },
];
