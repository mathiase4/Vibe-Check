document.addEventListener("DOMContentLoaded", () => {


  //DOM Elements 
  const questionEl  = document.getElementById("question");
  const answersEl   = document.getElementById("answers");
  const scoreEl     = document.getElementById("score");
  const feedbackEl  = document.getElementById("feedback");
  const nextBtn     = document.getElementById("next-btn");

  // audio files
  const wrongSound   = document.getElementById("wrong-sound");
const correctSound   = document.getElementById("correct-sound");
const celebrateSound = document.getElementById("celebrate-sound");


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

// Function that starts a sound from the beginning
function playSound(snd) {
  try {
    snd.pause();          
    snd.currentTime = 0;  
    snd.play();
  } catch (e) {
    
  }
}

// Function that stop every sound
function stopAllSounds() {
  [correctSound, wrongSound, celebrateSound].forEach(s => {
    try {
      s.pause();
      s.currentTime = 0;
    } catch (e) {}
  });
}

    // showQuestion function, go help from gpt with this one //
    function showQuestion() {
        stopAllSounds(); 
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
        // right or wrong 
        if (clicked.innerText === q.correct) {
          playSound(correctSound);           // play right sound
          clicked.classList.add("btn-success");
          score++;
          scoreEl.innerText = "Score: " + score;
        } else {
          playSound(wrongSound);             // play wrong sound
          clicked.classList.add("btn-danger");
        }
        
        Array.from(answersEl.children).forEach(btn => btn.disabled = true);
        nextBtn.style.display = "block";
      }
    
      // confetti sound got help with all sound with replit /copilot to make it work
      function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          questionEl.innerText = `Quiz finished! You scored ${score}/${questions.length}`;
          answersEl.innerHTML = "";
          nextBtn.style.display = "none";
          // feedback
          feedbackEl.innerText = score > questions.length/2
            ? "Well done! Music master!"
            : "Not bad! Try again to improve!";

            // play again button // //some help from cheatsheet 
            const playAgainBtn = document.createElement("button");
            playAgainBtn.innerText = "Play Again?";
            playAgainBtn.classList.add("btn", "play-again-btn");

            // the button 
            answersEl.appendChild(playAgainBtn);
            playAgainBtn.addEventListener("click", () => {
              currentQuestionIndex = 0;
              score = 0;
              scoreEl.innerText = "Score : 0";
              feedbackEl.innerHTML ="";
              showQuestion();
            });
          // play confetti or celebrate sound if u got more than 3 right
          if (score > questions.length/2) {
            playSound(celebrateSound);     // play celebrate sound
            if (typeof confetti === "function") {
              confetti({ particleCount: 100, spread: 70 });
            }
          }
          
        }
      }
    
      nextBtn.addEventListener("click", nextQuestion);
      showQuestion();
    });