import type { Video } from './types';

export const videosVisaoGeral: Video[] = [
  { id: 'kzC5e5V0gtA', numero: '01', titulo: 'Visão Geral do Antigo Testamento / TaNaK', categoria: 'Visão Geral', categoriaSlug: 'visao-geral', descritivo: 'Panorama geral do AT: Lei, Profetas e Escritos (TaNaK)' },
  { id: 'eQF_lAnjCTA', numero: '02', titulo: 'Visão Geral do Novo Testamento', categoria: 'Visão Geral', categoriaSlug: 'visao-geral', descritivo: 'Panorama geral do NT' },
];

export const videosAT: Video[] = [
  // Pentateuco (7)
  { id: 'syzvUKr4f44', numero: '01', titulo: 'Gênesis 1–11', categoria: 'Pentateuco', categoriaSlug: 'pentateuco', descritivo: 'Criação, queda, dilúvio, Babel' },
  { id: 'VaZdOfekgo8', numero: '02', titulo: 'Gênesis 12–50', categoria: 'Pentateuco', categoriaSlug: 'pentateuco', descritivo: 'Abraão, Isaque, Jacó, José' },
  { id: 'TF6whgRN6AM', numero: '03', titulo: 'Êxodo 1–18', categoria: 'Pentateuco', categoriaSlug: 'pentateuco', descritivo: 'Escravidão, Moisés, pragas, êxodo' },
  { id: 'cfZVX_ns8ds', numero: '04', titulo: 'Êxodo 19–40', categoria: 'Pentateuco', categoriaSlug: 'pentateuco', descritivo: 'Sinai, lei, tabernáculo' },
  { id: 'bR5qA3fmpEM', numero: '05', titulo: 'Levítico', categoria: 'Pentateuco', categoriaSlug: 'pentateuco', descritivo: 'Leis, sacrifícios, santidade' },
  { id: '6MtqQzOTukQ', numero: '06', titulo: 'Números', categoria: 'Pentateuco', categoriaSlug: 'pentateuco', descritivo: 'Deserto, censo, peregrinação' },
  { id: 'udwkeytvMPI', numero: '07', titulo: 'Deuteronômio', categoria: 'Pentateuco', categoriaSlug: 'pentateuco', descritivo: 'Discurso final de Moisés' },

  // Históricos (9)
  { id: 'OjB3aTBrgS8', numero: '08', titulo: 'Josué', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Conquista de Canaã' },
  { id: 'cPu3SHxOFDo', numero: '09', titulo: 'Juízes', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Ciclos de apostasia e libertação' },
  { id: 'm3voBpWv5Ig', numero: '10', titulo: 'Rute', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Redenção, lealdade, linhagem de Davi' },
  { id: 'othkYCAsskc', numero: '11', titulo: '1 Samuel', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Samuel, Saul, ascensão de Davi' },
  { id: 'YApXtfUyODg', numero: '12', titulo: '2 Samuel', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Reinado de Davi' },
  { id: '6R5wFQWFDL4', numero: '13', titulo: '1-2 Reis', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Divisão do reino, profetas, exílio' },
  { id: '1PnrE58L5Fg', numero: '14', titulo: '1-2 Crônicas', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Releitura do reino de Judá' },
  { id: 'TTVEz3s22yE', numero: '15', titulo: 'Esdras–Neemias', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Retorno do exílio, reconstrução' },
  { id: '0ZLyAPhbORU', numero: '16', titulo: 'Ester', categoria: 'Históricos', categoriaSlug: 'historicos', descritivo: 'Providência divina na Pérsia' },

  // Poéticos e Sabedoria (5)
  { id: '6rCWVsNyIqg', numero: '17', titulo: 'Jó', categoria: 'Poéticos e Sabedoria', categoriaSlug: 'poeticos', descritivo: 'Sofrimento, justiça divina' },
  { id: 'fOPF8khGeII', numero: '18', titulo: 'Salmos', categoria: 'Poéticos e Sabedoria', categoriaSlug: 'poeticos', descritivo: 'Orações e louvores de Israel' },
  { id: 'W2zeUOSXMjA', numero: '19', titulo: 'Provérbios', categoria: 'Poéticos e Sabedoria', categoriaSlug: 'poeticos', descritivo: 'Sabedoria prática' },
  { id: 'E-nMyBL46bQ', numero: '20', titulo: 'Eclesiastes', categoria: 'Poéticos e Sabedoria', categoriaSlug: 'poeticos', descritivo: 'Vaidade, sentido da vida' },
  { id: '0QXA35lz9rA', numero: '21', titulo: 'Cântico dos Cânticos', categoria: 'Poéticos e Sabedoria', categoriaSlug: 'poeticos', descritivo: 'Poesia amorosa, alegoria' },

  // Profetas (19)
  { id: 'EZ5LTlriVLs', numero: '22', titulo: 'Isaías 1–39', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Juízo e esperança' },
  { id: 'tAWKUvWe5JI', numero: '23', titulo: 'Isaías 40–66', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Consolo, servo sofredor' },
  { id: '1eSlWcmPxH4', numero: '24', titulo: 'Jeremias', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Juízo, nova aliança' },
  { id: 'g43dhirNO9Y', numero: '25', titulo: 'Lamentações', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Lamento pela queda de Jerusalém' },
  { id: 'isBjPaTB5Rk', numero: '26', titulo: 'Ezequiel 1–33', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Visões, juízo' },
  { id: 'TyNUYAy7zp4', numero: '27', titulo: 'Ezequiel 34–48', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Restauração, novo templo' },
  { id: 'pfsmbv0L0bo', numero: '28', titulo: 'Daniel', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Visões apocalípticas, fidelidade' },
  { id: 'wGozU771I_w', numero: '29', titulo: 'Oséias', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Amor fiel de Deus a Israel infiel' },
  { id: 'uQoMheoe904', numero: '30', titulo: 'Joel', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Dia do Senhor, derramamento do Espírito' },
  { id: 'NXnDB-paGV4', numero: '31', titulo: 'Amós', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Justiça social' },
  { id: 'ZsNqqDZiG1Y', numero: '32', titulo: 'Obadias', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Juízo sobre Edom' },
  { id: 'FB-E5jUZas0', numero: '33', titulo: 'Jonas', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Misericórdia de Deus aos gentios' },
  { id: '06A48hAXQA8', numero: '34', titulo: 'Miquéias', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Juízo e promessa messiânica' },
  { id: 'Sm3Ag-faQr0', numero: '35', titulo: 'Naum', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Queda de Nínive' },
  { id: 'X9mMgfw2AFM', numero: '36', titulo: 'Habacuque', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Fé em meio à injustiça' },
  { id: 'VirAEdcrQG0', numero: '37', titulo: 'Sofonias', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Dia do Senhor' },
  { id: 'VM5OH90xmjE', numero: '38', titulo: 'Ageu', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Reconstrução do templo' },
  { id: 'fgM4uynP7LU', numero: '39', titulo: 'Zacarias', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Visões messiânicas' },
  { id: '-HEQoeS1NtM', numero: '40', titulo: 'Malaquias', categoria: 'Profetas', categoriaSlug: 'profetas', descritivo: 'Última palavra profética do AT' },
];