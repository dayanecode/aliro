import styled from "styled-components";
import { Link } from "react-router-dom";
import { BorderRadiuses, Colors, FontSizes } from "../../shared/DesignTokens";

export const Button_Otimizar =  styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    width: 10%;
    height: 40px;
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    background-color: ${Colors.NETRAL_DARK_BLUE};
    color: ${Colors.NEUTRAL_WHITE};
    font-size: ${FontSizes.ONE_QUARTER};
    border-radius: ${BorderRadiuses.TWO}
`;