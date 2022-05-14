import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tokenValidation } from "../../service/auth";


type GuestRouteProps = {
  component: JSX.Element
}

export default function GuestRoute({ component: Component }: GuestRouteProps) {

  const [objToRender, setObjToRender] = useState(<div></div>);

  const navigate = useNavigate();

  const checkSession = async() => {
    const validToken = await tokenValidation();

    if(validToken){
      navigate("/app/explorer");
    }
    else{
      setObjToRender(Component);
    }
  }

  useEffect(() => {
    checkSession();
  })

  return objToRender;
};
