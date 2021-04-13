import React from 'react';
import Explore from './Explore';
import './header.css';
import src from './search.png'


const Headers = () =>{
    return (
        <>
            <div className="container">
            <div className="c1">
                {/* <span className="cm dec">Coursera</span> */}
                <a className="cm dec tagName">COURSERA</a>
                <Explore />
                <input type="text"className="cm dec input1" placeholder="What do you want to learn?" name="search" />   
                <a className="cm dec btn2 spec"><img src={src} alt="image" className="imgtag" /></a>
                </div> 
                <div className="c2">
                    <a href="" className="dec">For Enterprises </a>
                    <a href="" className="dec">For Students</a>
                    <a href="" className="dec chnageColor">Log In</a>

                <button className="ml-5" className="cm btn1 ">Join for Free</button>
                {/* <button className="cm btn">Log In</button>
                <button className="cm btn">For Students</button>
                <button className="cm btn">For Enterprises</button> */}

                </div>
            </div>
        </>
    )
}

export default Headers;