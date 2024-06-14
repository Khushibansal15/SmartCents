import Home from './Home'
import Signup  from './Components/section4/Sighnup';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import React, { useState } from 'react';
import Login from './Components/section4/Login';
import Navdash from'./Components/dash/Navdash';
import Hoome from './Components/Budgeting/Hoome';
import SelectNecessitiesWants from './Components/Budgeting/SelectNecessitiesWants';
import Report from './Components/Budgeting/Report';

import Questions from './Components/Investing/Questions'
import Question2 from './Components/Investing/Question2';
import Question3 from './Components/Investing/Question3';
import Question4 from './Components/Investing/Question4';
import ModulesAshmeet from './Components/Investing/ModulesAshmeet'
import Yesno from './Components/Investing/Yesno';
import Demat from './Components/Investing/Demat';
import MyMap from './Components/Investing/MyMap';
import Onbuy from './Components/Investing/Onbuy';
import Stockdata from './Components/Investing/Stockdata';
function App(){
  const [budget, setBudget] = useState({ necessity: 0, want: 0, savings: 0 });
  const [necessities, setNecessities] = useState([]);
  const [wants, setWants] = useState([]);

  const handleSalarySubmit = (budgetData) => {
    setBudget(budgetData);
  };

  const handleItemsSubmit = ({ necessities, wants }) => {
    setNecessities(necessities);
    setWants(wants);
  };
    return(<div>
        {/* <Navdash/> */}
     { <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/landing' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/dashboard' element={<Navdash/>}/>


            {/* //ashmeetRoutes */}
            <Route path='/investing' element={<ModulesAshmeet/>} />
            <Route path='/stocks' element={<Yesno />} />
      <Route path='/questions' element={<Questions />} />
      <Route path='/question2' element={<Question2 />} />
      <Route path='/question3' element={<Question3 />} />
      <Route path='/question4' element={<Question4 />} />
      <Route path='/demat' element={<Demat />} />
      <Route path='/stocklist' element={<Stockdata />} />
      <Route path='/map' element={<MyMap />} />
      <Route path='/onbuy' element={<Onbuy />} />

            {/* priyanka routes */}
            <Route 
          path="/budget" 
          element={<Hoome 
            onSalarySubmit={handleSalarySubmit} 
            budget={budget} 
            setBudget={setBudget} 
            necessities={necessities} 
            wants={wants} 
          />} 
        />
          <Route 
          path="/select-necessities-wants" 
          element={<SelectNecessitiesWants 
            onItemsSubmit={handleItemsSubmit} 
          />} 
        />
        <Route path="/report" element={<Report />} />
             </Routes>
             </BrowserRouter>
              }
             </div>)
     }
    

export default App;

    