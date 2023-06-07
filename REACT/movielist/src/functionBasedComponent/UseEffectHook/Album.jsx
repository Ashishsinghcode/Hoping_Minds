import React, { useEffect, useState } from 'react'

export default function Album() {
    const [userData,setUserData]=useState([])
  useEffect(()=>{
    async function fetchApi(){
        try{
            const response =await fetch('https://jsonplaceholder.typicode.com/albums');
            const resData=await response.json();
            setUserData(()=>([resData]));
            console.log(resData)
        }catch{
            console.log("There is an error")
        }
    }
    fetchApi()
  },[])
    return (
    <>
    <table>
        <tbody>
            <tr>
                <th>user id</th>
                <th>Id</th>
                <th>Title</th>
            </tr>
            {userData.map((item,index)=>{
                return(
                    
                    item.map((data,index)=>{
                        return(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                        </tr>
    
                        )
                        
                    console.log(data)
                    })
                )
            })} 

        </tbody>
    </table>
    </>
  )
}
