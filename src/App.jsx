import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import React, { useState } from 'react';
import axios from 'axios'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import Result from './pages/Resuklt/Result'

function App() { 
  const [name, setName] = useState()
  const [questions, setQuestion] = useState()
  const [score, setScore] = useState(0)

  const fetchQUestions = async (category='',difficulty='') => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${ difficulty}`}&type=multiple`)

    console.log(data)
    setQuestion(data.results)
  }

  return (
    <>
    <BrowserRouter>
      <div className='app' style={{backgroundImage: "url(./ques1.png)"}}>
        <Header />  
        <Routes>  
        <Route path="/" element={<Home name={name} setName={setName} fetchQUestions={fetchQUestions}/>} /> 
        <Route path="/quiz" element={<Quiz questions={questions} name={name} score={score} setScore={setScore} />} /> 
        <Route path="/result" element={<Result name={name} score={score}/>} /> 
        </Routes>
      </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
