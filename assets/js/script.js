// ALL the Quiz Questions //
//little help from www.https://quickref.me//

let CurrentQuestionIndex = 0;
let score = 0;

const questions = [
    {
      question: "What's the name of this song?",
      answers: ["Thunderstruck", "Thunderstorm", "Thunderbolt", "Thunder"],
      correct: "Thunderstruck"
    },
    {
      question: "How many sons does Bob Marley have?",
      answers: ["3", "4", "5", "7"],
      correct: "7"
    },
    {
      question: "How many in the audience did Metallica have in 1991 Monsters of Rock?",
      answers: ["10000", "50000", "100000", "160000"],
      correct: "160000"
    },
    {
      question: "What band made the song Bohemian Rhapsody?",
      answers: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
      correct: "Queen"
    },
    {
      question: "Who sings the song 'Hotel California'?",
      answers: ["Eagles", "The Doors", "Fleetwood Mac", "The Who"],
      correct: "Eagles"
    },
    {
      question: "What is the name of the lead singer of Nirvana?",
      answers: ["Kurt Cobain", "Dave Grohl", "Chris Cornell", "Eddie Vedder"],
      correct: "Kurt Cobain"
    }
  ];

  // function when you click on a answer//
 
// got help from copilot //
  
function checkAnswer(e) {

    
    let ClickedButton = e.target;
  
    
    let SelectedAnswer = ClickedButton.innerText;
  
    
    let CurrentQuestion = questions[CurrentQuestionIndex];
  
    // check if the answer is right or not//
    if (SelectedAnswer === CurrentQuestion.correct) {
      ClickedButton.classList.add("btn-success");
      score = score + 1;
    } else {
      ClickedButton.classList.add("btn-danger");
    }
  
    // turn off every answer button //
    let AllAnswersButtons = document.querySelectorAll("#answers button");
    for (let i = 0; i < AllAnswersButtons.length; i++) {
      let button = AllAnswersButtons[i];
      button.disabled = true;
  
      // correct answer goes green
      if (button.innerText === CurrentQuestion.correct) {
        button.classList.add("btn-success");
      }
    }
  
    // show next button//
    let nextButton = document.getElementById("next-btn");
    nextButton.style.display = "block";
  }
  
// what question are we on, got help from copilot on this one and little bit research on yt //
function showQuestion() {

    let CurrentQuestion = questions[CurrentQuestionIndex];
    let questionElement = document.getElementById("question");

    questionElement.innerText = CurrentQuestion.question;
    let answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    for (let i = 0; i < CurrentQuestion.answers.length; i++) {
        let answerText = CurrentQuestion.answers[i];
        let answerButton = document.createElement("button");
        answerButton.innerText = answerText;
        answerButton.classList.add("btn");
        answersContainer.appendChild(answerButton);
        answerButton.addEventListener("click", checkAnswer);
      }
    }

      function nextQuestion() {
        CurrentQuestionIndex++;

        if (CurrentQuestionIndex >= questions.length) {
            showEndMessage(); 
            return; 
          }

        showQuestion();

        let nextButton = document.getElementById("next-btn");
        nextButton.style.display = "none";
        }

      
       let nextButton = document.getElementById("next-btn");
        nextButton.addEventListener("click", nextQuestion);
    // got help from youtube video and copilot //
    function showEndMessage() {
        document.getElementById("question").innerText = "You're done with the quiz! You got " + score + " out of " + questions.length + " correct.";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("next-btn").style.display = "none";
      
        
        document.getElementById("answers").appendChild(PlayAgainButton);
      }

        //Make a Play again button //
        let PlayAgainButton = document.createElement("button");
        PlayAgainButton.innerText = "Play Again";


        PlayAgainButton.addEventListener("click", function() {

            // Reset the quiz
            CurrentQuestionIndex = 0;
            score = 0;

            
            showQuestion();

            
        });

showQuestion();