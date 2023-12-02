const quiz = [
  {
    question:
      `Julgue o item a seguir de acordo com o Regimento Interno da Assembleia Legislativa do Piauí. 
        Para tomar parte em qualquer discussão ou votar matéria de sua autoria, o Presidente da Assembleia Legislativa do Piauí transmite a presidência ao seu substituto.`,
    answers: [
      'Certo',
      'Errado',
      ],
    goodAnswer: 0,
    correcao: `Errado!, de acordo com o art. 19, § 1º, do Regimento Interno da Assembleia Legislativa do Piauí, que diz:

    "Para tomar parte em qualquer discussão ou votar matéria de sua autoria, o Presidente transmite a presidência ao seu substituto."`
  },
  
  {
    question: `
    Julgue o item a seguir de acordo com a Lei nº 8.121 de 2023.

 
A remuneração dos integrantes do Plano de Cargos, Carreiras e Salários do Quadro de Pessoal de provimento efetivo da Assembleia Legislativa do estado do Piauí é composta pelo subsídio, correspondente ao valor estabelecido nos anexos desta Lei, sem o acréscimo de vantagens pecuniárias.
    `,
    answers: [
      'Certo',
      'Errado',
      ],
    goodAnswer: 1,    
    correcao: "Errado! De acordo com a Lei nº 8.121 de 2023, a remuneração dos integrantes do Plano de Cargos, Carreiras e Salários do Quadro de Pessoal de provimento efetivo da Assembleia Legislativa do estado do Piauí é composta pelo vencimento, que pode ser acrescido de vantagens e acréscimos pecuniários legais². Portanto, a remuneração não é composta apenas pelo subsídio, sem o acréscimo de vantagens pecuniárias, como afirmado no item."
  
  },
  {
    question: "Julgue o item a seguir de acordo com a Lei nº 8.121 de 2023. Os servidores efetivos têm direito à Gratificação por Desempenho (GD). Esta gratificação será concedida automaticamente aos servidores efetivos que estiverem desempenhando suas funções.",
    answer: [
      'Certo',
      'Errado',
    ],
    goodAnswer: 0,
    correcao: "Errado! De acordo com a Lei nº 8.121 de 2023, os servidores efetivos têm direito à Gratificação por Desempenho (GD). Esta gratificação será concedida automaticamente aos servidores efetivos que estiverem desempenhando suas funções."
  },
];

export default quiz;
