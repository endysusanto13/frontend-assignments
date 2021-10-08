// import { LoginForm } from "domains/auth";
import * as React from "react";
import { RegisterForm } from "domains/auth";

export const RegisterPage = () => {
  return(
    <div className="flex flex-col h-screen bg-indigo-50">
      <div className="h-1/6"></div>
      <div><RegisterForm /></div>  
    </div>
  )
};


