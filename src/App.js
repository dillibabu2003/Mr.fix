
import './App.css';
 import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar.jsx';
// import Profile from './components/Profile/Profile';
import { Routes,Route } from 'react-router';
import Complaints from './components/Complaints/Complaints';
import Manage from './components/Manage/Manage';
import Feedback from './components/Feedback/Feedback';
import UserProfile from './components/UserProfile/UserProfile';

// import Complaints from './components/Complaints/Complaints';


function App() {
  return (
    <div id="App">
         <div className='appGlass'>
         <Sidebar/>
         <Routes>
              <Route path="/userprofile" element={<UserProfile/>}/>
              <Route path="/" element={<MainDash/>}/>
              <Route path="/complaints" element={<Complaints/>}/>
              <Route path="/manage" element={<Manage/>}/>
              <Route path="/feedback" element={<Feedback/>}/>
         </Routes>
         </div>
    </div>
  );
}

export default App
