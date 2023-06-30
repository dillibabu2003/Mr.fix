
import { Routes,Route } from 'react-router-dom';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile';

import Complaints from './components/Complaints/Complaints';


function App() {
  return (
    <div id="App">
         <div className='appGlass'>
         <Sidebar/>
         <Routes>
           
             
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/admindashboard" element={<MainDash/>}/>
          
              <Route path="/complaints" element={<Complaints/>}/>
          
            
         </Routes>
         </div>
    </div>
  );
}

export default App;
