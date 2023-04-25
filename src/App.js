import { useEffect, useState } from "react";
import "./App.css";
import click from "./assets/click1.mp3"
import defeat from "./assets/defeat.mp3"
import win from "./assets/win.mp3"


function App() {
  const Play = () => {
    new Audio(click).play()
  }

  const Play2 = () =>{
    new Audio(defeat).play()
  }

  const Play3 =() =>{
    new Audio(win).play()
  }
  const choices = ["rock", "paper", "scissors"];

  const [userChoice, setUserChoice] = useState(choices[0]);
  const [computerChoice, setComputerChoice] = useState(choices[0]);

  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);

  const [turnResult, setTurnResult] = useState("Let's Play");
  const [result, setResult] = useState();

  const [gameOver, setGameOver] = useState(false);

  const cc = () => {
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
  };

 
 

  const selectRock = () => {
    setUserChoice(choices[0]);
    cc();
    Play();
    
  };

  const selectPaper = () => {
    setUserChoice(choices[1]);
    cc();
    Play();
    
  };

  const selectScisos = () => {
    setUserChoice(choices[2]);
    cc();
    Play();
    
  };

  const reset = () =>{
    Play();
    setTimeout(window.location.reload(), 5000)
    setTurnResult("Let's Play")
  }

  
  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5){
          setResult('User Wins')
          Play3()
          setGameOver(true)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          Play2()
         
          setGameOver(true)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }
    }
    // eslint-disable-next-line 
  }, [computerChoice, userChoice])

  return (
    <div className="App">
      <h1 className="heading">ROCK PAPER SCISSORS</h1>
      <div className="score">
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>
      <div className="choices">
        <div className="choice-user">
          <img className="user-hand" src={`../images/${userChoice}.png`} alt="hand-img"></img>
        </div>
        <div>
        {
          gameOver && <div className="result"><h1> {result}</h1> <button className="restart" onClick={reset}>Restart !</button>
          </div> 

        }
      </div>
        <div className="choice-computer">
          <img
            className="computer-hand"
            src={`../images/${computerChoice}.png`}
          alt="img"></img>
        </div>
      </div>
      <div className="button-div" >
        <button onClick={selectRock} className="button">
          Rock
        </button>
        <audio src=""></audio>
        <button onClick={selectPaper} className="button">
          Paper
        </button>
        <button onClick={selectScisos} className="button">
          Scissors
        </button>
      </div>

      <div className="result">
        <h1>{turnResult}</h1>
      </div>
    </div>
  );
}

export default App;
