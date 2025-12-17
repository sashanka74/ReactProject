import { useDispatch, useSelector } from "react-redux"
import { DEC, INC } from "../features/CounterSlice";


export const Counter = () =>{

    const count = useSelector((state)=>state.counter);
    const dispatch = useDispatch();


    return(
       <>
       <h1>Count:{count}</h1>
       <button onClick={()=>dispatch(INC())}>INC</button>
       <button onClick={ ()=>dispatch(DEC())}>DEC</button>
       
       </>
    )
}
