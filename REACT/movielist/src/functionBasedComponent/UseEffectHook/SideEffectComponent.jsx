import React, { useEffect, useState } from 'react'

export default function SideEffectComponent() {
    const [count, setCount] = useState(0)
    const[isLogin,setLogin]=useState(false)
    useEffect(() => {
        console.log(count,"mounted")
        //   setTimeout(()=>{
        //       setCount(count+1)
        //   },2000)
          return(()=>{
              console.log("This count is got unmounted", count)
            }
        )
    },[isLogin])
    return (
        <>
            <div>
                {console.log(isLogin)}
                <p>Counter :{count}</p>
                <button className='btn btn-danger' onClick={() => { setCount(count + 1) }}><strong>+</strong></button>
                <button className='btn btn-primary' onClick={() => { setLogin(!isLogin)}}><strong>{isLogin===true?'Logout':'Login'}</strong></button>
            </div>
        </>
    )
}
