import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Register = () => {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        loginWithRedirect({ screen_hint: "signup", redirect_uri: "https://localhost:3000/" });
    }, [loginWithRedirect]);
    return <div>Register</div>;
};

export default Register;
