import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './Nav.css'
import { useEffect } from 'react';

export default function Nav(props) {

    const [mystyle, setmystyle] = useState({
        backgroundColor: 'gray',
        color: 'black'
    });
    

    function handleStyle() {

        if (props.mode === 'dark') {
            setmystyle({
                backgroundColor: 'gray',
                color: 'black'
            })
        }

        else {

            setmystyle({
                backgroundColor: 'rgb(49, 46, 46)',
                color: 'white'
            })

        }

    }

    //or

    // let darkStyle = {
    //     backgroundColor: 'rgb(49, 46, 46)',
    //     color: 'white'
    // }

    // let lightStyle = {
    //     backgroundColor: 'gray',
    //     color: 'black'
    // }
    // style={props.mode==='light' ? lightStyle : darkStyle}   nav tag ma a linr add kari devani

    function changeColor(color) {
        document.getElementsByClassName("navbar")[0].style.backgroundColor = color;
    }


    return (
        <>

            <nav className="navbar" style={mystyle}>
                <div className='title' style={props.mode === 'light' ? { color: 'black' } : { color: 'white' }}>
                    <h3>{props.title}</h3>
                </div>
                <div className='main'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>

                <div className='color'>
                    <div className='box-size red' onClick={() => { changeColor('rgb(243, 96, 96)') }}></div>
                    <div className='box-size yellow' onClick={() => { changeColor('rgb(239, 239, 122)') }}></div>
                    <div className='box-size green' onClick={() => { changeColor('rgb(66, 117, 66)') }}></div>
                </div>

                <div className='mode'>
                    <label className="switch">
                        <input type="checkbox" onClick={() => { props.handleMode(); handleStyle() }} />
                        <span className="slider round"></span>
                    </label>
                    <p>Dark Mode</p>
                </div>

            </nav>
        </>
    )
}

Nav.propTypes = {
    title: PropTypes.string,
}

Nav.defaultProps = {
    title: 'navbar',
}
