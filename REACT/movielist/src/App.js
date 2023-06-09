//import logo from './logo.svg';
import './App.css';
import ParentCompoenent from './functionBasedComponent/ChildToParent/ParentCompoenent';
import UncontrolledForm from './functionBasedComponent/ControlledVsUncontrolled/UseRefHook/UncontrolledForm';
import ControlledForm from './functionBasedComponent/ControlledVsUncontrolled/UseStateHook/ControlledForm';
import Multipler from './functionBasedComponent/UseCallbackHook/Multipler';
import ComponentA from './functionBasedComponent/UseContextHook/ComponentA';
import Confusion from './functionBasedComponent/UseContextHook/context/Confusion';
//import Album from './functionBasedComponent/UseEffectHook/Album';
//import Form from './components/Form'
//import Table from './components/Table';
//import PureComponent from './components/PureComponent';
//import FeedbackForm from './functionBasedComponent/FormHandling/FeedbackForm';
//import SideEffectComponent from './functionBasedComponent/UseEffectHook/SideEffectComponent';

function App() {
  return (
   <>
   <div className='container'>
    {/* <SideEffectComponent />
    <Confusion>
      <ComponentA/>
    </Confusion> */}
    {/* <ParentCompoenent/> */}
    {/* <PureComponent />    */}
    {/* <UncontrolledForm/> */}
    {/* <ControlledForm/> */}
    <Multipler/>
   </div>
   </>
  );
}

export default App;
