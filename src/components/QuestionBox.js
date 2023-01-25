import React, {useState} from "react";
import "../index.css";

// Function to question inside our app
const QuestionBox = ({ question, options, selected}) => {
const [answer] = useState(options);
const [isDisabled, setIsDisabled] = useState(false);
const handleClick = () =>{
	setIsDisabled(true);
}
return (
	<div className="questionBox">
		<div className="question">{question}</div>
		{answer.map((text, index) => (
		<button
			key={index}
			className="answerBtn"
			disabled = {isDisabled}
			onClick={()=>{
					handleClick();
					selected(text);
				}}> {text}
		</button>
		))}
	</div>
)
};

export default QuestionBox;
