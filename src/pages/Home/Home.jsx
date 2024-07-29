 import './home.css'
 import TextField from '@mui/material/TextField';
 import MenuItem from '@mui/material/MenuItem';
 import Button from '@mui/material/Button';
 import Categories from '../../Data/categories' 
 import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
 import { useNavigate } from "react-router-dom"; 
 import { useState } from 'react';

function Home({name, setName, fetchQUestions}) { 
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = () => {
           if(!category || !difficulty || !name){
            setError(true)
            return
        }
        else{
            setError(false)
            fetchQUestions(category,difficulty)
            navigate('/quiz')
        }
    }

    return (
      <>
        <div className='content'>
            <div className='settings'>
                <span style={{fontSize: 30}}>Quiz Setting</span>

                <div className="settings_select">
                    {error && <ErrorMessage />}

                <TextField style={{marginBottom: 25}} label="Enter Your Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>

                <TextField select style={{marginBottom: 25}} label="Select Category" variant='outlined' onChange={(e) => setCategory(e.target.value)} value={category}>
                    
                    {Categories.map((cat) => (
                        <MenuItem key={cat.category} value={cat.value}>
                            {cat.category}
                        </MenuItem>
                    ))} 
        
                </TextField>

                <TextField select label="Select Difficulty" variant='outlined' style={{marginBottom: 30}} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                    <MenuItem key="Easy" value="easy">Easy</MenuItem>
                    <MenuItem key="Medium" value="medium">Medium</MenuItem>
                    <MenuItem key="Hard" value="hard">Hard</MenuItem>
                </TextField>

                 <Button variant='contained' size="large" onClick={handleSubmit}>
                    Start Quiz
                 </Button>
                </div>

            </div>
            <img src="/quiz.svg.svg" alt="quiz img" className='banner'/>
        </div>
      </>
    )
  }
  
  export default Home