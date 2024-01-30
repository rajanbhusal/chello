import React,{Fragment} from "react";
import Logo from "../../App/assets/images/Logo.png";
import { ChelloLogo, Header } from "./styles";


const HeaderTop = () => (
    <Header>
        <ChelloLogo src={Logo} alt="logo" />
    </Header>
)

export default HeaderTop;