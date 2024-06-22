import Stocklist from './Stocklist'
import './Stockdata.css'
import NavBlack from '../navbarBlack/NavBlack';
const data=[
  {
    id:1,
    name:'Dabur India',
    prize:600.25,
    dayhigh:633.40,
    change:'+5.52'
  },
  {
    id:2,
    name:'Hero Motors',
    prize:5658.50,
    dayhigh:5775.20,
    change:'+2.062'
  },
  {
    id:3,
    name:'Emami',
    prize:699.0,
    dayhigh:745.00,
    change:'+6.58'
  },
  {
    id:4,
    name:'Bajaj Autos',
    prize:9602.25,
    dayhigh:9679.00,
    change:'+0.79'
  },{
    id:5,
    name:'Trent',
    prize:4903.80,
    dayhigh:4932.05,
    change:'+0.57'
  }
]
function Stockdata() {
  return (<div>
    <NavBlack/>
    <h2 className='headd2'>Here are Some Stocks based on your preferences</h2>
    <Stocklist stocks={data}/>
  </div>
  );
}

export default Stockdata;