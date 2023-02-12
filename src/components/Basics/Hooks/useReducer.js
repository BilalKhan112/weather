import React, { useReducer } from 'react'
import './useState.css';

const reducer = ((state , action)=>{
  if(action.type == "Increment")
  {
    state=state + 1;
  }
  if(state>0 && action.type == "Decrement")
  {
    state = state - 1;
  }
 return state;
});
const initialData = 0;
const UseReducer = () => {
 const [state, dispatch] = useReducer(reducer,initialData);
  return (
    <>
   <div className='center_div'>
    <p>{state}</p>
    <div className='button2' onClick={()=>dispatch({type:"Increment"}) }>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Increment
    </div>

    <div className='button2' onClick={()=> dispatch({type:"Decrement"})}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Decrement
    </div>
   </div>
    </>
  )
}

export default UseReducer;
