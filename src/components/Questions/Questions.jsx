import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"; 
import './Questions.css'
 
const Questions = ({currQues, setCurrQues, questions, option, correct,
    score, setScore}) => {

    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleSelect = (i) => {
        if(selected===i && selected===correct){
            return "select"
        }
        else if(selected===i && selected!==correct){
            return "wrong"
        }
        else if(i===correct){
            return "select"
        }
    }

    const handleCheck = (i) => {
        setSelected(i)
        if(i===correct) setScore(score + 1)
        setError(false)
    }

    const handleNext = () => {
        if(currQues > 8){
            navigate('/result')
        }
        else if(selected){
            setCurrQues(currQues + 1)
            setSelected()
        }
        else{
            setError('Please select an option first')
        }
    }

    const handleQuit = () => {
        setCurrQues(0)
    }

  return (
    <div className='question'>
        <h1>Question: {currQues + 1}</h1>

        <div className="singleQUes">
            <h2>{questions[currQues].question}</h2>

            <div className="options">
                {error && <ErrorMessage />}
                {option && option.map((i)=>(
                        <button onClick={() => handleCheck(i)} className={`checkAnswer ${selected && handleSelect(i)}`} key={i} disabled={selected}>{i}</button>
                ))}
            </div>

            <div className="controls">
              <Button variant='contained' size="large" style={{width: 185}} href="/" onClick={() => handleQuit()}>Quit</Button>
              <Button variant='contained' size="large"  style={{width: 185}} onClick={() => handleNext()}>Next Qustion</Button>
            </div>
        </div>
    </div>
  )
}

export default Questions
