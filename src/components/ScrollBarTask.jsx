import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ScrollBarTask = () => {
    const[percent, setPercent] = useState(0)
    const[inputValue, setInputValue] = useState(null)
    const plusPercent = () =>{
        if(percent>=100){
            alert("enough")
            return
        }
        setPercent(+percent+10)
    }
    const minusPercent = () =>{
        if(percent<=0){
            alert("enough")
            return
        }
        setPercent(percent-10)
    }
    const handleInput = (value) =>{
        setInputValue(value)
    }
    const handleButton = () =>{
        if(inputValue < 0 || inputValue > 100){
            alert("wrong input")
            return
        }else{
            setPercent(inputValue)
        }
        
    }
    return (
        <div>
            <div style={{width: 500, height: 30, border: "3px solid black", position: "absolute"}}>
                <div style={{ width: `${percent}%`, height: 26, backgroundColor:"blue",position: "relative"}}></div>
            </div>
            <div style={{marginTop: 20, position: 'relative', top: 40}}>
            <Button onClick={plusPercent}>+10%</Button>
            <Button variant='danger' onClick={minusPercent}>-10%</Button>
            </div>
            <input onChange={(e) => handleInput(e.target.value)} style={{marginTop: 50}} placeholder='enter number' type="number" />
            <button onClick={handleButton}>Submit</button>
        </div>
    );
};

export default ScrollBarTask;