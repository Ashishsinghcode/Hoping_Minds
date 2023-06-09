import React, { useCallback, useState } from 'react'
const functionSet = new Set();

const Multipler = () => {
  const [val, setVal] = useState(5)
  const [op, setop] = useState('None')

  const handletwo = useCallback(() => {
    setVal(val * 2)
    setop('Two Times')
  },[val,op])
  const handlefive = useCallback(() => {
    setVal(val * 5)
    setop('Five Times')
  },[val,op])
  const handletwelve = useCallback(() => {
    setVal(val * 12)
  },[val])
  const handlethirty = useCallback(() => {
    setVal(val * 30)
  },[val])
  functionSet.add(handletwo)
  functionSet.add(handlefive)
  functionSet.add(handletwelve)
  functionSet.add(handlethirty)
  return (
    <div>
      {console.log(functionSet)}
      <h3>Operation : {op}</h3>
      <h1>Result : {val}</h1>
      <button className='btn btn-danger mx-2' onClick={handletwo}>X2</button>
      <button className='btn btn-danger mx-2' onClick={handlefive}>X5</button>
      <button className='btn btn-danger mx-2' onClick={handletwelve}>X12</button>
      <button className='btn btn-danger mx-2' onClick={handlethirty}>X30</button>
    </div>
  )
}
export default Multipler
