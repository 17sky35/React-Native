import React, {useState,createContext} from "react";

const ProgressContext = createContext({
    inProgress:false,
    spinner:() => {},
})
const ProgressProvider = ({children}) => {
    const [inProgress,setInProgress] = useState(false);
    //시작할때 ture로 바꾸고 끝나면 false로 바꾼다.
    const spinner = {
        start : () => setInProgress(true),
        stop : () => setInProgress(false),
    }
    const value = {inProgress,spinner};
    return(
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    )
}
export {ProgressContext,ProgressProvider}