import styled from "styled-components";
import { mixin, sizes } from "../../shared/utils/styles";

export const FeedContainer = styled.div`
        ${mixin.horizontalList};
`
export const CentreContents = styled.div`
        border-right: ${sizes.borderRight};
        border-left: ${sizes.borderRight};
        border-bottom: ${sizes.borderRight};
        padding: 0 ${sizes.paddingSmall};
        @media (max-width: 1280px) {
                width: 100%;
        }
        ${mixin.verticalList};
        gap: ${sizes.marginLarge};
`