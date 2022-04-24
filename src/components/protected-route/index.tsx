import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tokenValidation } from "../../service/auth";

type ProtectedRouteProps = {
  component: JSX.Element
}

export default function ProtectedRoute({ component: Component }: ProtectedRouteProps) {
  const navigate = useNavigate();

  const checkSession = async() => {

    const validToken = await tokenValidation();
    if(!validToken){
      navigate("/");
    }
  }

  useEffect(() => {
    checkSession();
  })

  return Component;
};
