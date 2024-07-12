import { useContext, useState } from 'react'
import { todosAtom  } from './store/atoms/count'
import { useRecoilValue,useRecoilState, RecoilRoot,useSetRecoilState, useRecoilValueLoadable } from 'recoil'

function App() {
 
  return (
    <RecoilRoot>
    
        <TodoComponent id={1}/>
        <TodoComponent id={2}/>
    </RecoilRoot>
  
  )
}


// function MainComponent(){
//   const networkCount = useRecoilValue(networkCountAtom);
//   const jobCount = useRecoilValue(jobCountAtom);
//   const messageCount = useRecoilValue(messageCountAtom);
//   const notificationCount = useRecoilValue(notificationCountAtom);
//   const setNetworkCount = useSetRecoilState(networkCountAtom);
//   const sumOfNotifications = useRecoilValue(sumOfNotificationsAll);

//   function increaseNetworkCount(){
//     setNetworkCount(networkCount => networkCount+1)
//   }
 

//   return(
//     <div>
//         <button>Home</button>
//         <button>My Network {networkCount}</button>
//         <button>Jobs {jobCount}</button>
//         <button>Messaging {messageCount}</button>
//         <button>Notifications {notificationCount}</button>
//         <button onClick={increaseNetworkCount}>Increase Network Count</button>
//         <button>Profile {sumOfNotifications}</button>
//     </div>
//   )
// }


function TodoComponent({id}){
  const todo = useRecoilValueLoadable(todosAtom(id));
  console.log(todo) // due to Loadable now this todo is a object with two properties contents and state 

  if(todo.state === "loading"){   // <suspense fallback="Loading"><suspense> used in recoilValue not in Loadable 
    return <div>
      loading...
    </div>
  } else{
    return(
      <div>
        <h1>{todo.contents.id}</h1>
        <h1>{todo.contents.todo}</h1>
      </div>
    )
  }
 
}



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
//   const count = useRecoilValue(countAtom)
//   return (
//     <>
//       <h1>{count}</h1>
//       <EvenCounterRenderer/>
//     </>
//   )
// }

// function EvenCounterRenderer(){
//   console.log("redering from EvenCounter")
//    const isEven = useRecoilValue(evenSelector);
//    console.log(isEven)
//   return (
//     <div>
//        {!isEven ? "It is Even" : null}
//     </div>
//   )
// }

// function Buttons(){
//   console.log("redering from Buttons")
//  const setCount = useSetRecoilState(countAtom) // This will stop button re-render
//   return(
//     <>
//       <button onClick={()=>{setCount(count => count+1)}} style={{padding:4 ,margin:4}}>Increase</button>
//       <button onClick={()=>{setCount(count => count-1)}} style={{padding:4 ,margin:4}}>Decrease</button>
//     </>
//   )
// }

export default App
