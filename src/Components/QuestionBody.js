import React from 'react'

export default function QuestionBody({ question, answer, no }) {
  return (
    <div className='body bg-blur' style={{ textAlign: "justify" }}>
      <p>
        {question}
        <button style={
          { margin: "0 1vw", borderRadius: "30px", backgroundColor: "rgba(238, 130, 238, 0.601)", color: "black" }
        } class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target={`#multiCollapseExample${no}`} aria-expanded="false" aria-controls="collapseExample">{question? "Answer" : "Show"}</button>
      </p>
          <div class="collapse" id={`multiCollapseExample${no}`}>
          <div className="card card-body">
           {answer}
         </div>
          </div>
      </div>
  )
}
