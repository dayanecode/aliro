import styled from "styled-components";
import { Link } from "react-router-dom";
import { BorderRadiuses, Colors, FontSizes } from "../../shared/DesignTokens";

export const Button_Destinos =  styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    width: auto;
    height: 80px;
    padding: 10px 80px;
    text-decoration: none;
    cursor: pointer;
    background-color: ${Colors.DARK_BLUE};
    color: ${Colors.NEUTRAL_WHITE};
    font-size: ${FontSizes.FOUR};
    border-radius: ${BorderRadiuses.TWO}
`;