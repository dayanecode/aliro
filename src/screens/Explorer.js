import styled from "styled-components";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer";
import { Description_h2 } from "../common-components/Descriptions/Descriptions_h2";
import { Description_p } from "../common-components/Descriptions/Descriptions_p";

import { Link } from "react-router-dom";
import { BorderRadiuses, Colors, FontSizes } from "../shared/DesignTokens";

import avaliation_icon from  './../assets/icons/Accessibility.svg';

console.log(avaliation_icon);

const Container = styled.div`
    margin-inline: 10vw;
    margin-block: 5vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Section = styled.div`
    margin-top: 5vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
const Legend_Section = styled.div`
    margin-top: 5vw;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Section_Destinys = styled.div`
    margin-bottom: 5%;
    width: 100%;
    display: flex;
    flex-direction: column;
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

const Image = styled.div`
    width: 400px;
    height: 250px;
    background-image: url('${(props) => props.src}');
    background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const Detail_Card = styled.div`
    margin-top: 28px;
    height: 250px;
    margin-left: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${Colors.GRAY};
    border-radius: ${BorderRadiuses.ONE};
`;

const Detail_Legend_Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${Colors.GRAY};
    border-radius: ${BorderRadiuses.ONE};
`;
    
const Avaliation = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.GRAY};
`;

const Legend_Avaliation = styled.div`
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.GRAY};
`;

const Container_Acessibility_Icon = styled.div`
    display: flex;
    flex-direction: row;
`;

const Acessibility_Icon = styled.img.attrs({
    src: avaliation_icon,
    alt: 'Ícone de nível de acessibilidade do local'
}) `
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Button_See_More =  styled(Link)`
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

const Description_Legend = styled.div`
    marginLeft: 15px;
    height: 50px;
    font-size: ${FontSizes.TWO};
    padding: 5px 10px;
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

                    <Button_Otimizar>
                        Otimizar resultados
                    </Button_Otimizar>
                </Section>

                <Legend_Section>
                        <Description_h2 style={{ 'marginBottom': '10px' }}>Legenda</Description_h2>
                        <Detail_Legend_Card>
                            <Legend_Avaliation>
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                            </Legend_Avaliation>

                            <Description_Legend>
                                Este símbolo indica o quanto de acessibilidade é oferecida pelo local. Quanto mais pontos tiver, melhor o índice de acessibilidade.
                            </Description_Legend>
                        </Detail_Legend_Card>
                    </Legend_Section>

                <Section_Destinys>
                    <Section>
                        <div>
                            <Description_h2>Nome do Local</Description_h2>
                            <Image src={require('./../assets/images/example-local-1.png')} />
                        </div>

                        <div>
                        <Detail_Card>
                            <Avaliation>
                                <Description_p>Avaliação</Description_p>
                                <Container_Acessibility_Icon>
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                </Container_Acessibility_Icon>
                            </Avaliation>

                            <Description_p style={{ 'margin-left': '15px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt feugiat erat, nec sodales mi condimentum vel. Mauris imperdiet ante vel justo lacinia, sed congue massa convallis. Nulla vitae dolor sed mperdiet ante.
                            </Description_p>

                            <Button_See_More style={{ 'margin': '0 0 10px 15px' }} to={'/Detail'}>
                                Ver mais
                            </Button_See_More>
                        </Detail_Card>
                        </div>
                    </Section>

                    <Section>
                        <div>
                            <Description_h2>Nome do Local</Description_h2>
                            <Image src={require('./../assets/images/example-local-2.png')} />
                        </div>

                        <div>
                        <Detail_Card>
                            <Avaliation>
                                <Description_p>Avaliação</Description_p>
                                <Container_Acessibility_Icon>
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                </Container_Acessibility_Icon>
                            </Avaliation>

                            <Description_p style={{ 'margin-left': '15px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt feugiat erat, nec sodales mi condimentum vel. Mauris imperdiet ante vel justo lacinia, sed congue massa convallis. Nulla vitae dolor sed mperdiet ante.
                            </Description_p>

                            <Button_See_More style={{ 'margin': '0 0 10px 15px' }} to={'/Detail'}>
                                Ver mais
                            </Button_See_More>
                        </Detail_Card>
                        </div>
                    </Section>

                    <Section>
                        <div>
                            <Description_h2>Nome do Local</Description_h2>
                            <Image src={require('./../assets/images/example-local-3.png')} />
                        </div>

                        <div>
                        <Detail_Card>
                            <Avaliation>
                                <Description_p>Avaliação</Description_p>
                                <Container_Acessibility_Icon>
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                    <Acessibility_Icon src={require('./../assets/icons/Accessibility.svg')} />
                                </Container_Acessibility_Icon>
                            </Avaliation>

                            <Description_p style={{ 'margin-left': '15px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt feugiat erat, nec sodales mi condimentum vel. Mauris imperdiet ante vel justo lacinia, sed congue massa convallis. Nulla vitae dolor sed mperdiet ante.
                            </Description_p>

                            <Button_See_More style={{ 'margin': '0 0 10px 15px' }} to={'/Detail'}>
                                Ver mais
                            </Button_See_More>
                        </Detail_Card>
                        </div>
                    </Section>

                </Section_Destinys>

            </Container>
            < Footer />
        </div>
    )
}