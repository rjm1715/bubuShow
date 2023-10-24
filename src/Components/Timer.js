import React, { useState,useEffect } from 'react'
import Confetti from 'react-confetti';
import NavbarOthers from './NavbarOthers';
import img from "../images/timer/image.jpg"
import TimerCarousel from "./TimerCarousel"
import TimerBgCarousel from './TimerBgCarousel';

export default function Timer() {
    const [time,setTime] = useState("");
    const [displayTimer,setDisplayTimer] = useState("inline-block");
    const [displayEnd,setDisplayEnd] = useState("none");
    const [pieces,setPieces] = useState(0);
    const [carousel,setCarousel]= useState("block");
    const [back,setBack] = useState("none");

    const deadline = new Date("oct 29, 2023 00:00:00").getTime();

    const calcTime= ()=>{
        let now = new Date().getTime();
        let t= deadline-now;
        let days = Math.floor(t/(1000*60*60*24));
        let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
        let minutes = Math.floor((t%(1000*60*60))/(1000*60));
        let seconds = Math.floor((t%(1000*60))/1000);
        let dayString= days.toString();
        let hourString= hours.toString();
        let minString= minutes.toString();
        let secString= seconds.toString();

        let timeUpdate = dayString + " Days " + hourString + " Hours " + minString + " Minutes " + secString + " Seconds";
        if(t>0)setTime(timeUpdate);
        else {
            setDisplayTimer("none");
            setDisplayEnd("inline-block");
            setPieces(1000);

            setTimeout(()=>{
              setPieces(0);
            },10000);
        }
    }

    const handleCheck= ()=>{
      setCarousel("none");
      setBack("block");
    }

    const handleunCheck = ()=>{
      setCarousel("block");
      setBack("none");
    }

    useEffect(()=>{
        setTimeout(()=>{
                calcTime();
        },1000)
    },[time]);

  return (
    <>
      <Confetti  width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={pieces} 
      />
      <NavbarOthers></NavbarOthers>
      <div className='body' style={{display:`${displayTimer}`}}>
      <p>{time}</p>
      <p>Will be revealed after the timer ends!</p>
      </div>
      <div className='body' style={{display: `${displayEnd}`}}>
        <p>Happy 4th my sweetums! Will always wish to have you by my side, like you have been in the last 4 years and made me as happy as beautiful you are!! Love you to the moon and back!</p>

        <img src={img}  style={{height:"80vh", width:"30vw", borderRadius:"10px", border: "2px solid grey"}} alt="Love!" />
      </div>
      <div className='body' style={{display: `${displayEnd}`}}>
        <p>This is a showcase/tutorial video for handling the gift!</p>
        <p ><a style={{color:"black"}} href="https://drive.google.com/file/d/1hB1D2VZWNdr0FMt2boQW2ts6eyxTvf8w/view?usp=sharing">Follow this Link for the video. (I tried to put it here only, but the file size was out of allowance!)</a></p>
        <p>It seems a lil girlish but this is the best I found from the resources,which suited my level of artistry.</p>
        <div style={{justifyContent:"left"}}>
        <p >PS: Have made the correction in the 6th card. (Do tell me the changes I had to make!) <br /> For background of this video either you can try and find it on this page or can ask me to share it with you directly (the easier one). Lets see, which one will you choose!
        </p>
        </div>
      </div>
      <div className='body' style={{display:`${displayEnd}`}}>
        <input type="checkbox" id="back-check" onClick={()=>{
          document.getElementById("back-check").checked? handleCheck():handleunCheck();
        }} />
        <div style={{display:`${carousel}`}}>
        <TimerCarousel></TimerCarousel>
        </div>
        <div style={{display:`${back}`}}>
        <TimerBgCarousel/>
        </div>
      </div>
    </>
  )
}
