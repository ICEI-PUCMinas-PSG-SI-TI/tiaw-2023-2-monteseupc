(function() {
    var questions = [{
      question: "Qual a função básica GPU (Unidade de Processamento Gráfico) em uma placa de vídeo?",
      choices:  [
        "Gerenciar todas as funcionalidades do computador, incluindo os gráficos.", 
         "Precessar imagens 2D ou 3D, realizando cálculos de geometria, texturas, iluminação e outros elementos.",
         "Armazenar informações sobre cada pixel e as imagens já prontas.", 
         "exibir o resultado final das imagens no minitor."
        ],
      correctAnswer: 1
    }, 
    {
      question: "Como o processador (CPU) executa instruções em um computador e qual é o papel fundamental desempenhado por ele no processamento de dados?",
      choices: [
        "A CPU é responsável pela exibição de gráficos e pela interação com o usuário.",
         "O processador executa apenas tarefas de armazenamento de dados no computador.", 
         "A CPU gerencia a comunicação entre dispositivos periféricos e o sistema operacional.", 
         "O processador é o cérebro do computador, executando instruções e realizando operações lógicas e aritméticas." 
         ],
      correctAnswer: 3
    }, 
    {
      question: "Qual das seguintes afirmações descreve corretamente a função da memória RAM em um computador em comparação com a memória de armazenamento (disco rígido ou SSD)?",
      choices: [
        "A memória RAM é volátil e armazena dados permanentes, enquanto a memória de armazenamento é não volátil e usada para acesso rápido durante a execução do sistema.", 
        "A memória RAM é não volátil e armazena dados permanentes, enquanto a memória de armazenamento é volátil e usada para acesso rápido durante a execução do sistema.", 
        "A memória RAM é volátil, mais rápida e usada para armazenamento temporário de dados ativos, enquanto a memória de armazenamento é não volátil, mais lenta e usada para armazenamento permanente.", 
        "A memória RAM e a memória de armazenamento têm funções idênticas, sendo usadas indistintamente para armazenamento temporário e permanente de dados."
    ],
      correctAnswer: 2
    }, 
    {
      question: "Qual é uma das principais funções da placa-mãe em um sistema computacional?",
      choices: [
        "Integrar e conectar diferentes componentes do sistema.",
        "Executar operações matemáticas complexas.", 
        "Fornecer energia para todos os componentes.", 
        "Gerenciar a temperatura ambiente."
    ],
      correctAnswer: 0
    },
    {
        question: "Qual é a principal vantagem do SSD (Solid State Drive) em comparação com um HDD (Hard Disk Drive) tradicional?",
        choices: [
          "Maior capacidade de armazenamento.", 
          "Velocidades de leitura e gravação mais rápidas.", 
          "Menor custo por gigabyte.", 
          "Maior durabilidade mecânica."
      ],
        correctAnswer: 1
    },
      {
        question: "O que representa a velocidade de clock de um processador?",
        choices: [
          "O número de núcleos no processador.", 
          "A quantidade de cache L3 disponível.", 
          "A frequência com que o processador executa instruções por segundo.", 
          "A capacidade de overclock do processador."
      ],
        correctAnswer: 2
      },
      {
        question: "Qual é a função principal de uma placa de rede em um computador?",
        choices: [
          "Armazenar dados temporariamente durante a transmissão.", 
          "Fornecer energia elétrica para os componentes do computador.", 
          "Gerenciar a conexão sem fio.", 
          "Facilitar a comunicação entre o computador e redes, como a Internet."
      ],
        correctAnswer: 3
      }, 
    {
      question: " Qual é a função principal de um sistema de refrigeração em um computador?",
      choices: [
        "Aumentar a velocidade de processamento.", 
        "Manter a temperatura dos componentes em níveis adequados.", 
        "Melhorar a qualidade de vídeo.", 
        "Expandir a capacidade de armazenamento."
    ],
      correctAnswer: 1
    }];
  
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
  
    // Display initial question
    displayNext();
  
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
  
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
  
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Marque uma opção por favor!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
  
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
  
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
  
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
  
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
  
    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
  
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
  
      var header = $('<h2>Questão ' + (index + 1) + ':</h2>');
      qElement.append(header);
  
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
  
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
  
      return qElement;
    }
  
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<br><input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
  
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
  
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
  
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
  
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
  
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
  
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>', { id: 'question' });
      
        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
          // Convertendo o índice selecionado para string antes de comparar
          if ((selections[i]) === questions[i].correctAnswer) {
            numCorrect++;
          } 
          
        }
      
        score.append('VOCÊ ACERTOU ' + numCorrect + ' QUESTÕES, DE ' +
          questions.length + ' !!!' + '<br><br>Caso seu resultado seja menor que 5, recomedamos que assista nossos tutoriais.');
        return score;

       
      }  
}
)();
 