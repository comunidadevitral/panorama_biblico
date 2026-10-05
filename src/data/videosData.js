/**
 * Dados dos vídeos e livros do Panorama Bíblico.
 * Ordem canônica bíblica. Substitua os placeholders de videoId pelos IDs reais do YouTube.
 */

export const oldTestamentOverview = {
  title: 'Visão Geral do Antigo Testamento',
  videoId: 'PLACEHOLDER_OLD', // ex: 'dQw4w9WgXcQ'
}

export const newTestamentOverview = {
  title: 'Visão Geral do Novo Testamento',
  videoId: 'PLACEHOLDER_NEW', // ex: 'dQw4w9WgXcQ'
}

const pentateuco = [
  { title: 'Gênesis', slug: 'genesis', chapters: 50, category: 'Pentateuco', description: 'A criação do mundo, a origem da humanidade e as alianças patriarcais com Abraão, Isaque e Jacó.' },
  { title: 'Êxodo', slug: 'exodo', chapters: 40, category: 'Pentateuco', description: 'A libertação do povo de Israel do Egito, a travessia do Mar Vermelho e a entrega da Lei no Sinai.' },
  { title: 'Levítico', slug: 'levitico', chapters: 27, category: 'Pentateuco', description: 'Leis cerimoniais, sacrifícios, pureza e ordenanças para a comunhão entre Deus e Israel.' },
  { title: 'Números', slug: 'numeros', chapters: 36, category: 'Pentateuco', description: 'O censo do povo, a wanderings no deserto e a preparação para entrar em Canaã.' },
  { title: 'Deuteronômio', slug: 'deuteronomio', chapters: 34, category: 'Pentateuco', description: 'A repetição da Lei por Moisés antes da entrada de Israel na Terra Prometida.' },
]

const historicos = [
  { title: 'Josué', slug: 'josue', chapters: 24, category: 'Históricos', description: 'A conquista e repartição da Terra Prometida sob a liderança de Josué.' },
  { title: 'Juízes', slug: 'juizes', chapters: 21, category: 'Históricos', description: 'O ciclo de apostasia, opressão e libertação pelos juízes levantados por Deus.' },
  { title: 'Rute', slug: 'rute', chapters: 4, category: 'Históricos', description: 'A história de fidelidade, amor e redenção no tempo dos Juízes.' },
  { title: '1 Samuel', slug: '1-samuel', chapters: 31, category: 'Históricos', description: 'A transição da era dos Juízes para a monarquia: Samuel, Saul e Davi.' },
  { title: '2 Samuel', slug: '2-samuel', chapters: 24, category: 'Históricos', description: 'O reinado de Davi: sucesso, queda e restauração.' },
  { title: '1 Reis', slug: '1-reis', chapters: 22, category: 'Históricos', description: 'O reinado de Salomão, a divisão do reino e os profetas Elias e Eliseu.' },
  { title: '2 Reis', slug: '2-reis', chapters: 25, category: 'Históricos', description: 'A queda de Israel e Judá, exílio e remanescente.' },
  { title: '1 Crônicas', slug: '1-cronicas', chapters: 29, category: 'Históricos', description: 'A história de Israel vista pela perspectiva davídica e sacerdotal.' },
  { title: '2 Crônicas', slug: '2-cronicas', chapters: 36, category: 'Históricos', description: 'O reinado de Salomão até o exílio e o decreto de Ciro.' },
  { title: 'Esdras', slug: 'esdras', chapters: 10, category: 'Históricos', description: 'O retorno do exílio e a reconstrução do Templo.' },
  { title: 'Neemias', slug: 'neemias', chapters: 13, category: 'Históricos', description: 'A reconstrução dos muros de Jerusalém e reformas espirituais.' },
  { title: 'Ester', slug: 'ester', chapters: 10, category: 'Históricos', description: 'A providência divina preservando o povo judeu no Persa.' },
]

