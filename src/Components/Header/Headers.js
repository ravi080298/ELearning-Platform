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
                <span className="cm dec tagName">COURSERA</span>
                <Explore />
                <input type="text"className="cm dec input1" placeholder="What do you want to learn?" name="search" />   
                <span className="cm dec btn2 spec"><img src={src} alt="search" className="imgtag" /></span>
                </div> 
                <div className="c2">
                    <span  className="dec">For Enterprises </span>
                    <span className="dec">For Students</span>
                    <span href="" className="dec chnageColor">Log In</span>

                <button className="cm btn1 ">Join for Free</button>
                {/* <button className="cm btn">Log In</button>
                <button className="cm btn">For Students</button>
                <button className="cm btn">For Enterprises</button> */}

                </div>
            </div>
        </>
    )
}

export default Headers;