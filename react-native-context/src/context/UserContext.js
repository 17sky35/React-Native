import React,{useState,createContext} from "react";

const UserContext2 = createContext();

export const UserProvider2 = ({children}) => {
    const [user,setUser] = useState(null);
    const login = () => setUser({name : "GilDong"})
    const logout = () => setUser(null);

    return(
        <UserContext2.Provider value={{user,login,logout}}>
            {children}
        </UserContext2.Provider>
    )
}

export default UserContext2