const poeticos = [
  { title: 'Jó', slug: 'jo', chapters: 42, category: 'Poéticos', description: 'O sofrimento do justo e a soberania divina revelada.' },
  { title: 'Salmos', slug: 'salmos', chapters: 150, category: 'Poéticos', description: 'Hinos, orações e louvores que expressam toda a gama da experiência humana com Deus.' },
  { title: 'Provérbios', slug: 'proverbios', chapters: 31, category: 'Poéticos', description: 'Sabedoria prática para a vida cotidiana e o temor do Senhor.' },
  { title: 'Eclesiastes', slug: 'eclesiastes', chapters: 12, category: 'Poéticos', description: 'A reflexão sobre a vaidade das coisas terrenas e o temor a Deus.' },
  { title: 'Cânticos', slug: 'canticos', chapters: 8, category: 'Poéticos', description: 'Poema de amor que simboliza a aliança entre Deus e seu povo.' },
]

const maiores = [
  { title: 'Isaías', slug: 'isaías', chapters: 66, category: 'Proféticos Maiores', description: 'Profecias de juízo e consolação, incluindo a visão do Messias.' },
  { title: 'Jeremias', slug: 'jeremiah', chapters: 52, category: 'Proféticos Maiores', description: 'O profeta do coração partido que annuncia a queda de Jerusalém.' },
  { title: 'Lamentações', slug: 'lamentações', chapters: 5, category: 'Proféticos Maiores', description: 'Lamento pela destruição de Jerusalém e esperança na restauração.' },
  { title: 'Ezequiel', slug: 'ezequiel', chapters: 48, category: 'Proféticos Maiores', description: 'Visões do trono de Deus e profecias contra nações e Israel.' },
  { title: 'Daniel', slug: 'daniel', chapters: 12, category: 'Proféticos Maiores', description: 'Relatos da fidelidade no exílio e visões escatológicas.' },
]

const menores = [
  { title: 'Oseias', slug: 'oseias', chapters: 14, category: 'Proféticos Menores', description: 'Amor soberano de Deus apesar da infidelidade de Israel.' },
  { title: 'Joel', slug: 'joel', chapters: 3, category: 'Proféticos Menores', description: 'Dia do Senhor, praga de gafanhotos e derramamento do Espírito.' },
  { title: 'Amós', slug: 'amos', chapters: 9, category: 'Proféticos Menores', description: 'Justiça social e juízo divino sobre Israel e nações.' },
  { title: 'Obadias', slug: 'obadias', chapters: 21, category: 'Proféticos Menores', description: 'Juízo contra Edom e restauração de Israel.' },
  { title: 'Jonas', slug: 'jonas', chapters: 4, category: 'Proféticos Menores', description: 'A graça de Deus estendida até a Nínive pagã.' },
  { title: 'Miquéias', slug: 'miquéias', chapters: 7, category: 'Proféticos Menores', description: 'Julgamento e esperança: o que Deus requer.' },
  { title: 'Naum', slug: 'naum', chapters: 3, category: 'Proféticos Menores', description: 'Julgamento sobre Nínive.' },
  { title: 'Habacuque', slug: 'habacuque', chapters: 3, category: 'Proféticos Menores', description: 'Perguntas de fé e a justiça de Deus.' },
  { title: 'Sofonias', slug: 'sofonias', chapters: 3, category: 'Proféticos Menores', description: 'Dia do Senhor e remanescente restaurado.' },
  { title: 'Ageu', slug: 'ageu', chapters: 2, category: 'Proféticos Menores', description: 'Exortação à reconstrução do Templo.' },
  { title: 'Zacarias', slug: 'zacarias', chapters: 14, category: 'Proféticos Menores', description: 'Visões e profecias messiânicas.' },
  { title: 'Malaquias', slug: 'malaquias', chapters: 4, category: 'Proféticos Menores', description: 'Chamado ao arrependimento e promessa do mensageiro.' },
]

