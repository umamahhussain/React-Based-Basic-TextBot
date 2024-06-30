import React, { useState } from 'react'
import { BsRobot } from "react-icons/bs";

export default function TextBox(props) {
    const [text, setText] = useState('')
    const [btnText, setBtnText]=useState('Dark Mode')
    const [isDarkTheme,setDarkTheme]=useState(true) //for button color
    const [theme,setTheme]=useState(
        {
            color:'black',
            backgroundColor:'white',
            width:'100%'
        }
    )

    const handleUPCASEclick = () => {
        setText(text.toUpperCase())
    }
    const handleLOWCASEclick = () => {
        setText(text.toLowerCase())
    }
    const handleVOICEclick = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }
    const handleCLEARclick = () => {
        setText('')
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const SwitchTheme=()=>{
        if(theme.color==='white'){
            setTheme({color:'black',backgroundColor:'white',
                width:'100%'})
            setBtnText('Dark Mode')
            setDarkTheme(false)
        }
        else{
            setTheme({color:'white',backgroundColor:'black',
                width:'100%'})
            setBtnText('Light Mode')
            setDarkTheme(true)
        }
    }


    return (
        <div className="TextBox" style={theme}>
            <div style={{ display: 'flex', justifyContent:'right'}} className='my-1'>
                {
                    isDarkTheme?
                    (
                        <div className='my-2 mx-2'>

                            <button className="btn btn-light" type="submit" onClick={SwitchTheme}>{btnText}</button>
                        </div>
                    )
                    :(
                        <div className='my-2 mx-2'>
                        <button className="btn btn-dark" type="submit" onClick={SwitchTheme}>{btnText}</button>
                        </div>
                    )
                }
                
            
            </div>

            <div className="container mb-3" >
                <label for="InputBox" className="form-label my-2" style={{ display: 'flex', justifyContent: 'center' }}>
                    <h4 className='playwrite-mx-font'>{props.title}<BsRobot />
                    </h4>
                </label>

                <textarea className="form-control" id="InputBox" value={text} onChange={handleonChange} rows="8"></textarea>
            </div>
            <div >

            <button className="btn btn-info mx-2" onClick={handleUPCASEclick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-info mx-2" onClick={handleLOWCASEclick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-info mx-2" onClick={handleVOICEclick}>
                Text to Speech
            </button>
            <button className="btn btn-info mx-2" onClick={handleCLEARclick}>
                Clear Text
            </button>
            </div>

            <div className="container my-3" >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
            </div>
            <div className="container my-3" >
                <h2>Preview</h2>
                <p>{text}</p>
            </div>



        </div>
    )
}