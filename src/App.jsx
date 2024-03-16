
import { useReducer } from "react"
import Addtodoform from "./Addtodoform";
import Todos from "./Todos";
function reducer (todos , action){
      if(action.type=="DELETE-TODO" ){
        return todos.filter((todo)=>{
            return todo.id!==action.payload.id;
        });
      }

      if(action.type=="TOGGLE-COMPLETED"){
        return todos.map((todo)=>{
          if(todo.id==action.payload.id){
            return {...todo , completed: !todo.completed}
          }
          else{
            return todo;

          }
        })
      }

      if(action.type==="Add-Todo"){
        return [...todos , action.payload.newtodo];
      }



      alert("Invalid Action Preformed  : ");

      return todos;



    


}

const initialstate =[
  {id:"1" , title:"Learn DSA" , completed:true},
  {id:"2" , title:"Learn React" , completed:true},
  {id:"3" , title:"Learn Java Script" , completed:true},
  {id:"4" , title:"Learn Java" , completed:true},
  {id:"5" , title:"Learn Python" , completed:true},
  {id:"6" , title:"Learn C" , completed:true},
  {id:"7" , title:"Learn C++" , completed:true},
  {id:"8" , title:"Learn Node js" , completed:true},
  {id:"9" , title:"Learn Express js" , completed:true},
  {id:"10" , title:"Learn Mongo DB" , completed:false},

]

function App(){
  const [todos , dispatch]= useReducer(reducer , initialstate)


  return (
    <>
      <Addtodoform dispatch={dispatch}/>
      <Todos todos={todos} dispatch={dispatch}/>
    </>
  )
}

export default App
