import React, { useState } from 'react';

function TextData(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    };

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    };

    const handleClearText = () => {
        let newtext = "";
        setText(newtext);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
    };

    return (
        <>
            <div style={{color:props.mode === 'dark' ? 'white':'gray'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8"
                        placeholder="enter your description" style={{backgroundColor: props.mode 
                        === 'dark' ? 'white':'rgb(189 186 207 / 30%)',color:props.mode === 'dark' ? 'white':'gray'}}></textarea>
                </div>
                <div className='my-4'>
                    <button className="button btn btn-primary fw-bold my-1" onClick={handleUpClick}>Upper</button>
                    <button className="button btn btn-warning ms-3 fw-bold my-1" onClick={handleLoClick}>Lower</button>
                    <button className="button btn btn-secondary text-white ms-3 fw-bold my-1" onClick={handleClearText}>Clear</button>
                    <button className="button btn btn-success ms-3 fw-bold my-1" onClick={copyToClipboard}>Copy to Clipboard</button>
                    <button className="button btn btn-danger ms-3 fw-bold my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                </div>
                <p> {text.split(/\s+/).filter((ele)=>{return ele.length!== 0}).length} words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").length} minutes to read</p>
                <h2 className='mt-2'>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextData;
