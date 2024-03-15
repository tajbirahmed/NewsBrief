import { User } from "firebase/auth";
import { createContext, useState } from "react";


interface AuthProviderProps { 
  children: React.ReactNode 
}

export const AuthContext = createContext<User | null>(null); 
// export const AuthContextProvider = ({ children }) => { 
//   const [user, setUser] = useState<User | null>(null)
//   return (
//     <AuthContext.Provider value= {{ 
//       user
//     }}>
//       {children}
//     </AuthContext.Provider>

//   )
// }