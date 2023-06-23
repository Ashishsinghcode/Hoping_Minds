//import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';
import Multiplier from './functionBasedComponent/Redux/Components/Multiplier';
import ReduxLogin from './functionBasedComponent/Redux/Components/ReduxLogin';
//import ParentCompoenent from './functionBasedComponent/ChildToParent/ParentCompoenent';
//import UncontrolledForm from './functionBasedComponent/ControlledVsUncontrolled/UseRefHook/UncontrolledForm';
//import ControlledForm from './functionBasedComponent/ControlledVsUncontrolled/UseStateHook/ControlledForm';
//import ReduxCounter from './functionBasedComponent/Redux/Components/ReduxCounter';
//import CounterReducer from './functionBasedComponent/Redux/Reducer/CounterReducer';
//import Multipler from './functionBasedComponent/UseCallbackHook/Multipler';
//import ComponentA from './functionBasedComponent/UseContextHook/ComponentA';
//import Confusion from './functionBasedComponent/UseContextHook/context/Confusion';
//import Album from './functionBasedComponent/UseEffectHook/Album';
//import Form from './components/Form'
//import Table from './components/Table';
//import PureComponent from './components/PureComponent';
//import FeedbackForm from './functionBasedComponent/FormHandling/FeedbackForm';
//import SideEffectComponent from './functionBasedComponent/UseEffectHook/SideEffectComponent';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './functionBasedComponent/RoutingComponents/Home';
import Courses from './functionBasedComponent/RoutingComponents/Courses';
import FeePage from './functionBasedComponent/RoutingComponents/FeePage';
import Contactus from './functionBasedComponent/RoutingComponents/Contactus';
import About from './functionBasedComponent/RoutingComponents/About';
import NotFound from './functionBasedComponent/RoutingComponents/NotFound';
import Login from './functionBasedComponent/RoutingComponents/Login';
import BEDCourse from './functionBasedComponent/RoutingComponents/BEDCourse';
import FEDCourse from './functionBasedComponent/RoutingComponents/FEDCourse';
function App() {
  //const data = useSelector(state=>state.login)
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/courses' element={<Courses/>}>
            <Route path='fedcourse' element={<FEDCourse/>} />
            <Route path='bedcourse' element={<BEDCourse/>} />
          </Route>
          <Route path='/feepage' element={<FeePage/>} />
          <Route path='/contactus' element={<Contactus/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
      <div className='container'>
        {/* <SideEffectComponent />
    <Confusion>
      <ComponentA/>
    </Confusion> */}
        {/* <ParentCompoenent/> */}
        {/* <PureComponent />    */}
        {/* <UncontrolledForm/> */}
        {/* <ControlledForm/> */}
        {/* <Multipler/> */}
        {/* {data?
    <Multiplier/>:<ReduxLogin/>}
     */}




      </div>
    </>
  );
}

export default App;
