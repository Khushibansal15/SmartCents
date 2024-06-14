import './Login.css'
import logo from './logo.png';
import login1 from './login1.png'
import arrow from './arrow.png'
import { useNavigate } from 'react-router-dom';
function Login(){
    const navigate=useNavigate();
    return(
        <div className='login'>
            	<div className='left'>
                <img src={arrow} className='arrow' onClick={()=>navigate('/landing')}></img>
                    <div className='textlogin'><span>New here?</span><br/>Whoever you are,at whatever stage of life you are in,there is an offering for you at SmartCents.Get Started Now!</div>
                    <button className='signup' onClick={()=>navigate('/signup')}>Sign up</button>
                    <img src={login1} className='login1'></img>
                </div>
               
                <div className='right'>
                     <img className='logo'src={logo}></img>
                    <div className='textsignin'>Sign in</div>
                    <form className='formlogin'>
                        <input type='textbox' placeholder='             Username' required></input>
                        <br/>
                        <input type='password' placeholder='            Password' required></input>

                        <button className='signin'> Sign in</button>
                    </form>
                </div>
        </div>
    )
}
export default Login;