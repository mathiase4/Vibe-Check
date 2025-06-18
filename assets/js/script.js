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
  
  const ClickedButton = e.target;
  const SelectedAnswer = ClickedButton.innerText;
  