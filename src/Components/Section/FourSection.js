import React from 'react';
import './four.css';

const FourSection = () =>{
    return (
        <div className ="section-container4">
            <img className="image-css" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2QjC04BM3lOBkCBTcgcCiz/46dbd19b10b3a36350b1c39cc40b599d/ThreeImages-Marketing.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40" alt ="img1"  />
            <div className="container4-para">
                <div className="para-text1">World-class learning for you</div>
                <div className="para-text2">Pursue <b>a promotion, a raise, or switch careers. 89% of learners</b> who have taken a course <b>report career benefits</b>.</div>
                <div className="para-text3">- Coursera Learner Outcome Survey, India (2021)</div>
                <div className="button-tag">
                    <div className="join-today">Join Today</div>
                    <div className="para-text4">Try Coursera for Bussiness</div>
                </div>
            </div>
        </div>
    )


}
export default FourSection;