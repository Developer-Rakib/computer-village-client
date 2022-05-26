import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const PortfolioBanner = () => {
    return (
        <div className='Container flex-wrap py-10 sm:py-0 flex items-center justify-center h-[90vh]'>
                <div className='sm:text-left w-full sm:w-7/12'>
                    <h1 style={{ fontFamily: "font-family: 'Roboto Slab', serif;" }} className="text-3xl sm:text-5xl text-primary font-bold">Md Tazul Islam Rakib</h1>
                    <p style={{ fontFamily: 'Open Sans,sans-serif' }} className='italic  py-4'>
                        <Typed
                            strings={['React Frontend Developer || MERN Stack', 'JavaScript Developer']}
                            typeSpeed={70}
                            backSpeed={40}
                            loop
                        />
                    </p>


                    <Link
                        to="../../img/Resume-1.pdf" target="_blank" download
                        style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class={`hover:bg-white  bg-primary sm:mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-10 py-2`}>Download Resume</Link>

                    <a target={'_blank'} href="https://www.linkedin.com/in/developer-rakib1/">
                        <button style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition hover:text-white rounded-full mt-5 text-primary border-2 border-primary px-8 sm:px-10 py-1.5 sm:py-2">Hire Me</button>
                    </a>

                </div>
                <img className='w-11/12 mt-2 sm:mt-0 sm:5/12' src="https://miro.medium.com/max/1400/0*6x7soxgALSibn7zS" alt="" />
            </div>
    );
};

export default PortfolioBanner;