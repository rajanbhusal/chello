import { createGlobalStyle  } from "styled-components";
import { font, mixin } from "../shared/utils/styles";

export default createGlobalStyle`
    html,body,#root{
        height:100%;
        width:100%;
        margin:0;
        padding:0;
        overflow-x:hidden;
        ${font.regular}
    }
    html{
        touch-action:manipulation;
    }
    a{
        ${mixin.link()}
    }
    input[type="text"]{
        ${font.regular}
    }
     

`