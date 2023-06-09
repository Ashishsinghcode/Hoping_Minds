import React, { useEffect, useState } from 'react'
const myStyle={
    'border':'2px solid red',
    'textAllign':'center'
}
export default function Album() {
    const [userData,setUserData]=useState([])
  useEffect(()=>{
    async function fetchApi(){
        try{
            const response =await fetch('https://jsonplaceholder.typicode.com/albums');
            const resData=await response.json();
            setUserData(()=>([...resData]));
            console.log(resData)
        }catch{
            console.log("There is an error")
        }
    }
    fetchApi()
  },[])
    return (
    <>
    <table style={myStyle}>
        <tbody>
            <tr style={myStyle}>
                <th style={myStyle}>user id</th>
                <th style={myStyle}>Id</th>
                <th style={myStyle}>Title</th>
            </tr>
            {userData.map((item,index)=>{
                return( 
                        <tr>
                            <td style={myStyle}>{item.id}</td>
                            <td style={myStyle}>{item.userId}</td>
                            <td style={myStyle}>{item.title}</td>
                        </tr>
                    
                )
            })} 

        </tbody>
    </table>
    </>
  )
}
