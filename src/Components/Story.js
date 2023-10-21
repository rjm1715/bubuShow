import React from 'react'
import NavbarOthers from './NavbarOthers'

export default function Story(props) {

  let paras= props.story.split("\n");
  return (
    <>
      <NavbarOthers></NavbarOthers>
      <div style={{textAlign:'justify', boxShadow:"5px 5px 5px black", color:"black"}} className='body'>
        <h1>{props.headline}</h1>
        <hr />
        {
          paras.map((para)=>{
            return (
              <p className='story'>{para}</p>
            )
          })
        }
      </div>
    </>
  )
}







