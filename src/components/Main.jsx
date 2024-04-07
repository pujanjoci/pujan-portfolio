import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import placeholderImage from '../assets/placeholder.jpg';
import profileImage from '../assets/pujan.png';

const Main = () => {
    return (
        <div id='main' style={{ position: 'relative' }}>
            <img className="w-full h-screen absolute object-cover object-left scale-x-1" src={placeholderImage} alt="Placeholder-Image" style={{ zIndex: -1 }} />
            <a href="#profile">
                <img id="profile" className="absolute bottom-0 left-10 w-3/6" src={profileImage} alt="Profile-Image" style={{  zIndex: 1, maxWidth: '100%' }} />
            </a>
            <div className="w-full h-screen absolute top-0 left-0 bg-white/30"></div>
            <div className="max-w-[100%] m-auto h-screen flex justify-center items-center" style={{ zIndex: 1 }}>
                <div className=" max-w-[100%] w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sn:text-5xl text-4xl font-semibold text-black-100">
                        I'm Pujan Joshi
                    </h1>
                    <h2 className="flex mt-4 sn:text-3xl text-2xl font-mono">
                        I'm a
                        <span style={{ marginLeft: '12px' }}>
                            <TypeAnimation
                                sequence={[
                                    'Web-Developer',
                                    2000,
                                    'Coder',
                                    2000,
                                    'Guinea Pig',
                                    1000,
                                    'Content-Writer',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em' }}
                                repeat={Infinity}
                            />
                        </span>
                    </h2>

                    <div className="flex justify-between pt-6 max-w-[180px] w-full text-gray-700" style={{ zIndex: 1 }}>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter style={{ cursor: 'pointer' }} size={20} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub style={{ cursor: 'pointer' }} size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ cursor: 'pointer' }} size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{ cursor: 'pointer' }} size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
