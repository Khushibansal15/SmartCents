// import './Dashboard.css'
import Stockdata from './Stockdata'
import './Stocklist.css'

function Stocklist(props){
    
    return(
        <div className='mainashmeet'>
            
            <table>
                <thead>
                <th>Sr. No.</th>
                <th>COMPANY</th>
                <th>PRICE <span>Rs.</span></th>
                <th>DAY HIGH <span>Rs.</span></th>
                <th>CHANGE<span>%</span></th>
                </thead>

                <tr>
                    <td>{props.stocks[0].id}</td>
                    <td className='cname'>{props.stocks[0].name}</td>
                    <td>{props.stocks[0].prize}</td>
                    <td>{props.stocks[0].dayhigh}</td>
                    <td><button className='butt2'>{props.stocks[0].change}% </button></td>
                </tr>


                <tr>
                    <td>{props.stocks[1].id}</td>
                    <td className='cname'>{props.stocks[1].name}</td>
                    <td>{props.stocks[1].prize}</td>
                    
                    <td>{props.stocks[1].dayhigh}</td>
                    <td><button className='butt2'>{props.stocks[1].change}%</button></td>
                </tr>
                

                <tr>
                    <td>{props.stocks[2].id}</td>
                    <td className='cname'>{props.stocks[2].name}</td>
                    <td>{props.stocks[2].prize}</td>
                    <td>{props.stocks[2].dayhigh}</td>
                    <td ><button className='butt2'>{props.stocks[2].change}%</button></td>
                </tr>
                

                <tr>
                    <td>{props.stocks[3].id}</td>
                    <td className='cname'>{props.stocks[3].name}</td>
                    <td>{props.stocks[3].prize}</td>
                    <td>{props.stocks[3].dayhigh}</td>
                    <td><button className='butt2'>{props.stocks[3].change}%</button></td>
                </tr>
                

                <tr>
                    <td>{props.stocks[4].id}</td>
                    <td className='cname'>{props.stocks[4].name}</td>
                    <td>{props.stocks[4].prize}</td>
                    <td>{props.stocks[4].dayhigh}</td>
                    <td><button className='butt2'>{props.stocks[4].change}%</button></td>
                </tr>
                

               
                
                


            </table>
        </div>
    )
}
export default Stocklist