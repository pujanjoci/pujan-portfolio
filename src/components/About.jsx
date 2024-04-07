import React from "react";
import AboutItem from "./AboutItem";

const data = [
    {
        id: 1,
        year: 2014,
        text: 'I started my career as a web developer in 2014.',
        duration: '10 minutes',
        details: 'Example Data'
    },
    {
        id: 2,
        year: 2016,
        text: 'I continued my journey in 2016.',
        duration: '15 minutes',
        details: 'Example Data 2'
    },
    {
        id: 3,
        year: 2018,
        text: 'I achieved new milestones in 2018.',
        duration: '20 minutes',
        details: 'Example Data 3'
    }
]

const About = () => {
    return ( 
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#606060] mb-[20px]">
            About-Me
        </h1>
        <p className="mb-[30px]">
            I am a web developer with a passion for learning new technologies.
            I have a strong background in web development and I have a strong
            background in web design.
        </p>
        {data.map((item) => (
                <AboutItem 
                key={item.id}
                year={item.year} 
                text={item.text}
                duration={item.duration}
                details={item.details}
                />
            ))
        }
    </div>
    )
}

export default About;
