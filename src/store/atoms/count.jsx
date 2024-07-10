import {atom, selector} from "recoil";
//atom
export const countAtom = atom({
    key:"countAtom",
    default:0
});

// selector
export const evenSelector = selector({
    key:"evenSelector",
    get:({get}) =>{
        const count = get(countAtom);
        return count % 2;
    }
})

// statae management