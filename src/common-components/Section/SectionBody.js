import styled from "styled-components";
import { Spaces } from "../../shared/DesignTokens";

export const SectionBody = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: ${Spaces.FIVE};
    margin-left: ${Spaces.TEN};    
    margin-right: ${Spaces.TEN};
`;