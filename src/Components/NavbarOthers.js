import React from 'react'

export default function NavbarOthers() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light navbar-self">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://candid-seahorse-6d440f.netlify.app/Stories">Stories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://candid-seahorse-6d440f.netlify.app/Quiz">Quiz</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://candid-seahorse-6d440f.netlify.app/FAQs">FAQ's</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://candid-seahorse-6d440f.netlify.app/Timer">Timer</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
