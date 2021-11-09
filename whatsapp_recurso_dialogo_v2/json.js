export const dialogos = [
  {
    personagem: "1",
    texto_dialogo: { text: "Olá!" },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: "Você pode salvar aquele arquivo da apresentação de modo que eu possa acessá-lo de todos os lugares?",
    },
    tem_questao: 1,
    questao_vinculada: [
      {
        enunciado: "Qual seria sua resposa?",
      },
      {
        opcoes: [
          {
            op: "Eu posso salvar num pendrive para você.",
          },
          {
            op: "Vou te enviar o arquivo anexado em um e-mail, pode ser?",
          },
          {
            op: "Vou salvar em uma nuvem e te mando.",
          },
        ],
      },
      {
        feedbacks: [
          {
            feed: "Acho que é melhor salvar na nuvem.",
          },
          {
            feed: "Pode até ser, mas o melhor é salvar em uma nuvem.",
          },
          {
            feed: "Perfeito! 😃",
          },
        ],
      },
    ],
  },
  {
    personagem: "2",
    texto_dialogo: {
      text: "Claro! Só não sei como fazer isto? Alguma sugestão?",
    },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "2",
    texto_dialogo: { text: "Eu tava pensando num pendrive..." },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: "Acho que não! Existem formas mais modernas de disponibilizar conteúdo.",
    },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "2",
    texto_dialogo: { text: "Então, me sugira algo, por favor!" },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "1",
    texto_dialogo: { text: "Já ouviu falar em nuvem?" },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "2",
    texto_dialogo: {
      text: "Já ouvi falar, sim. Mas não sei bem direito o que é.",
    },
    tem_questao: 0,
    questao_vinculada: "",
  },
];
