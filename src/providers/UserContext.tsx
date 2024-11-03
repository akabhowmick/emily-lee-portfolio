/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { UserInfo } from "../types/interfaces";

interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  loginUser: (userName: string, password: string) => boolean;
  logoutUser: () => void;
}

const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState({});
  const TWO_HOURS_MS = 2 * 60 * 60 * 1000;

  const mainUser = { username: "Yoonseo", password: "Password1!" };

  const loginUser = (userName: string, password: string) => {
    if (userName === mainUser.username && password === mainUser.password) {
      const loginTime = Date.now();
      const userData = { username: userName, loginTime };
      localStorage.setItem("blogUser", JSON.stringify(userData));
      setUserInfo({ username: userName, password });

      return true;
    }
    return false;
  };

  const logoutUser = () => {
    localStorage.removeItem("blogUser");
    setUserInfo({});
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("blogUser");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      const currentTime = Date.now();

      if (currentTime - user.loginTime < TWO_HOURS_MS) {
        setUserInfo({ username: user.username, password: "" });
      } else {
        logoutUser();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
