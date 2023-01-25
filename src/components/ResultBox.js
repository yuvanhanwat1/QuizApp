import React from 'react';
import "../index.css";
const Result = ({score, playAgain}) => (
<div className="score-board">
	<div className="score"> Your have answered {score} / 5 Correctly </div>
	<button className="restartBtn" onClick={playAgain} > Start Quizz </button>
</div>
)

export default Result;