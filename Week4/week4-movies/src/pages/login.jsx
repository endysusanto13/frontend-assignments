// import { LoginForm } from "domains/auth";
import * as React from "react";
import { LoginForm } from "domains/auth";

export const LoginPage = () => {
  return(
    <div className="flex flex-col h-screen bg-indigo-50">
      <div className="h-1/6"></div>
      <div><LoginForm /></div>  
    </div>
  )
};


