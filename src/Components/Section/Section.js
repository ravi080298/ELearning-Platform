import React from 'react';
import FirstSection from './Firstsection';
import FourSection from './FourSection';
import SecondSection from './SecondSection';
import SeventhSection from './SeventhSection';
import ThirdSection from './ThirdSection';


const Section = () =>{
    return (
        <div className="section-container">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourSection />
            {/* <FifthSection />
            <SixthSection /> */}
            <SeventhSection />
        </div>
    )
}

export default Section;