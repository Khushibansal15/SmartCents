import './Navbar.css';
import Image from './Image'
import logo from './logo.png'
import React, { useState } from 'react'
import { scrollTo } from 'react-scroll/modules/mixins/animate-scroll';
import { scroller } from 'react-scroll';
import { Link, Navigate, useNavigate } from 'react-router-dom';

 function Navbar(){
    function functionHandler(){
        window.scrollTo({
            top: 850,
            left: 100,
            behavior: "smooth",
          });
    }

    function support(){
        window.scrollTo({
            top: 2500,
            left: 100,
            behavior: "smooth",
          });
    }

    function faq(){
        window.scrollTo({
            top: 1550,
            left: 100,
            behavior: "smooth",
          });
    }
    const navigate=useNavigate()
    
    return(
        
           <div>
             <nav>
                <div className='logo'><img className='logo' src={logo}/></div>
                <div className='navbar'>
                    <div>Home</div>
                    <div onClick={functionHandler}>Why Us?</div>
                    <div onClick={faq} >Support</div>
                    <div onClick={support} >Contact us</div>
                    <button class-Name='loginBtn' onClick={()=>navigate('/login')}>Sign in</button>
                </div>
            </nav>
            <Image/>
           </div>
    )
 }
    

  
export default Navbar;
