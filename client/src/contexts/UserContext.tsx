import React, { ReactNode, useEffect, useMemo, useState } from "react";

export interface User {
  [info: string]: any;
}
export interface UserInfo {
  accessToken: string;
  userInfo: User;
}
export interface UserContextType extends UserInfo {
  [dispatchEvent: string]: any;
}

const initialState = {
  accessToken: "",
  userInfo: {},
};
export const UserContext = React.createContext<UserContextType>(initialState);

interface Props {
  children: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState(() => ({}));
  const [accessToken, setAccessToken] = useState(() => "");

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");

    if (token) {
      setAccessToken(() => JSON.parse(token));
    }
  }, []);

  const value = useMemo(
    () => ({
      userInfo,
      accessToken,
      setUserInfo,
      setAccessToken,
    }),
    [userInfo, accessToken, setUserInfo, setAccessToken]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
