import logo from './logo.png'

import welcome from './welcom.png'
import profile from './profile.png'
import coins from './coin.png'
import { useState } from 'react'
import Dashboard from './Dashboard'
import './Navdash.css'
function Navbar(){
    const menu=["Dashboard","Log-out","Support"];
    const[open,setopen]=useState(false);
    return(
        <div>
            <div className='navbar'>
            <img className='logo'src={logo} ></img>
           <div className='nav2'> 
                <div className='nav'>
                <img className='coins' src={coins}></img><div className='coincount'>$100</div></div>
               <div>
               <img  onClick={()=>setopen(!open)} className='profile' src={profile}></img>
                {open &&(
                <div className='click'>
                    
                            {menu.map((item) => (<div  className='listitem' onClick={()=>setopen(false)} key={item}>{item}</div>)
                        )}
                    
                </div>)}
               </div>
            </div>
            

            </div>
        <div className='box'>
            <div className='text'><span className='user'>HELLO USER</span><br/>Welcome to SmartCents!Get Ready to Take Control of Your Financial Future</div>
            <img className ='welcome'src={welcome}></img>
        </div>
        <Dashboard/>
        </div>)}

export default Navbar
