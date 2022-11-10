import styled from "styled-components";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer";
import { Description_h2 } from "../common-components/Descriptions/Descriptions_h2";
import { Description_p } from "../common-components/Descriptions/Descriptions_p";
import { Destiny_Images } from "../common-components/Destiny_Images/Destiny_Images";

import { Link } from "react-router-dom";
import { BorderRadiuses, Colors, FontSizes } from "../shared/DesignTokens";

import Destiny_1 from "./../assets/images/example-local-1.png";

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

export function Explorer() {
    return (
        <div>
            < Header />
            
            <Container>
                <Section>
                    <div>
                        <Description_p>Para uma melhor experiência ajuste as recomendações às suas necessidade:</Description_p>
                        
                        <Div_Checkbox>
                            <input type="checkbox"/>
                            <Description_p>Visual</Description_p>
                        </Div_Checkbox>

                        <Div_Checkbox>
                            <input type="checkbox"/>
                            <Description_p>Cadeirante</Description_p>
                        </Div_Checkbox>

                        <Div_Checkbox>
                            <input type="checkbox"/>
                            <Description_p>Audição reduzida</Description_p>
                        </Div_Checkbox>

                        <Div_Checkbox>
                            <input type="checkbox"/>
                            <Description_p>Outros</Description_p>
                        </Div_Checkbox>
                    </div>

                    <Button_Otimizar to={`/Details`}>
                        Otimizar resultados
                    </Button_Otimizar>
                </Section>

                <Section>
                    <div>
                        <Description_h2>Nome do Local</Description_h2>
                        <Destiny_Images src={Destiny_1} />
                    </div>
                </Section>

            </Container>
            < Footer />
        </div>
    )
}