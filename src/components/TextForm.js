import React from 'react'

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control " id="exampleFormControlTextarea1" rows="8"></textarea>

        <button className="btn btn-primary my-3">Convert to UPPER CASE</button>
      </div>
    </div>
  )
}

