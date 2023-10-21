import React, { useState } from 'react'

export default function QuizBody({ question, answer, hint, setPieces }) {
    const [entry, setEntry] = useState("");
    const [checkClass, setCheckClass] = useState("btn btn-primary");
    const [textButton,setTextButton] = useState("Check");

    const handleSuccess = () => {
        setPieces(1000);
        setCheckClass("btn btn-success");
        setTextButton("Yay!")
        setTimeout(() => {  
            setPieces(0);  
        }, 1000)
        setTimeout(()=>{
            setCheckClass("btn btn-primary");
            setTextButton("Check");
        },1500)
    }
    const handleFail = () => {
        setCheckClass("btn btn-danger");
        setTextButton("Don't you know this? :(")
        setTimeout(() => {
            setCheckClass("btn btn-primary");
            setTextButton("Check");
        }, 1500)
    }

    return (
        <div className="quizbody bg-blur" style={{ textAlign: "justify" }}>
            <p>{question}</p>
            <input type="text" value={entry} placeholder='I Love You!' onChange={(e) => {
                setEntry(e.target.value);
            }} />
           <p style={{margin:"1vh 0"}}>Hint: {hint}</p>
            <button className={`${checkClass}`} onClick={() => {
                entry.toLowerCase().includes(answer) ? handleSuccess() : handleFail();
            }}>{textButton}</button>
        </div>
    )
}
