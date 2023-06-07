import React from "react";

export default function Table(props) {
   const{formdata,isSubmitted }=props
   const myStyle={
       'border':'2px solid red',
       'textAllign':'center'
   }
   return (
       <>
      {console.log(formdata)}
      <button onClick={()=>{isSubmitted(false)}}> Return</button>
      <table style={myStyle}>
        <tbody>
          <tr style={myStyle}>
            <th style={myStyle}>Name</th>
            <th style={myStyle}>Designation</th>
            <th style={myStyle}>Rating</th>
          </tr>
          
            {formdata.map((item,index)=>{
              return(
                <tr key={index} >
                    <td style={myStyle}>{item.name}</td>
                    <td style={myStyle}>{item.designation}</td>
                    <td style={myStyle}>{item.rating}</td>
                </tr>
              )  
            })}
          
        </tbody>
      </table>
    </>
  );
}
