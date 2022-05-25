import React from 'react';
import Aboutme from './Aboutme';
import PortfolioBanner from './PortfolioBanner';
import Project from './Project';

import Skills from './Skills';

const MyPortfolio = () => {
    return (
        <div className=' mt-[66px] bg-black text-white'>
            <PortfolioBanner></PortfolioBanner>
            <div className='py-10 Container'>
                <h1 className="text-4xl border-b-4  mb-10 mt-4 border-primary inline-block">Skills</h1>
                <div className='flex justify-evenly flex-wrap'>
                    <Skills
                        name="HTML"
                        img="https://i.ibb.co/RN0t6Xh/html.png"
                    ></Skills>
                    <Skills
                        name="CSS"
                        img="https://i.ibb.co/2PsYWF8/3920311-middle.png"
                    ></Skills>
                    <Skills
                        name="Bootstrap"
                        img="https://i.ibb.co/KDGNZDH/bootstrap.png"
                    ></Skills>
                    <Skills
                        name="Material Ui"
                        img="https://i.ibb.co/bQzjJ5p/material.png"
                    ></Skills>
                    <Skills
                        name="Tailwind"
                        img="https://i.ibb.co/X2VprfD/tailwind-css-removebg-preview.png"
                    ></Skills>

                    <Skills
                        name="SASS"
                        img="https://i.ibb.co/LNp1Qh9/sass.png"
                    ></Skills>

                    <Skills
                        name="JavaScript"
                        img="https://i.ibb.co/MC3fXBJ/js.png"
                    ></Skills>

                    <Skills
                        name="React"
                        img="https://i.ibb.co/Y84SPhn/Png-Item-6644509.png"
                    ></Skills>


                    <Skills
                        name="Node"
                        img="https://i.ibb.co/mSK54DF/node.png"
                    ></Skills>
                    <Skills
                        name="Express Js"
                        img="https://i.ibb.co/Wv8tHcH/IMG-20220525-151131.jpg"
                    ></Skills>
                    <Skills
                        name="Heroku"
                        img="https://i.ibb.co/SmgyHtR/heroku.png"
                    ></Skills>

                    <Skills
                        name="Mongo DB"
                        img="https://i.ibb.co/VgRnKZt/pngkit-ifunny-watermark-png-2254691.png"
                    ></Skills>

                    <Skills
                        name="Git  "
                        img="https://i.ibb.co/dWK5RCW/git.png"
                    ></Skills>




                </div>
            </div>
            <Project></Project>
            <Aboutme></Aboutme>

        </div>
    );
};

export default MyPortfolio;