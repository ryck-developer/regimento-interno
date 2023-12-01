const quiz = [
  {
    question:
      'De acordo com o Artigo 1º do Regimento Interno da Assembleia Legislativa do estado do Piauí, assinale a alternativa correta sobre o local de funcionamento e a possibilidade de alteração desse local pela Assembleia Legislativa:',
    answers: [
      'O Artigo 1º estabelece que a Assembleia Legislativa do estado do Piauí funciona exclusivamente no Palácio Petrônio Portella, sem possibilidade de realização de atividades legislativas em outro local.',
      'Conforme o Artigo 1º, a Assembleia Legislativa do estado do Piauí pode se reunir em outro edifício ou localidade somente mediante autorização do governador do estado.',
      'O texto do Artigo 1º prevê que a Assembleia Legislativa do estado do Piauí pode funcionar no Palácio Petrônio Portella, e caso haja motivo relevante ou de força maior, a Assembleia pode se reunir em outro edifício ou localidade, com aprovação da Mesa e da maioria absoluta dos Deputados.',
      'O Artigo 1º indica que a Assembleia Legislativa do estado do Piauí está autorizada a funcionar em qualquer edifício ou localidade, desde que seja aprovado por unanimidade dos Deputados.',
      'Segundo o Artigo 1º do Regimento Interno, a Assembleia Legislativa do estado do Piauí pode funcionar no Palácio Petrônio Portella apenas durante os períodos ordinários, devendo se reunir em outro local durante sessões extraordinárias.',
    ],
    goodAnswer: 2, // Índice da resposta correta na array 'answers'
  },
  {
    question: 'Question 2',
    answers: ['answer1', 'answer2', 'answer3', 'answer4'],
    goodAnswer: 1,
  },
];

// Exportando o array 'quiz' para ser acessado por outros arquivos
module.exports = quiz; // Para Node.js
// OU
// export default quiz; // Para uso em navegadores com suporte a ES6 modules
