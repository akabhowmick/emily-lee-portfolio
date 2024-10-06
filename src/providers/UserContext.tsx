/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";
import { UserInfo } from "../types/interfaces";

interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  //! Fix the default user later
  const [userInfo, setUserInfo] = useState({});

  // const mainUser = { username: "Angela Tan", password: "Password1!" };
  

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
