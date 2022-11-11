import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, FontWeights, Spaces } from "../../shared/DesignTokens";

export const Description_h2 = styled.span`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.ULTRA_BOLD};
    font-size: ${FontSizes.THREE};
    color: ${Colors.NEUTRAL_BLACK};
    margin-top: ${Spaces.TEN};
    margin-right: ${Spaces.TEN};
`;