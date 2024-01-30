import styled from 'styled-components';
import { mixin, sizes } from '../../shared/utils/styles';

export const Container = styled.div`
        ${mixin.smallScreen};
        padding-top: ${sizes.paddingSmall};
        flex-shrink: 0;
        margin-left: ${sizes.marginSmall};
`