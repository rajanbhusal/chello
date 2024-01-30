import styled from 'styled-components';
import { font, mixin, sizes } from '../../shared/utils/styles';

export const NavBarContainer = styled.div`
        ${mixin.mediumScreen};
        width: 360px;
        padding-top: ${sizes.paddingLarge};
        flex-shrink: 0;
        ${font.medium};
`
export const Image = styled.img`
    ${mixin.menuItem};
    width: ${sizes.profileImageWidth};
    height: ${sizes.profileImageHeight};
    border-radius: ${sizes.profileBorderRadius};
`