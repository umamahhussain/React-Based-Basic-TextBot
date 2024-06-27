import React,{useState} from 'react'


export default function TextBox(props) {
    const [text,setText]=useState('Enter Text Here')

    const handleUPCASEclick=()=>{
        setText(text.toUpperCase())
    }
    const handleLOWCASEclick=()=>{
        setText(text.toLowerCase())
    }
    const handleonChange=(event)=>{
        setText(event.target.value)
    }



    return (
        <div>

            <div className="mb-3">
                <label for="InputBox" className="form-label">{props.title}</label>
                <textarea className="form-control" id="InputBox" value={text} onChange={handleonChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUPCASEclick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary" onClick={handleLOWCASEclick}>
                Convert to Lowercase
            </button>
           
        </div>
    )
}
