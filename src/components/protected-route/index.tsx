import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


type ProtectedRouteProps = {
  component: JSX.Element
}

export default function ProtectedRoute({ component: Component }: ProtectedRouteProps) {

  const navigate = useNavigate();

  // metodo para verificar se token expirou
  // implementar depois
  const checkTokenExpiration = () => {
    return false
  }

  const checkSession = () => {
    const token = localStorage.getItem("user-token");
    if(!token || checkTokenExpiration()){
      navigate("/");
    }
  }

  useEffect(() => {
    checkSession();
  })

  return Component
};
