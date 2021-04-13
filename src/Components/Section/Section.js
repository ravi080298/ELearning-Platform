import React from 'react';
import FifthSection from './FifthSection';
import FirstSection from './Firstsection';
import FourSection from './FourSection';
import SecondSection from './SecondSection';
import SeventhSection from './SeventhSection';
import SixthSection from './SixthSection';
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