import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


type GuestRouteProps = {
  component: JSX.Element
}

export default function GuestRoute({ component: Component }: GuestRouteProps) {

  const [objToRender, setObjToRender] = useState(<div></div>);

  const navigate = useNavigate();

  const checkSession = () => {
    const token = localStorage.getItem("user-token");
    if(token){
      navigate("/app/explorer");
    }else{
      setObjToRender(Component);
    }
  }

  useEffect(() => {
    checkSession();
  })

  
  return objToRender
  
};
