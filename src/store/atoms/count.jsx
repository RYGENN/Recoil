import {atom, atomFamily, selector, selectorFamily} from "recoil";
import axios from "axios";
//atom
// export const countAtom = atom({
//     key:"countAtom",
//     default:0
// });

// // selector
// export const evenSelector = selector({
//     key:"evenSelector",
//     get:({get}) =>{
//         const count = get(countAtom);
//         return count % 2;
//     }
// })

// state management 

// export const networkCountAtom = atom({
//     key:"networkCount",
//     default:20
// })

// export const jobCountAtom = atom({
//     key:"jobCount",
//     default:0
// })

// export const messageCountAtom = atom({
//     key:"messageCount",
//     default:5
// })

// export const notificationCountAtom = atom({
//     key:"notificationCount",
//     default:45
// })

// export const sumOfNotificationsAll = selector({
//     key:"sumOfNotificationsAll",
//     get:({get}) =>{
//         const networkCount = get(networkCountAtom);
//         const jobCount = get(jobCountAtom);
//         const messageCount = get(messageCountAtom);
//         const notificationCount = get(notificationCountAtom);
//         return networkCount + jobCount + messageCount + notificationCount;
//     }
// })

export const todosAtom = atomFamily({
    key:"todosAtomFamily",
    default:selectorFamily({  // we are making asynchronous calls to the backend for everytodo so we need to use selectorfamily
        key:"todosAtomSelectorFamily",
        get: function(id){
         return  ( async ({get})=>{
                await new Promise(r => setTimeout(r,3000))
                const res  = await axios.get(`https://dummyjson.com/todos/${id}`);
                return res.data;

            })
        }
    })
})