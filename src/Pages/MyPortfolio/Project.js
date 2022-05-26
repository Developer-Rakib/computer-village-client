import React from 'react';
import sara from '../../img/saramadicalhall.png';
import fancy from '../../img/fancybook.png';
import trends from '../../img/trends.png';
import "./style.css"

const Project = () => {
    return (
        <div className='Container pb-20'>
            <h1 className="text-4xl border-b-4  mb-10 mt-4 border-primary inline-block">Project</h1>
            <div className='flex justify-evenly flex-wrap project-container'>
                <div className='project w-11/12 sm:w-5/12 h-[370px] overflow-y-hidden'>
                    <div className='hover-content'>
                        <a target="_blank" href='https://assignment-10-d74ae.firebaseapp.com/'
                            style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white mb-2 transition hover:text-primary rounded-full text-white border-2 border-primary bg-primary px-10 py-2">Live Link</a>
                        <a target="_blank" href='https://github.com/Developer-Rakib/Sara-Medical-Hall'
                            style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition hover:text-white rounded-full bg-white text-primary border-2 border-primary px-9    py-2">Code Link</a>
                    </div>
                    <img className='' src={sara} alt="" />
                </div>
                <div className='project w-11/12 sm:w-5/12 h-[370px] overflow-y-hidden'>
                    <div className='hover-content'>
                        <a target="_blank" href='https://assignment-9-with-react-router.netlify.app/'  style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white mb-2 transition hover:text-primary rounded-full text-white border-2 border-primary bg-primary px-10 py-2">Live Link</a>
                        <a target="_blank" href='https://github.com/Developer-Rakib/fancy-book' style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition  hover:text-white rounded-full bg-white text-primary border-2 border-primary px-9 py-2">Code Link</a>
                    </div>
                    <img className='' src={fancy} alt="" />
                </div>
            </div>
            <div className=' project w-8/12 h-[400px] overflow-y-scroll mt-10 mx-auto '>
                <div className='hover-content'>
                    <a target="_blank" href='https://trends-9562b.firebaseapp.com/'  style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white transition mb-2 hover:text-primary rounded-full text-white border-2 border-primary bg-primary px-10 py-2">Live Link</a>
                    <a target="_blank" href='https://github.com/Developer-Rakib/trends-client' style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition  hover:text-white rounded-full bg-white text-primary border-2 border-primary px-9 py-2">Code Link</a>
                </div>
                <img src={trends} alt="" />
            </div>
        </div>
    );
};

export default Project;