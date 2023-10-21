import React,{useEffect, useState} from 'react'

export default function Hidden({display,text,top,left}) {
   
  return (
    <div>
      <button style={{backgroundColor:"rgba(0,0,0,0)",position:"absolute",left:`${left}`,top:`${top}`,zIndex:"2", border:"1px solid rgba(0,0,0,0)",width:"5vw", height:" 5vh", display:`${display}`}} type="button" className="btn btn-secondary" data-toggle="tooltip" data-html="true" title={`${text}`}>
     </button>
    </div>
    
  )
}
