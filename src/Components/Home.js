import React, { useState} from 'react'
import Carousel from './Carousel'
import Hidden from './Hidden'
import dp from "../images/dp.jpg"


export default function Home() {

  const [display,setDisplay] = useState("none");

  return (
    <div>
      <div>
      <Hidden display={display} text={"How you doin?"} top={"3vh"} left={"0"} />
      <Hidden display={display} text={"You are the Monica to my Chandler!"} top={"90vh"} left={"50vw"} />
      <Hidden display={display} text={"You can't imagine how tight I will hug you when I will meet you!"} top={"90vh"} left={"90vw"} />
      <Hidden display={display} text={"I love You!"} top={"0"} left={"90vw"} />
      <Hidden display={display} text={"Your butt. Your butt is the bomb. There will be no survivors."} top={"85vh"} left={"20vw"} />
      <Hidden display={display} text={"You're my lobster!"} top={"50vh"} left={"5vw"} />
      <Hidden display={display} text={"This would not have been made if you it weren't for you. Hence, keep correcting me whenever I go wrong. Coz I will always love you my baccha, no matter what!"} top={"1vh"} left={"60vw"} />
      <Hidden display={display} text={"Sometimes, I miss your presence a lot!"} top={"90vh"} left={"5vw"} />
      <Hidden display={display} text={"You are very delicious ;) !!"} top={"0"} left={"40vw"} />
    </div>
      <div className='row page-container'>
        <div className='col-lg-3' style={{ backgroundColor:"white", color: "grey", borderRadius:"80px", border:"2px solid grey"}}>
          <img id="dp" src={dp} alt="Baby" />
          <b><hr /></b>
          <b><p> <a style={{color: "grey"}} className="nav-link" href="/">Home</a></p></b>
            <b><p> <a style={{color: "grey"}} className="nav-link" href="/Stories">Stories</a></p></b>
             <b><p> <a style={{color: "grey"}} className="nav-link" href="/Quiz">Quiz</a></p></b>
            <b><p><a style={{color: "grey"}} className="nav-link" href="/FAQs">FAQ's</a></p> </b> 
            <b><p><a style={{color: "grey"}} className="nav-link" href="/Timer">Timer</a></p> </b> 
            <input style={{margin:"2vh 1vw"}} type="checkbox" name="display" id="displayCheck" onClick={() => {
              document.getElementById("displayCheck").checked === true ? setDisplay("inline-block") : setDisplay("none");
            }} />
        </div>
         <div className='col-lg-9' style={{padding:"0"}}>
        <Carousel></Carousel>
       </div>
      </div>
    </div>
  )
}


