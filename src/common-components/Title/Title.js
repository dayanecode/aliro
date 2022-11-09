import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, FontWeights } from "../../shared/DesignTokens";

export const Title = styled.span `
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.ULTRA_BOLD};
    font-size: ${FontSizes.FOUR};
    color: ${Colors.NEUTRAL_BLACK};
    margin: 0;
    padding: 0;
`;