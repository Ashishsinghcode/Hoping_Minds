
import React, {Component} from "react";


export class Counter extends Component {
    constructor(){
        super();
        console.log('Constructor is called ....');
        this.state={
            age:18
        }
    }
    render()
    {
        console.log('Render is called .......');
        return (
            <div>
                <h1>Counter Component : {this.state.age}</h1>
                <button onClick={()=>this.setState({age:this.state.age+1})}>Click</button>
            </div>
            );
        
    }
   static getDerivedStateFromProps(){
    //Confirm if the state is initialized or not
        console.log("getDerivedStateFromProps is called......");
        return null;
    }
    componentDidMount(){
        console.log("Component did mount is called.............")
    }
    shouldComponentUpdate(np,ns){
        console.log(np)
        console.log(ns)
        console.log('Should component update is called..............');
        return true;
    }
    getSnapshotBeforeUpdate(pp,ps){
        console.log(pp)
        console.log(ps)
        console.log('getSnapshotBeforeUpdate is called..........')
        return null;
    }
    componentDidUpdate(x,y){
        console.log(x)
        console.log(y)
        console.log('componentDidUpdate is called..........')
    }
    componentWillUnmount(){
        console.log('Component will unmount is called...........')
    }
}
export default Counter