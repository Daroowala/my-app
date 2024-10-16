import React, {useState} from 'react'

export default function Textform(props) {
  const handlUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  };

  const handlLoClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  };

  const colorChange = () => {
    //console.log("Color Change" + text);
    let newColor = color === 'black'? 'red' : 'black';
    setColor(newColor)
  };

  const handlOnChange = (event) => {
    //console.log("handleOnChange");
    setText(event.target.value)
  }
  
  const [text, setText] = useState('Enter text here');
  // setText("New Text");
 
  const [color, setColor] = useState('black');

  
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" onChange={handlOnChange} value={text} id="myBox" rows="8" style={{ color: color }}></textarea>
        </div>
        <button onClick={handlUpClick}  className="btn btn-primary my-3">Convert to upper case</button>
        <button onClick={handlLoClick}  className="btn btn-primary mx-3">Convert to lower case</button>
        <button onClick={colorChange}  className="btn btn-primary mx-3">Color change</button>




    </div>

    <div className="container my-3">
      <h1>You text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length}Minits read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
};


