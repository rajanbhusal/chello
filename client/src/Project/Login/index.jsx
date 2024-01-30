import React, { Fragment, useState } from "react";
import Footer from "../Footer";
import { Button, Buttons, EmailField, LoginContainer, LoginForm, PasswordField, Title } from "./styles";
import Logo from "../../App/assets/images/Logo.png";
import { ChelloLogo } from "../HeaderTop/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const apiURL = "http://127.0.0.1:8000/token/";
        const user ={
            username: username,
            password: password
        }
        try {
            const { data } = await axios.post(apiURL, user, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log("Data:", data);
            localStorage.clear();
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
            navigate("/");
        } catch (error) {
            console.error("Axios Error:", error);
        }
    }
    return (
        <Fragment>
            <ChelloLogo src={Logo} width="100px" height="100px"></ChelloLogo>
            <LoginContainer>
                <Title>Log In</Title>
                <LoginForm onSubmit={handleLogin}>
                    <EmailField>
                        <label htmlFor="username">Username</label>
                        <input  id="username" name="username" onChange={e => setUsername(e.target.value)}/>
                    </EmailField>
                    <PasswordField>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                    </PasswordField>
                    <Buttons>
                        <Button type="submit">Log In</Button>
                        <a href="#">Forget Password?</a>
                    </Buttons>
                </LoginForm>
                </LoginContainer>
            <Footer />
        </Fragment>
    );
}

export default Login;