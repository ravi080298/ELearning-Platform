import React from 'react';
import OnlineCertificate from './OnlineCertificate';
import OnlineCourses from './OnlineCourses';
import OnlineDegree from './OnlineDegree';
import TopSpecialization from './TopSpecialization';


const Footer = () =>{
    return (
        <div className ="footer-container">
            <OnlineCourses />
            <TopSpecialization />
            <OnlineCertificate />
            <OnlineDegree />
        </div>
    )
}

export default Footer;