import React, {useState} from 'react'

export default function Textform(props) {
  const handlUpClick = () => {
    console.log("UpperCase was clicked")
  };

  const handlOnChange = () => {
    console.log("UpperCase was clicked2")
  }
  const [text, setText] = useState('Enter text here');
  // setText("New Text");

  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" onChange={handlOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button onClick={handlUpClick}  className="btn btn-primary my-3">Convert to upper case</button>
    </div>
  )
}

