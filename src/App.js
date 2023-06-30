
import './App.css';
 import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar.jsx';


// import Complaints from './components/Complaints/Complaints';


function App() {
  return (
    <div id="App">
         <div className='appGlass'>
             <Sidebar/> 
             <MainDash/>
         </div>
    </div>
  );
}

export default App;
