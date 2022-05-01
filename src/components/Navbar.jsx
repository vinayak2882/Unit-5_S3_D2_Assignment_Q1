import {useContext} from "react";

import { IsAuthContext }from "../context/IsAuth";

export const NavBar = ()=> {
    const {isAuth,handleToggleAuth} = useContext(IsAuthContext);
    return (
        <div>
            <button onClick={handleToggleAuth}>
                { isAuth ? "Sign Out" : "Sign in" }
            </button>
        </div>
    )
}