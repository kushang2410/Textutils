import React from 'react'

function About(props) {
  return (
    <>
      <div className="card col-sm-12 col-md-6 col-lg-3" style={{backgroundColor: props.mode 
        === 'dark' ? 'white':'rgb(189 186 207 / 30%)',color:props.mode === 'dark' ? 'white':'gray'}} cls>
        <img src="https://png.pngtree.com/png-vector/20240411/ourmid/pngtree-illustration-of-lord-hanuman-for-jayanti-festival-card-background-png-image_12278258.png"
         className="card-img-top" alt=""/>
         <div className="card-body">
            <h5 className="card-title fw-bold">Hanuman</h5>
            <p className="card-text">A Hindu god who is half-monkey, half-human, and is known for his strength, perseverance, and devotion</p>
         </div>
      </div>
    </>
  )
}

export default About
