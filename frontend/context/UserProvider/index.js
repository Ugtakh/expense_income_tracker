import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loginUserData, setLoginUserData] = useState({
    email: "naraa@gmail.com",
    password: "",
  });

  const changeLoginUserData = (key, value) => {
    setLoginUserData({ ...loginUserData, [key]: value });
  };

  const login = async () => {
    console.log("email", loginUserData.email);
    console.log("pass", loginUserData.password);
    if (!loginUserData.email || !loginUserData.password) {
      alert("Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signin", {
        userEmail: loginUserData.email,
        userPassword: loginUserData.password,
      });
      console.log("DDD++++++>", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("error", error);
      toast.error(`${error.response.data.message}`, { autoClose: 3000 });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const signup = () => {};

  return (
    <UserContext.Provider
      value={{
        user,
        loginUserData,
        changeLoginUserData,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
