import React from 'react'

function Todo({ completed , title , id , dispatch}) {

    const handeldelete=()=>{
        dispatch({type :"DELETE-TODO" , payload:{id:id}});

    }

    const handeltoggle=()=>{
        dispatch({type:"TOGGLE-COMPLETED" , payload:{id:id}})
    }
  return (
    <div style={{
        border:"2px solid black ",
        margin:"1rem",
        padding:"1rem",
        fontFamily:"sans-serif",
        backgroundColor:"#becfdf",
        borderRadius:"1rem",

    }}>
            <h4> Id : {id}</h4>
            <h4> Title : {title}</h4>
            <h4 style={{textDecoration:completed ? "line-through" : "solid"}}>Completed : {completed ? "True" :"False"}</h4>
            <button  style={{
                border:"none",
                outline:"noe",
                margin:"1rem",
                padding:"0.5rem 1rem"
            }} onClick={handeldelete}>Delete</button>
            <button style={{
                border:"none",
                outline:"noe",
                margin:"1rem",
                padding:"0.5rem 1rem"
            }}onClick={handeltoggle}>toggle Completed</button>

        
        </div>
  )
}

export default Todo