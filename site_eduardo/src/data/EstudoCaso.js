import floresEliImg from '../components/img/flores-eli668.png';
import arkanaBikesImg from '../components/img/arkana668.png';
import medsImg from '../components/img/meds668.png';
import calculadoraJS from '../components/img/calculadoraJS.png';
import geradorQRcode from '../components/img/geradorQRcode.png';
import portDigital from '../components/img/pdigital.png';
import rascEli  from '../components/img/rascunho-eli.jpg';
import wPapel from '../components/img/wireframe-papel.jpg';
import baixaFidel from '../components/img/prototipo-baixa.png';
import telasAfidel from '../components/img/telas-altafid.png';
import modelo1 from '../components/img/modelo1.png';
import modelo2 from '../components/img/modelo2.png';
import altaFidel from '../components/img/prototipo-alt.png';
import blastedTela from '../components/img/tela-blasted.png';

export const projects = [
  {
    title: 'Flores Eli',
    category: 'UX/UI',
    description: 'Loja online de flores com foco em experiência do usuário e conversão.',
    image: floresEliImg,
    prototypeLink: 'https://www.figma.com/proto/tnLWh0glS6AJEkbPNy07CC/-atualizado--prototipo-projeto-design-ux--Copy-?node-id=243-320&starting-point-node-id=243%3A320', // <-- coloque a URL do protótipo aqui
    prototypeText: 'Protótipo',      
    caseStudy: [
      { type: 'subtitle', content: 'Visão geral' },
      { type: 'text', content: 'Flores Eli é uma floricultura fictícia criada para este projeto, que atende tanto clientes em busca de presentes quanto pessoas interessadas em jardinagem, desde iniciantes até usuários mais experientes.' },
      { type: 'text', content: 'O projeto foi desenvolvido entre agosto de 2022 e fevereiro de 2023, com foco em resolver a dificuldade de usuários que não conseguem ir até a loja física ou que preferem realizar pedidos online de forma simples e prática.' },
      { type: 'text', content: 'A proposta foi criar um aplicativo de compras que permitisse adquirir os produtos da floricultura à distância, mantendo a experiência de orientação e atendimento oferecida na loja física.' },      
      { type: 'text', content: 'Minhas responsabilidades incluíram a análise do perfil dos usuários, criação de wireframes em papel e digitais, prototipação de baixa e alta fidelidade, realização de estudos de usabilidade, consideração de princípios de acessibilidade e iteração contínua dos designs com base nos aprendizados ao longo do processo.' },   
      { type: 'image', src: rascEli, alt: 'Rascunho no papel das telas' },
      { type: 'subtitle', content: 'Entendendo o usuário' },
      { type: 'paragraph', content: 'Entrevistas e testes de usabilidade com um protótipo de baixa fidelidade ajudaram a entender como os usuários se comportam e o que realmente precisam. A pesquisa mostrou interesse por produtos personalizáveis e revelou problemas de acessibilidade, como textos pouco legíveis e dificuldades no fluxo de navegação. A partir desses insights, foi criada a persona Eros Gossi, cujo mapeamento de jornada evidenciou a necessidade de um aplicativo para ampliar as vendas e oferecer uma experiência mais clara e acessível.' },
      { type: 'subtitle', content: 'Iniciando o design' },
      { type: 'paragraph', content: 'Através dos esboços foi possível adequar os elementos para os wireframes digitais adequados com o cliente e usuários. Na imagem, segue o primeiro fluxo do usuário priorizando o processo de pedido rápido e seus elementos.' },
      { type: 'image', src: wPapel, alt: 'wireframe digital' },      
      { type: 'paragraph', content: 'Com base nos wireframes digitais, desenvolvi um protótipo de baixa fidelidade com foco em simplificar o fluxo principal de navegação, permitindo que o usuário encontre o produto desejado e finalize o pedido de forma clara e objetiva.' },
        { type: 'image', src: baixaFidel, alt: 'protótipo de baixa fidelidade', caption: 'Para visualizar o Protótipo de baixa fidelidade ', link: 'https://www.figma.com/proto/tnLWh0glS6AJEkbPNy07CC/-atualizado--prototipo-projeto-design-ux--Copy-?node-id=336-3401&scaling=min-zoom&page-id=336%3A425&starting-point-node-id=336%3A3401' },
      { type: 'paragraph', content: 'Foram realizadas **duas rodadas de estudos de usabilidade** ao longo do projeto. A primeira rodada, com foco em wireframes, ajudou a identificar ajustes estruturais e orientar a evolução do design. Já a segunda rodada foi realizada com um **protótipo de alta fidelidade**, revelando pontos que precisavam ser refinados antes da versão final.' },
      { type: 'image', src: telasAfidel, alt: 'telas de alta fidelidade' },                       
      { type: 'text', content: '**Primeira rodada:**' },
      { type: 'list', items: [
        'Dificuldade causada pela ausência de alguns elementos importantes na interface',
        'Necessidade de uma opção para favoritar produtos',
        'Interesse em cadastrar múltiplos endereços em um mesmo perfil',
      ]},
      { type: 'text', content: '**Segunda rodada:**' },
      { type: 'list', items: [
        'Dificuldade na visualização de alguns elementos e na leitura dos textos',
        'Incômodo com a posição da função de busca na parte inferior da tela',
        'Confusão em relação ao uso do elemento de chatbot',
      ]},
      { type: 'subtitle', content: 'Aperfeiçoando o design' }, 
      { type: 'paragraph', content: 'A partir dos estudos de usabilidade, o design evoluiu para uma nova identidade visual, com elementos mais claros e interações aprimoradas, tornando a navegação mais intuitiva.' },
      { type: 'image', src: modelo1, alt: 'xxxxxxx', className: 'my-0' },
      { type: 'paragraph', content: 'O segundo estudo de usabilidade apontou problemas de legibilidade, solucionados com o aumento da fonte. A função de busca foi aprimorada ao abrir uma tela dedicada na parte superior, mantendo o acesso na área inferior. Também foi criada uma tela de favoritos com rolagem.', className: 'mb-2 md:mb-4' },
      { type: 'image', src: modelo2, alt: 'xxxxxx', className: 'my-0' }, 
      { type: 'paragraph', content: 'No protótipo de alta fidelidade, os fluxos de navegação foram refinados para tornar o processo de compra mais claro e intuitivo. Com base nos feedbacks dos usuários, realizei ajustes na tipografia, removi o chatbot, adicionei uma tela de produtos favoritos e reposicionei a busca para a parte superior ao ser utilizada.', className: 'mt-10 md:mb-4'  },
      { type: 'image', src: altaFidel, alt: 'protótipo de alta fidelidade', caption: 'Para visualizar o Protótipo de alta fidelidade ', link: 'https://www.figma.com/proto/tnLWh0glS6AJEkbPNy07CC/-atualizado--prototipo-projeto-design-ux--Copy-?node-id=243-320&starting-point-node-id=243%3A320' },                               
      { type: 'text', content: '🚧' },
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
    category: 'JavaScript',
    description: 'Calculadora desenvolvida com HTML, CSS e JavaScript',
    image: calculadoraJS,
    route: '/calculadora-web',
    caseStudy: [
        'Operações Matemáticas: +, -, ×, ÷ com precedência correta via switch case',
        'Entrada Numérica: Dígitos 0-9, vírgula decimal',
        'Controles: C (clear all), = (calcular), % (porcentagem contextual)',
        'Validações: Evita múltiplas vírgulas, divisão por zero, precisão até 5 casas decimais',
        'UX Responsiva: Feedback visual (active opacity 0.9), display real-time',
    ],
  },
  {
    title: 'Gerador de QR Code',
    category: 'JavaScript',
    description: 'Gerador de QR Code desenvolvido com HTML, CSS e JavaScript',
    image: geradorQRcode,
    route: '/gerador-qr',    // <-- nova propriedade para rota interna        
    caseStudy: [
        'Geração Instantânea: Digite URL/texto → QR Code gerado via API REST',
        'Atalhos UX: Enter para gerar (keyPress listener)',
        'Validação: Bloqueia geração vazia (if !input.value)',
        'Download Implícito: QR clicável para salvar (img src dinâmica)',
    ],
  },
  {
    title: 'BLASTED',
    slug: 'blasted',
    category: 'Landing Page',
    description: 'Landing page desenvolvida para a peça teatral Blasted, de Sarah Kane.',
    image: blastedTela,
    prototypeLink: 'https://blasted.netlify.app', // <--- URL do protótipo
    prototypeText: 'Landing Page',    
    caseStudy: [
        'Landing page institucional para divulgação da peça Blasted, com foco em hierarquia de informação, performance, acessibilidade básica, navegação fluida e design responsivo.',
        '🚧',
    ],
  },
];
