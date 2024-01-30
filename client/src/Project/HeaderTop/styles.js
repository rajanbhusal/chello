import styled, { css } from "styled-components";
import { color, mixin, sizes } from "../../shared/utils/styles";

export const ChelloLogo = styled.img`
    width: 177px;
    height: 177px;
    flex-shrink: 0;
`

export const Header = styled.div`
    ${mixin.single};
    height: ${sizes.homeNavBarTopHeight};
    background-color: ${color.primary};
`