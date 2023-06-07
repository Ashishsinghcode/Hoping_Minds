//import logo from './logo.svg';
import './App.css';
import Album from './functionBasedComponent/UseEffectHook/Album';
//import Form from './components/Form'
//import Table from './components/Table';
//import PureComponent from './components/PureComponent';
//import FeedbackForm from './functionBasedComponent/FormHandling/FeedbackForm';
import SideEffectComponent from './functionBasedComponent/UseEffectHook/SideEffectComponent';

function App() {
  return (
   <>
   <div className='container'>
    {/* <SideEffectComponent /> */}
    <Album/>
    {/* <PureComponent />    */}
   </div>
   </>
  );
}

export default App;
