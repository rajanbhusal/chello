import styled from "styled-components";
import { color, font, mixin, sizes } from "../../shared/utils/styles";

export const Title = styled.div`
        color: ${color.textBlue};
        ${font.medium};
        font-size: 26px;
`

export const LoginForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
`
export const LoginContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left : 40%;
        gap: 20px;
`
export const Button = styled.button`
        width: 89px;
        height: 48px;
        background-color: #5858FA;
        border-radius: 18px;
        border: none;
        color: white;
        font: ${font.medium};
        ${mixin.clickable};
`

export const Buttons = styled.div`
        display: flex;
        align-items: flex-start;
        gap: 100px;
        a{
            color: ${color.textLightGrey};
            font: ${font.regular};
        }
`
export const EmailField = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        input{
            width: 320px;
            height: 40px;
            border: ${sizes.borderRight};
            border-radius: 4px;
            color: #F1F1F1;
        }
        &:[type="email"]{
            font: ${font.regular};
        }
`
export const PasswordField = styled(EmailField)``