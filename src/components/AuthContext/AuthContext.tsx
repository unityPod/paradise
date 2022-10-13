import { createContext, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged,  
    getAuth, 
    User
} from "firebase/auth";
import config from "../../config";

type UserType = {
    user: User | null
}

const UserContext = createContext<UserType>({user:null});
type Props = {
    children?: JSX.Element
}


export function AuthContextProvider({children}:Props){

    const [user, setUser] = useState<UserType>({user:null});

    const auth = getAuth(config);
  const createUser = (email: string, password: string) => {
     return createUserWithEmailAndPassword(auth, email, password)
  }

  onAuthStateChanged(auth, (AuthUser)=>{setUser({user:AuthUser})})
   
    return <UserContext.Provider value={user}>
        {children}
        </UserContext.Provider>
}

export default UserContext;