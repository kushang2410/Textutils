import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Nav(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
            <li className="nav-item">
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                  <input className="form-check-input" onClick={props.togglemode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
