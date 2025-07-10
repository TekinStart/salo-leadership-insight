
export interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    text: string;
    value: number;
  }[];
}

export interface QuizResult {
  score: number;
  profile: {
    title: string;
    description: string;
    color: string;
    emoji: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Quando surgem conflitos na sua equipa, a sua primeira reacção é:",
    options: [
      { label: "A", text: "Evito me envolver e espero que se resolvam", value: 1 },
      { label: "B", text: "Tomo uma decisão rápida para conter o impacto", value: 2 },
      { label: "C", text: "Escuto todas as partes antes de agir", value: 3 },
      { label: "D", text: "Procuro apoio ou orientação para resolver com critério", value: 4 }
    ]
  },
  {
    id: 2,
    question: "Na hora de delegar tarefas, você sente-se:",
    options: [
      { label: "A", text: "Inseguro — prefiro fazer sozinho", value: 1 },
      { label: "B", text: "Confiante, mas acabo sempre a supervisionar tudo", value: 2 },
      { label: "C", text: "Alinhado com a equipa e os prazos", value: 3 },
      { label: "D", text: "À vontade, com processos e critérios claros", value: 4 }
    ]
  },
  {
    id: 3,
    question: "A sua maior dificuldade como líder hoje é:",
    options: [
      { label: "A", text: "Ter clareza nas decisões", value: 1 },
      { label: "B", text: "Engajar a equipa sem sobrecarregar", value: 2 },
      { label: "C", text: "Estruturar processos que funcionem", value: 3 },
      { label: "D", text: "Saber o que priorizar no meio de tanta responsabilidade", value: 4 }
    ]
  },
  {
    id: 4,
    question: "Sobre os resultados da sua equipa:",
    options: [
      { label: "A", text: "Nem sempre sei como medir se estamos a ir bem", value: 1 },
      { label: "B", text: "Entregamos, mas com muito esforço e desgaste", value: 2 },
      { label: "C", text: "Costumamos atingir metas, mas ainda há instabilidade", value: 3 },
      { label: "D", text: "Os resultados são consistentes e melhoram com o tempo", value: 4 }
    ]
  },
  {
    id: 5,
    question: "Ao tomar decisões importantes, você:",
    options: [
      { label: "A", text: "Age por instinto ou urgência", value: 1 },
      { label: "B", text: "Consulta colegas ou a direcção", value: 2 },
      { label: "C", text: "Toma decisões com base na cultura da equipa", value: 3 },
      { label: "D", text: "Reflecte com apoio estratégico antes de agir", value: 4 }
    ]
  },
  {
    id: 6,
    question: "Em relação ao seu crescimento como líder:",
    options: [
      { label: "A", text: "Sinto-me estagnado", value: 1 },
      { label: "B", text: "Procuro conteúdos por conta própria, mas é confuso", value: 2 },
      { label: "C", text: "Já evoluí, mas sinto que falta estrutura", value: 3 },
      { label: "D", text: "Estou num caminho claro e com acompanhamento", value: 4 }
    ]
  }
];

export const getQuizResult = (score: number): QuizResult => {
  if (score >= 6 && score <= 9) {
    return {
      score,
      profile: {
        title: "Gestor Intuitivo",
        description: "Você age com base na experiência e intuição, mas falta-lhe clareza e estrutura. Ainda que tenha boa vontade, pode estar a correr riscos silenciosos. Uma conversa estratégica pode ajudar a ver o que ainda não está visível.",
        color: "bg-orange-500",
        emoji: "🟠"
      }
    };
  } else if (score >= 10 && score <= 13) {
    return {
      score,
      profile: {
        title: "Líder em Transição",
        description: "Você está num momento de crescimento e construção. Já tem consciência das suas responsabilidades, mas precisa alinhar direcção, processos e decisões. Com apoio certo, pode avançar com mais segurança.",
        color: "bg-yellow-500",
        emoji: "🟡"
      }
    };
  } else if (score >= 14 && score <= 17) {
    return {
      score,
      profile: {
        title: "Profissional Estruturado",
        description: "Você já lidera com intenção e algum grau de organização. Ainda há pontos de melhoria, mas está no caminho certo. Refinar decisões e alinhar cultura pode levar a sua liderança a outro nível.",
        color: "bg-green-500",
        emoji: "🟢"
      }
    };
  } else {
    return {
      score,
      profile: {
        title: "Líder com Clareza Estratégica",
        description: "Você toma decisões conscientes, lidera com estrutura e trabalha com visão. O próximo passo pode ser fortalecer ainda mais a cultura da sua equipa e influenciar resultados em escala.",
        color: "bg-blue-500",
        emoji: "🔵"
      }
    };
  }
};
