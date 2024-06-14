import './Login.css'
import logo from './logo.png';
import login2 from './login2.png'
import arrow from './arrow.png'
import { useNavigate } from 'react-router-dom';
function Signup(){
    const navigate=useNavigate();
    return(
        <div className='login'>
            	<div className='left'>
                {/* <img src={arrow} className='arrow' onClick={()=>navigate('/landing')}></img> */}
                    <div className='textlogin'><span>One of Us?</span><br/>Sign in to continue your Financial journey with SmartCents!</div>
                    <button className='signup'>Sign In</button>
                    <img src={login2} className='login1'></img>
                </div>
               
                <div className='right'>
                     <img className='logo'src={logo}></img>
                    <div className='textsignin'>Sign Up</div>
                    <form className='formlogin'>
                        <input type='textbox' placeholder='Username' name='username' required></input>
                        <br/>
                        <input type='textbox' placeholder='Email' name='Email' required></input>
                        <br/>
                        <input type='password' placeholder='Password' name='password' required></input>
                        

                        <button className='signin' onClick={()=>navigate('/dashboard')}> Sign Up</button>
                    </form>
                </div>
        </div>
    )
}
export default Signup;