import React , {useState} from 'react'
//hooks in react are to used to use differeent functions of react from your compoonents
//useState declares state variables that we can update directly


export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!!", "success");
    }
    const handleLowClick =()=>{
        console.log("lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!!", "success");
    }
const [textColor, setTextColor] = useState('black');
const [isBlack, setIsBlack] = useState(true);

const handleChnageTextColor = (e) => {
  setIsBlack(!isBlack);
  setTextColor(isBlack ? 'Red' : 'black ');
}


    const handleClear =()=>{
      let newText =('');
      setText(newText)
      props.showAlert("Text cleared!!!", "success");
  }

  const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Text Reversed!!", "success");
  };
  
    const handleOnChange =(event)=>{
        console.log("On change")
        setText(event.target.value);
       
    } //this function is important to change the state on typing 

    //This is the normal syntax that one uses for hooks


    const [text, setText] =useState(''); 


//text='newText' //wrong way to chnage the text
// setText("new Text") correct way to change the text 
  return (
    <>
  
        <div className='container'>
        <h1>{props.heading} </h1>

<div className="mb-3" style={{color : props.Mode === 'dark' ? 'white' : 'black'}}>
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.Mode === 'dark' ? 'grey' : 'white'}} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-dark mx-3" onClick={handleUpClick}>Convert to UpperCase</button>

<button className="btn btn-dark mx-3"  onClick={handleLowClick}>Convert to lower case</button>
<button className="btn btn-dark mx-3 " onClick={handleClear}>Clear Text</button>
<button className="btn btn-dark mx-3 " onClick={handleinverseclick}> Reverse the text</button>
   <label className="switch">
     <input type="checkbox" value={isBlack} onChange={handleChnageTextColor} />
     <span className="slider round" />
   </label>
   <small style={{ color:textColor}} className="switch-container_text">Shravani</small>

 
</div>
 <div className="container" >
    <h1> Your text Summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> {0.032 * text.split(" ").length} Minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text :"Enter something into textBox here to preview here"}</p>
   
 </div>
</>
  )
}
