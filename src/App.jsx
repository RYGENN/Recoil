import { useContext, useState } from 'react'
import './App.css'
import { countAtom, evenSelector } from './store/atoms/count'
import { useRecoilValue,useRecoilState, RecoilRoot,useSetRecoilState } from 'recoil'

function App() {
   
  return (
   
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  
  )
}


function Count(){
  console.log("redering from Count")
  return (
    <>
      <CounterRenderer/>
      <Buttons />
    </>
  )
}

function CounterRenderer(){
  console.log("redering from CounterRenderer")
  const count = useRecoilValue(countAtom)
  return (
    <>
      <h1>{count}</h1>
      <EvenCounterRenderer/>
    </>
  )
}

function EvenCounterRenderer(){
  console.log("redering from EvenCounter")
   const isEven = useRecoilValue(evenSelector);
   console.log(isEven)
  return (
    <div>
       {!isEven ? "It is Even" : null}
    </div>
  )
}

function Buttons(){
  console.log("redering from Buttons")
 const setCount = useSetRecoilState(countAtom) // This will stop button re-render
  return(
    <>
      <button onClick={()=>{setCount(count => count+1)}} style={{padding:4 ,margin:4}}>Increase</button>
      <button onClick={()=>{setCount(count => count-1)}} style={{padding:4 ,margin:4}}>Decrease</button>
    </>
  )
}

export default App
