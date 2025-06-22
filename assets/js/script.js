document.addEventListener("DOMContentLoaded", () => {


  //DOM Elements 
  const questionEl  = document.getElementById("question");
  const answersEl   = document.getElementById("answers");
  const scoreEl     = document.getElementById("score");
  const feedbackEl  = document.getElementById("feedback");
  const nextBtn     = document.getElementById("next-btn");


  // all questions for the quiz //
  const questions = [
    {
      question: "What's the name of AC/DC's song?",
      answers: ["Thunderstruck", "Thunderstorm", "Thunderbolt", "Thunder"],
      correct: "Thunderstruck"
    },
    {
      question: "How many sons does Bob Marley have?",
      answers: ["3", "4", "5", "7"],
      correct: "7"
    },
    {
      question: "How many people attended Metallica's performance at the 1991 Monsters of Rock?",
      answers: ["10 000", "50 000", "100 000", "160 000"],
      correct: "160 000"
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
  

  let currentQuestionIndex = 0;
  let score = 0;


    // showQuestion function, go help from gpt with this one //
    function showQuestion() {
      
      const q = questions[currentQuestionIndex];
      
      questionEl.innerText = q.question;
      //Clear old buttons
      answersEl.innerHTML = "";
  
      
      for (let i = 0; i < q.answers.length; i++) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn";
        btn.innerText = q.answers[i];
        
        btn.addEventListener("click", checkAnswer);
        answersEl.appendChild(btn);
      }
  
      
      nextBtn.style.display = "none";
    }
  

      // what happens if u press an answer
  function checkAnswer(e) {
    const clicked = e.target;
    const q = questions[currentQuestionIndex];

    // right or wrong thing
    if (clicked.innerText === q.correct) {
      clicked.classList.add("btn-success");
      score++;
      scoreEl.innerText = "Score: " + score;
    } else {
      clicked.classList.add("btn-danger");
    }

    // help from gpt with this 
    Array.from(answersEl.children).forEach(btn => btn.disabled = true);

    // and this 
    nextBtn.style.display = "block";
  }

  // searched this on google and some quickref cheatsheet 
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      
      questionEl.innerText = `Quiz finished! You scored ${score}/${questions.length}`;
      answersEl.innerHTML = "";           
      nextBtn.style.display = "none"; 
      feedbackEl.innerText = 
  score > questions.length/2
    ? "Well done! Music master!"
    : "Not bad! Try again to improve!";
    
      feedbackEl.innerText =
        score > questions.length/2
          ? "Well done! Music master!"
          : "Not bad! Try again to improve!";
    }
  }

 
  nextBtn.addEventListener("click", nextQuestion);
showQuestion();


});