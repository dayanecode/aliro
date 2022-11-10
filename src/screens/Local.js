import styled from "styled-components";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer";
import { Description_h2 } from "../common-components/Descriptions/Descriptions_h2";
import { Description_p } from "../common-components/Descriptions/Descriptions_p";

import { Link } from "react-router-dom";
import { BorderRadiuses, Colors, FontSizes } from "../shared/DesignTokens";


const Container = styled.div`
    margin-inline: 10vw;
    margin-block: 5vh;
`;

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const Div_Checkbox = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 10px;
`;

const Button_Otimizar =  styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    width: 20%;
    height: 40px;
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    background-color: ${Colors.NETRAL_DARK_BLUE};
    color: ${Colors.NEUTRAL_WHITE};
    font-size: ${FontSizes.ONE_QUARTER};
    border-radius: ${BorderRadiuses.TWO}
`;

export function Local() {
    return (
        <div>
            < Header />

            
            <Section>
                    <div>
                        <Description_h2>Nome do Local</Description_h2>                        
                    </div>
            </Section>

            <Button_Otimizar>
                        Otimizar resultados
            </Button_Otimizar>



          
            < Footer />
        </div>
    )
}