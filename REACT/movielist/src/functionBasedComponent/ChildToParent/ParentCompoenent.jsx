import React, { useState } from 'react';
//import Child from './ChildCOmponent';
import ChildCOmponent from './ChildCOmponent';


export default function ParentCompoenent() {
   const [pmsg,setPmsg]=useState()

    const callBackData = (childData) => {
        setPmsg(childData)
    }
  return (
    <div>
      <ChildCOmponent parentfunction={callBackData}/>
      {pmsg}
    </div>
  )
}
