import React from 'react';
import { Link } from 'react-router-dom';
import smallLogo from '../../img/smallLogo.png';

const Footer = () => {
    return (
        <>
            <footer class="footer  p-10 bg-neutral text-neutral-content">
                <div className='mx-auto sm:mx-0'>
                    <img src={smallLogo} alt="" />
                    <p>Computer Village<br />A Shop of Parts of Computer</p>
                </div>
                <div className=''>
                    <span class="footer-title">Services</span>
                    <Link to={''} class="link link-hover">Branding</Link>
                    <Link to={''} class="link link-hover">Design</Link>
                    <Link to={''} class="link link-hover">Marketing</Link>
                    <Link to={''} class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to={''} class="link link-hover">About us</Link>
                    <Link to={''} class="link link-hover">Contact</Link>
                    <Link to={''} class="link link-hover">Jobs</Link>
                    <Link to={''} class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to={''} class="link link-hover">Terms of use</Link>
                    <Link to={''} class="link link-hover">Privacy policy</Link>
                    <Link to={''} class="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer class="footer px-10 py-4 border-t bg-neutral text-neutral-content border-base-300 ">
            <p className='mx-auto flex flex-col  sm:flex-row'>Copyright © 2022 - All right reserved by <a className='text-primary hover:underline hover:tracking-wide transition-all  ' href="https://github.com/Developer-Rakib">Developer Rakib</a></p>
                
            </footer>
        </>
    );
};

export default Footer;