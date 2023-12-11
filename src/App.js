// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import { Home } from './components/Home.jsx';
import Task from "./components/Task.jsx"
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import User from './components/User.jsx';
// function Mycompo(prop){
//   return (<>
//   <div>harshit Jain {
//     for(let x=0;x<prop.arr.length;x++){
//       prop.arr[x]
//     }
//     }</div>
//   <hr/>
//   </>);
// }
let items=[1,2,3,4]
// let itemList=items.map((item,index)=>{
//   return <li key={index}>{item}</li>
// })
function App() {
  return (
    <BrowserRouter>
    <div id="foruni">
      {/* <div id="forhead">Hello   guys</div>
       */}
    <Header/>
    {/* <itemList/>      */}
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/contact' element={ <Contact/>}/>
      <Route path='/user/:id' element={ <User/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
