import React,{useState} from "react";
import Table from "./Table";


export default function Form(props) {
  var arr=[]
  var arr2=[]
  var arr3=[]
  // const  submitform=(e)=>{
  //   e.preventDefault()
  //   alert(`${emailData}${passwordData}${chooseGender}`)
  //   arr.push(emailData)
  //   arr2.push=(passwordData)
  //   arr3.push=(chooseGender)
  //   console.log(emailData)
  //   console.log(passwordData)
  //   console.log(chooseGender)
  // }

  const gender=(e)=>{
    setgender(e.target.value)
  }
    const email=(event)=>{
        setemail(event.target.value)
    }
    const password=(event)=>{
        setpassword(event.target.value)
    }
    const [emailData,setemail]=useState('')
    const [passwordData,setpassword]=useState('')
    const [chooseGender,setgender]=useState('')
  return (
    <div>
        <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={emailData}
            onChange={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={passwordData}
            onChange={password}
          />
        </div>
        <div className="form-check">

          <label htmlFor="exampleselect" >Gender</label>
          <select className="form-control" id="exampleselect"  onChange={gender}>
            <option  disabled selected>Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Table email={emailData} password={passwordData} gender={chooseGender}/>
    </div>
  );
}

Form.defaultProps = {
  option: 'Choose Option'
};

