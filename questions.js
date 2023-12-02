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
    correcao: `O item está correto, de acordo com o art. 19, § 1º, do Regimento Interno da Assembleia Legislativa do Piauí, que diz:

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
    correcao: "O item está incorreto. De acordo com a Lei nº 8.121 de 2023, a remuneração dos integrantes do Plano de Cargos, Carreiras e Salários do Quadro de Pessoal de provimento efetivo da Assembleia Legislativa do estado do Piauí é composta pelo vencimento, que pode ser acrescido de vantagens e acréscimos pecuniários legais². Portanto, a remuneração não é composta apenas pelo subsídio, sem o acréscimo de vantagens pecuniárias, como afirmado no item."
  
  },
];

export default quiz;
