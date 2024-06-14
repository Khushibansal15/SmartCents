import '../dash/Navdash.css';
import './navblack.css'
import logo from './logo.png'
import { useState } from 'react';
import profile from './profile.png'
import coins from './coin.png'
function NavBlack(){
    const menu=["Dashboard","Log-out","Support"];
    const[open,setopen]=useState(false);
    return(
        <div className='navblack'>
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

        </div>
    )
}
export default NavBlack;