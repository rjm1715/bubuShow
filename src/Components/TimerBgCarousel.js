import React from 'react'
import bckimg00 from "../images/timer/bck-img-0.jpg" 
import bckimg01 from "../images/timer/bck-img-1.jpg" 
import bckimg02 from "../images/timer/bck-img-2.jpg" 
import bckimg03 from "../images/timer/bck-img-3.jpg" 
import bckimg04 from "../images/timer/bck-img-4.jpg" 

export default function TimerBgCarousel() {
  return (
    <div>
         <p>Background Images</p>
        <img className="bckimg-landscape" src={bckimg00} alt="" />
        <img className="bckimg-potrait" src={bckimg01} alt="" />
        <img className="bckimg-potrait" src={bckimg02} alt="" />
        <img className="bckimg-potrait" src={bckimg03} alt="" />
        <img className="bckimg-landscape" src={bckimg04} alt="" />
    </div>
  )
}
