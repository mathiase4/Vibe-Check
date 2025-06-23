# Vibe-Check

**Vibe Check** Vibe Check is a simple, beginner-friendly music quiz that challenges users to test their knowledge of songs, artists, and trivia.



## Technologies Used
- HTML for structure
- CSS for styling 
- JavaScript for quiz logic and interactivity
- [Bootstrap 5](https://getbootstrap.com/)
- Favicon 
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- Audio files for right/wrong and celebration sounds
- [Google Fonts](https://fonts.google.com/)
- Used Sora AI to make the background

  **Validation**
- HTML validated with [W3C Markup Validator](https://validator.w3.org/)  
- CSS validated with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)  




**Manual Tests**
- Click each answer, correct one makes yaya! sound.
- Next button loads next question.
- Play Again button resets quiz.
- Sounds play on correct/wrong.
- Celebratory confetti appears on 4 rights out of 6 or more score.
- Tested in Chrome, mobile view, and tablet.

## How It Works

- Questions and four answers are stored in a JavaScript array.

- On page load, the first question and its answers are displayed.

- The script checks if it matches the correct answer.

- Plays a correct or wrong sound. fart sound or yayya!

- Disables further clicks until proceeding.

- A "Next" button appears to load the next question.

- At the end, the final score and feedback message appear, with a "Play Again" button to restart.

- If the user scores more than half, confetti and a celebration sound play.



## Future Features

- audio sound and some music clips recognition
- API integration
- Add difficulty levels
- Show a timer for each question
- Add more visual feedback (colors, animations)



## Help Tools / Resources
**Used GitHub Copilot for code suggestions**

**Watched tutorial videos on YouTube to understand quiz logic**

**Referenced QuickRef.me for JavaScript syntax help**

**And when i have been hardstuck i got help from ChatHPT, explain on a deeper level**

## Installation

1. Clone the repository  
   `git clone https://github.com/mathiase4/Vibe-Check.git`  
2. Change into the project folder  
   `cd Vibe-Check`  
3. Open `index.html` in your browser.



## Usage

### Answer each question by clicking one of the four buttons.

### Listen for the “correct” or “wrong” sound.

### Click Next to proceed.

### At the end, view your score, feedback message, and click Play Again to restart.

## Live Demo

Try the Quiz right here!  
[Click here to try it out!](https://mathiase4.github.io/Vibe-Check/)

## Demo
![Vibe Check Screenshot](screenshot.png)




## What i have done today
- 2025-06-18, i have created the Quiz through html simple structure and made the questions inside the js file.
- 2025-06-19, been developing the Quiz in js for the most part, fixed the buttons/answers and scoreboard, fixed Favicon so it looks more nice aswell.
- 2025-06-21, got stuck on code in JS,Trying to fix the audio/right/wrong sounds. dont know how to fix it but im trying my best.
- 2025-06-22, fixed the problem on playagainbutton, didnt have DOMcontenctLoaded on the script so got error in devtools.
- 2025-06-23, goes pretty well actually. the quiz feels kinda finished already.
- 






## Author

Mathias Eriksson – [GitHub/mathiase4](https://github.com/mathiase4)

## License

This project is licensed under the MIT License. 
