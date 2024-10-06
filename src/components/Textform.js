import React, {useState} from 'react'


export default function Textform(props) {
  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert to upper case</button>
    </div>
  )
}
