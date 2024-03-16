import React from 'react'
import { useState } from 'react';


function Addtodoform({dispatch}) {
  const [title , settitle]=useState("");

  function handelsubmit(aditya){
    aditya.preventDefault();
    if(title.trim().length==0){
      alert("Type Something ....")
    }
    const newtodo={
      title:title,
      completed:false,
      id:crypto.randomUUID()


    }
    dispatch({type:"Add-Todo" , payload : {newtodo:newtodo}});
    settitle("");

  }
  return (
   <form onSubmit={handelsubmit} 
   // style 
    style={{
      display:"flex",
      width:"70%",
      margin:" auto",
      justifyContent:"space-between",
      marginTop:"1rem",



    }}
   >
    <input type="text" 
    name="title"  
    id="title" className='inputfield'
    value={title}
    placeholder=' Enter New Todo'
    onChange={(e)=>{
      settitle(e.target.value);

    }}
    style={{
      width:"70%",
      height:"4rem",
      border:"none",
      backgroundColor:"#8899A6",
      outline:"none",
      color:"black",
    
      borderRadius:"5px",
      fontSize:"large",
      paddingLeft:"1rem"
  
      

    }}
    />
    <button type='submit' style={{
      width:"20%",
      height:"4rem",
      padding:"0.5rem 0",
      cursor:"pointer",
backgroundColor:"#8899A6",
border:"none",
fontSize:"large"


    }}>Add Todo</button>
   </form>
  )
}

export default Addtodoform