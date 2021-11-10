export const obj_dialogo = [
  {
    personagem: "1",
    texto_dialogo: {
      text: ["Olá!"],
    },
    tem_questao: false,
    questao_vinculada: "",
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: ["Você pode salvar aquele arquivo da apresentação de modo que eu possa acessá-lo de todos os lugares?"],
    },
    tem_questao: true,
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
            frase_contexto: ["Veja mais sobre isso neste vídeo:"],
            conteudo_complementar: ["O que é nuvem? https://www.youtube.com/watch?v=67okcMhiFo4"]
          },
          {
            feed: "Pode até ser, mas o melhor é salvar em uma nuvem.",
            frase_contexto: ["Pode até ser, mas o melhor é salvar em uma nuvem."],
            conteudo_complementar: ["O que é nuvem? https://www.youtube.com/watch?v=67okcMhiFo4"]
          },
          {
            feed: "Perfeito! 😃😃😃",
            frase_contexto: ["Assisti a um vídeo sobre isso hoje mesmo, veja:"],
            conteudo_complementar: ["O que é nuvem? https://www.youtube.com/watch?v=67okcMhiFo4"]
          },
        ],
      },
    ],
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: [
        "Também preciso enviar um arquivo grande para o cliente.",
        "Você sabe qual é a melhor forma de fazer isso?"
      ],
    },
    tem_questao: true,
    questao_vinculada: [
      {
        enunciado: "Qual seria sua resposa?",
      },
      {
        opcoes: [
          {
            op: "Ops! Não tenho certeza! 😬",
          },
          {
            op: "Podemos salvar o arquivo em um pendrive e mandar entregar para o cliente, o que acha?",
          },
          {
            op: "É só fazer o upload em uma nuvem e compartilhar o acesso!",
          },
        ],
      },
      {
        feedbacks: [
          {
            feed: "Acabaram de me indicar o Google Drive.",
            frase_contexto: ["Veja como compartilhar arquivos nele:"],
            conteudo_complementar: ["<h3>Google Drive - Como compartilhar arquivos</h3>"," https://www.youtube.com/watch?v=hD-ffUPmqGA"]
          },
          {
            feed: "Acho que essa não é uma boa opção.",
            frase_contexto: ["Acabaram de me indicar o Google Drive, veja como compartilhar arquivos nele:"],
            conteudo_complementar: ["<h3>Google Drive - Como compartilhar arquivos</h3>"," https://www.youtube.com/watch?v=hD-ffUPmqGA"]
          },
          {
            feed: "Ótimo!",
            frase_contexto: ["Posso fazer isso pelo Google Drive, certo?", "Encontrei este vídeo que mostra como compartilhar arquivos nele:"],
            conteudo_complementar: ["<h3>Google Drive - Como compartilhar arquivos</h3>", "https://www.youtube.com/watch?v=hD-ffUPmqGA"]
          },
        ],
      },
    ],
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: [
        "Agora sobre o relatório que preciso enviar:",
        "Você sabe como colocar uma url imensa e cheia de letras estranhas em um documento de uma forma mais agradável?"
      ],
    },
    tem_questao: true,
    questao_vinculada: [
      {
        enunciado: "Qual seria sua resposa?",
      },
      {
        opcoes: [
          {
            op: "O que é url? 😕",
          },
          {
            op: "Não tem jeito! Tem que inserir a url assim mesmo, do jeito que está.",
          },
          {
            op: "É só utilizar um encurtador de URL!",
          },
        ],
      },
      {
        feedbacks: [
          {
            feed: "Dá uma olhada neste artigo, acho que ele vai nos dar uma resposta:",
            frase_contexto: [],
            conteudo_complementar: ["<h3>A importância de encurtar uma url antes de compartilhar</h3>"," https://tinyurl.com/y8m3e729"]
          },
          {
            feed: "Dá uma olhada neste artigo, acho que ele vai nos dar uma resposta:",
            frase_contexto: [],
            conteudo_complementar: ["<h3>A importância de encurtar uma url antes de compartilhar</h3>","https://tinyurl.com/y8m3e729"]
          },
          {
            feed: "Verdade!",
            frase_contexto: ["Vi algo sobre isso no artigo:"],
            conteudo_complementar: ["<h3>A importância de encurtar uma url antes de compartilhar</h3>", "https://tinyurl.com/y8m3e729"]
          },
        ],
      },
    ],
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: [
        "Na verdade, seria melhor enviar a apresentação, o relatório e mais alguns arquivos do projeto de uma só vez para o cliente.",
        "Podemos fazer isso?"
      ],
    },
    tem_questao: true,
    questao_vinculada: [
      {
        enunciado: "Qual seria sua resposa?",
      },
      {
        opcoes: [
          {
            op: "Ainda acho que o pendrive é a melhor solução.",
          },
          {
            op: "Podemos enviar tudo em anexo por e-mail, o que acha?",
          },
          {
            op: "Você pode criar uma pasta na nuvem para subir os arquivos e ativar o link de compartilhamento da pasta. Assim, você pode enviar a url do link por e-mail e evitar que os arquivos sejam anexados, deixando o seu envio e recebimento bem mais rápido."
          },
        ],
      },
      {
        feedbacks: [
          {
            feed: "Acabaram de me mandar este link sobre como compartilhar uma pasta no Google Drive.",
            frase_contexto: ["Acho que essa vai ser a melhor opção:"],
            conteudo_complementar: ["<h3>Como compartilhar uma pasta no Google Drive</h3>"," https://tecnoblog.net/237738/ativar-compartilhar-pasta-google-drive"]
          },
          {
            feed: "Acabaram de me mandar este link sobre como compartilhar uma pasta no Google:",
            frase_contexto: ["Acho que essa vai ser a melhor opção:"],
            conteudo_complementar: ["<h3>Como compartilhar uma pasta no Google Deive</h3>"," https://tecnoblog.net/237738/ativar-compartilhar-pasta-google-drive"]
          },
          {
            feed: "Que ótima solução! 👏",
            frase_contexto: ["Acho que vi algo sobre isso neste link:"],
            conteudo_complementar: ["<h3>Como compartilhar uma pasta no Google Drive</h3>", "https://tecnoblog.net/237738/ativar-compartilhar-pasta-google-drive"]
          },
        ],
      },
    ],
  }
];
