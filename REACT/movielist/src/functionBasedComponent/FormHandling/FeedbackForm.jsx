import React, { useState } from 'react'
import Table from './Table';

export default function FeedbackForm() {
    const [user,setUser]=useState([
        {
            name:'',
            designation:'',
            rating:0
        }
    ]);
    const [userobj,setUserobj]=useState([]);
    const [isSubmitted,setisSubmitted]=useState(false)   
    const handleChange=(event)=>{
        setUser(
            (prev)=>({...prev,[event.target.id]:event.target.value}))
            console.log(userobj)
        }
    const handleSubmit=(event)=>{
         event.preventDefault()
         setUserobj(
            (prev)=>([...prev,user])
         )
         setisSubmitted(true)
         console.log(user)
         console.log(userobj)
        
        }
  return (
    <>
    {isSubmitted?
     <div>
         <Table formdata={userobj} isSubmitted={setisSubmitted}/>
     </div>
    :
   
    <div className='container'>
        <div className='row'>
            <div className='col-md-2'>
                <label>Employee Name : </label>
            </div>
            <div className='col-md-2'>
                <input type='text'  onChange={handleChange} id='name' /><br/>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-2'>
                <label>Designation : </label>
            </div>
            <div className='col-md-2'>
                <input type='text' id='designation'  onChange={handleChange} /><br/>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-2'>
                <label>Rating : </label>
            </div>
            <div className='col-md-2'>
                {/* <input type='text' value={user.rating} onChange={handleChange} id='rating' /><br/> */}
                <select id='rating' onChange={handleChange}>
                    <option value='select rating'>Select Rating</option>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
            </div>
            
        </div>
            
        <div className='row'>
            <div className='col-md-3'>
            <input type='submit' onClick={handleSubmit}/>
            </div>
        </div>
     
    </div>
}
   
    </>

  )
}
