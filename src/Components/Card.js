import React from 'react'

export default function Card({bg,headline,storyNo}) {

    let link = `/Stories/story${storyNo}`;
    return (
        <div  style={{backgroundImage:`url(${bg})`}}class="card bg-dark text-white card-self">
            <a style={{position:"absolute", bottom:"0",left:"0", width:"100%",backgroundColor:"rgba(128, 128, 128, 0.3)",color: "White", textShadow:"1px 1px 1px black"}} href={link} class="btn">{headline}</a>
        </div>
    )
}
