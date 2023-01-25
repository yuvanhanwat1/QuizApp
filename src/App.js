import React, { Component } from "react";
import "./index.css";
import questionAPI from './Data';
import QuestionBox from './components/QuestionBox';
import Result from './components/ResultBox';


class App extends Component {
    constructor() {
        super();
        this.state = {
            questionBank: [],
            score: 0,
            responses: 0,
            firstPage: false,
            secondPage: false,
            thirdPage: false,
        };
    }

    first = () => {
        this.setState({
            firstPage: false,
            secondPage: true,
            thirdPage: false,
        })
    }

    second = () => {
        this.setState({
            firstPage: false,
            secondPage: false,
            thirdPage: true,
        })
    }
    third = () => {
        this.setState({
            thirdPage: false,
            secondPage: true,
        })
    }

    // Function to get question from ./question
    getQuestions = () => {
        questionAPI().then(question => {
            this.setState({ questionBank: question });
        });
    };

    // Set state back to default and call function
    playAgain = () => {
        this.setState({
            firstPage: false,
            secondPage: false,
            thirdPage: false
        })
        this.getQuestions();
        this.setState({ score: 0, responses: 0 });
    };

    ShowResult = () => {
        return <Result score={this.state.score} playAgain={this.playAgain} />;
    };

    // Function to compute scores
    computeAnswer = (answer, correctAns) => {
        if (answer === correctAns) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5
                ? this.state.responses + 1
                : 5
        });

    };

    // componentDidMount function to get question
    componentDidMount() {
        this.getQuestions();
    }

    result = () => {
        document.write("Score : " + this.state.score);
    }



    render() {
        // const start = () => {
        //     document.write("Questions !");
        // }


        return (<div className="container">
            <div className="title">
                <h2>Quizz App</h2>
            </div>

            {this.state.secondPage === true ? (<div className="box">
                <div className="questionStyle">
                    {this.state.questionBank.map(({ question, answers, correct, questionId }) => <QuestionBox question=
                        {question} options={answers} key={questionId}
                        selected={answer => this.computeAnswer(answer, correct)}/>)}

                    <div>
                        {
                            this.state.responses === 5
                                ? (<button className="resultBtn" onClick={this.second}>Show Results</button>)
                                : null
                        }
                    </div>
                </div>
            </div>) : (this.state.thirdPage === true) ?
                (<Result score={this.state.score} playAgain={this.playAgain} />)
                : <button className="startBtn" onClick={this.first} data-testid="start">Start Quiz
                </button>}

        </div>)
    }
}

export default App;
