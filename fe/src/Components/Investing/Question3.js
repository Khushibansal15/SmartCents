import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Questions.css'
import NavBlack from "../navbarBlack/NavBlack";
function Question3()
{
    
    const nviii=useNavigate()
    function gotonext()
    {
        nviii('/question4')
    }
    return(
        <div>
            <NavBlack/>
            <div className="modulesashmeet">
            <h1>Answer a few questions to let us know about your preferences in stocks!!</h1>
            <div className="question1">
                <h2 className="headddd">Question 3 out of 4</h2>
                <h3>What kind of stocks would you like to invest in?</h3>

                        <button className="buttonashmeet" onClick={gotonext}>
                        <h4>Income Stocks</h4>
                        <p>Perks:Income stocks typically pay consistent dividends, providing investors with a steady stream of income. </p>
                        <p>Downsides:Income stocks, especially those from mature companies, often have limited growth potential compared to growth stocks.</p>
                        </button> 
                       <button className="buttonashmeet" onClick={gotonext}>
                    <h4>Bluechip Stocks</h4>
                        <p>Perks: Blue-chip stocks represent well-established companies with a history of stable earnings, reliable dividend payments, and strong market presence</p>
                        <p>Downsides:Because blue-chip companies are already large and well-established, they often have limited room for rapid growth.</p>
                        </button>
            </div>
        </div>
        </div>

    );
}
export default Question3