// ALL the Quiz Questions //
//little help from www.https://quickref.me//
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
  


