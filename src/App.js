import { useEffect, useState } from "react";
import "./App.css";

function App() {
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
    
  };

  const selectPaper = () => {
    setUserChoice(choices[1]);
    cc();
    
  };

  const selectScisos = () => {
    setUserChoice(choices[2]);
    cc();
    
  };

  const reset = () =>{
    window.location.reload()
    setTurnResult("Let's Play")
  }

  // useEffect(() => {
  //   const combomove = userChoice + computerChoice;
  //   if(combomove === "rockscissors" || "scissorspaper" || "paperrock"){
  //     const updateduser = userPoints + 1;
  //     setUserPoints(updateduser)
  //     setTurnResult("User Got the Point")
  //     if(updateduser === 3){
  //       setResult("User Wins")
  //       setGameOver(true)
  //     }
  //   }
  //   else if(combomove === "scissorsrock" || "paperscissors" || "rockpaper"){
  //     const updatedcomputer = computerPoints+1;
  //     setComputerPoints(updatedcomputer)
  //     setTurnResult("Computer Got the point")
  //     if(updatedcomputer === 3){
  //       setResult("Computer Wins")
  //       setGameOver(true)
  //     }
  //   }

  //   else if((combomove === "rockrock" || "paperpaper" || "scissorsscissors")){
  //     setTurnResult("No One Got The Point")
  //   }

  // }, [userChoice, computerChoice])

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
