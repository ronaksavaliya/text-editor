import React, { useState } from 'react'
import './Form.css'

export default function Form(props) {

    function handleUpClick() {
        let newText = text.toUpperCase();
        settext(newText);
    }

    function handleLoClick() {
        let newText = text.toLowerCase();
        settext(newText);
    }

    function handleClClick() {
        settext('');
    }

    let handleOnChange = (event) => {
        settext(event.target.value);
    }

    const [text, settext] = useState('');
    let arr = text.split(' ');
    return (
        <>
            <div className='text' style={props.mode==='light' ? {color:'black'} : {color:'white'}}>
                <h2>Enter Your Text Below</h2>
            </div>
            <div className='textArea'>
                <textarea name="" id="" cols="70" rows="20" value={text} onChange={handleOnChange}></textarea>
            </div>

            <div>
                <button disabled={text.length===0} className='btn1 btn' onClick={handleUpClick}>Upper Case</button>
                <button disabled={text.length===0} className='btn2 btn' onClick={handleLoClick}>Lower Case</button>
                <button disabled={text.length===0} className='btn3 btn' onClick={handleClClick}>Clear</button>
            </div>

            <div className='text2' style={props.mode==='light' ? {color:'black'} : {color:'white'}}>
                <h3> Your Text Summary </h3>
                {/* <p> {arr[arr.length - 1] === '' ? arr.length - 1 : arr.length} words {text.length} characters</p> */}

                <p> {arr.filter((ele)=>{return ele.length!==0}).length} words {text.length} characters</p>
            </div>

        </>
    )
}
