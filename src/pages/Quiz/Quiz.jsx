import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import './Quiz.css'
import Questions from "../../components/Questions/Questions";

 
const Quiz = ({name, score, setScore, questions }) => { 

  const [option, setoption] = useState()
  const [currQues, setCurrQues] = useState(0)

    useEffect(() => {
        setoption(questions && handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ]))
    },[questions, currQues])

    const handleShuffle = (options) => {
      return options.sort(() => Math.random() - 0.5);
    }

    return (
      <>
        <div className="quiz">
            <span className="subtitle">Welcome, {name}</span>

            {questions ? <> 
            <div className="quizInfo">
              <span>{questions[currQues].category}</span>
              <span>Score: {score}</span>
            </div>

            <Questions 
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            option={option}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            />
             </>  : (
              <CircularProgress style={{margin: 100}} color='inherit' size={150} thickness={1}/>
            )}
        </div>
      </>
    )
  }
  
  export default Quiz