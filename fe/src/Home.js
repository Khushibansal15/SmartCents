import './Home.css';
import Navbar from './Components/section1/Navbar';
import Modules from './Components/section2/Modules';
import Footer from './Components/section3/Footer';
import Freqsection from './Components/section3/Freqsection';


function Home(){
   
    return(<div className='main'>
    <section><Navbar/></section>
    <section><Modules/></section>
    <section><Freqsection/></section>
            <Footer/>
        </div>
    )
}
export default Home;