import styled from 'styled-components';
import { color, mixin } from '../../../shared/utils/styles';

export const Container = styled.div`
    ${mixin.menuItem};
    color: ${color.textSideLink};
    ${mixin.clickable};
`