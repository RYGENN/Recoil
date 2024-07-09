import { createContext } from "react";

export const countContext=createContext();

// This will solve the issue of prop drilling issue but not the rendering issue.
// It does not give any performance related result.

// To solve the rederer issue we use statemanagement libraries like Redux,Recoil,Zustand

// Example of CotextAPI ----------------------------

// import { useContext, useState } from 'react'
// import './App.css'
// import { CountContext } from '../../week-7/src/context'

// function App() {
//   const [count, setCount] = useState(0)
   
//   return (
   
//     <CountContext.Provider value={{count , setCount}}>
//         <Count/>
//     </CountContext.Provider>
  
//   )
// }


// function Count(){
//   console.log("redering from Count")
//   return (
//     <>
//       <CounterRenderer/>
//       <Buttons />
//     </>
//   )
// }

// function CounterRenderer(){
//   console.log("redering from CounterRenderer")
//   const {count} = useContext(CountContext)
//   return (
//     <>
//       <h1>{count}</h1>
//       <EvenCounterRenderer/>
//     </>
//   )
// }

// function EvenCounterRenderer(){
//   console.log("redering from EvenCounter")

//   return (
//     <>

//     </>
//   )
// }

// function Buttons(){
//   console.log("redering from Buttons")
//   const {count,setCount} =useContext(CountContext)

//   return(
//     <>
//       <button onClick={()=>{setCount(count+1)}} style={{padding:4 ,margin:4}}>Increase</button>
//       <button onClick={()=>{setCount(count-1)}} style={{padding:4 ,margin:4}}>Decrease</button>
//     </>
//   )
// }

// export default App