const novoTestamentoBooks = [
  { title: 'Mateus', slug: 'mateus', chapters: 28, category: 'Evangelhos', description: 'O Evangelho do Reino, apresentando Jesus como o Messias prometido a Israel.' },
  { title: 'Marcos', slug: 'marcos', chapters: 16, category: 'Evangelhos', description: 'O Evangelho da ação: o Servo sofredor de Deus.' },
  { title: 'Lucas', slug: 'lucas', chapters: 24, category: 'Evangelhos', description: 'O Evangelho da humanidade de Jesus, salvador de todos.' },
  { title: 'João', slug: 'joao', chapters: 21, category: 'Evangelhos', description: 'O Evangelho da divindade de Cristo e crença em seu nome.' },
  { title: 'Atos', slug: 'atos', chapters: 28, category: 'Histórico', description: 'Os primórdios da Igreja, o derramamento do Espírito Santo e a expansão da mensagem até Roma.' },
  { title: 'Romanos', slug: 'romanos', chapters: 16, category: 'Epístolas Paulinas', description: 'A justificação pela fé e a vida no Espírito.' },
  { title: '1 Coríntios', slug: '1-corintios', chapters: 16, category: 'Epístolas Paulinas', description: 'Problemas na igreja de Corinto: divisões, imoralidade e dons espirituais.' },
  { title: '2 Coríntios', slug: '2-corintios', chapters: 13, category: 'Epístolas Paulinas', description: 'Defesa do apostolado e tesouro na vasilha de barro.' },
  { title: 'Gálatas', slug: 'gálatas', chapters: 6, category: 'Epístolas Paulinas', description: 'A liberdade cristã e a nulidade das obras da Lei.' },
  { title: 'Efésios', slug: 'efésios', chapters: 6, category: 'Epístolas Paulinas', description: 'A unidade da Igreja em Cristo e a armadura de Deus.' },
  { title: 'Filipenses', slug: 'filipenses', chapters: 4, category: 'Epístolas Paulinas', description: 'Alegria, humildade e contentamento em toda circunstância.' },
  { title: 'Colossenses', slug: 'colossenses', chapters: 4, category: 'Epístolas Paulinas', description: 'Cristo soberano sobre toda criação e a igreja.' },
  { title: '1 Tessalonicenses', slug: '1-tessalonicenses', chapters: 5, category: 'Epístolas Paulinas', description: 'Vida santificada e esperança na volta de Cristo.' },
  { title: '2 Tessalonicenses', slug: '2-tessalonicenses', chapters: 3, category: 'Epístolas Paulinas', description: 'O dia do Senhor e a apostasia final.' },
  { title: '1 Timóteo', slug: '1-timóteo', chapters: 6, category: 'Epístolas Paulinas', description: 'Instruções para a igreja e qualidades de líderes.' },
  { title: '2 Timóteo', slug: '2-timóteo', chapters: 4, category: 'Epístolas Paulinas', description: 'Testamento pastoral: firmeza na fé e palavra de Deus.' },
  { title: 'Tito', slug: 'tito', chapters: 3, category: 'Epístolas Paulinas', description: 'Ordem na igreja e sã doutrina.' },
  { title: 'Filemon', slug: 'filemon', chapters: 25, category: 'Epístolas Paulinas', description: 'Reconciliação e amor cristão na prática.' },
  { title: 'Hebreus', slug: 'hebreus', chapters: 13, category: 'Epístolas Gerais', description: 'A superioridade de Cristo e a fé dos patriarcas.' },
  { title: 'Tiago', slug: 'tiago', chapters: 5, category: 'Epístolas Gerais', description: 'Fé e obras: a religião pura e simples.' },
  { title: '1 Pedro', slug: '1-pedro', chapters: 5, category: 'Epístolas Gerais', description: 'Sofrimento, esperança e vida santa na persecution.' },
  { title: '2 Pedro', slug: '2-pedro', chapters: 3, category: 'Epístolas Gerais', description: 'Crescimento espiritual e advertência contra falsos mestres.' },
  { title: '1 João', slug: '1-joao', chapters: 5, category: 'Epístolas Gerais', description: 'Deus é luz, amor e verdade; discernimento dos espíritos.' },
  { title: '2 João', slug: '2-joao', chapters: 13, category: 'Epístolas Gerais', description: 'Exortação à verdade e ao amor.' },
  { title: '3 João', slug: '3-joao', chapters: 15, category: 'Epístolas Gerais', description: 'Hospitalidade e fé genuína.' },
  { title: 'Judas', slug: 'judas', chapters: 25, category: 'Epístolas Gerais', description: 'Contenda pela fé e exortação à perseverança.' },
  { title: 'Apocalipse', slug: 'apocalipse', chapters: 22, category: 'Profético', description: 'Revelação de Jesus Cristo: juízo, vitória e nova criação.' },
]

export const oldTestamentBooks = [...pentateuco, ...historicos, ...poeticos, ...maiores, ...menores]
export const newTestamentBooks = novoTestamentoBooks
