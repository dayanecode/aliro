import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import { Description_h3 } from '../Descriptions/Descriptions_h3';
import { Description_p } from "../Descriptions/Descriptions_p";
import img from "./../../assets/icons/logoStellantis.png"
import img2 from "./../../assets/icons/logo_github.png"

const Wrapper = styled.footer`
    width: 100%;
    height: 60vh;
    padding: 5vh 0;
    background-color: ${Colors.LIGHT_BLUE};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Div1 = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
`;

const Div1_1 = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Div1_2 = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Image = styled.img.attrs({
    src: img,
    alt: 'Logotipo Stelantis'
}) `
    width: 100%;
    height: 15vh;
`;

const GitHub = styled.img.attrs({
    src: img2,
    alt: 'Logotipo GitHub'
}) `
    width: 2vw;
    margin: 0 1vw 0 0;
`;



const Linha = styled.div`
    width: 90%;
    height: 2px;
    background-color: ${Colors.NEUTRAL_BLACK};
    margin: 5vh 0;
`;



const Div2 = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
`;

const Div2_1 = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Div2_2 = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Div2_3 = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Div2_4 = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Div2_5 = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const DivGit = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
`;





export function Footer(){
    return (
        <>
            <Wrapper>
                <Div1>
                    <Div1_1>
                        <Description_h3>FIAP | 2TINOR-2022</Description_h3>
                        <Description_p>SISTEMAS PARA INTERNET</Description_p>
                        <Description_p>GRUPO X</Description_p>
                    </Div1_1>

                    <Div1_2>
                        <Description_p><i>Powered by:</i></Description_p>
                        <Image />
                    </Div1_2>
                </Div1>

                <Linha />

                <Div2>
                    <Div2_1>
                        <Description_h3>Dayane Ramos do Nascimento</Description_h3>
                        <Description_p>RM 92632</Description_p>
                        <DivGit>
                        <GitHub />
                            <Description_p>dayanecode</Description_p>
                        </DivGit>
                    </Div2_1>

                    <Div2_2>
                    <Description_h3>Eduardo Feliciano Zimmermann</Description_h3>
                        <Description_p>RM 92197</Description_p>
                        <DivGit>
                        <GitHub />
                            <Description_p>DufZ</Description_p>
                        </DivGit>
                    </Div2_2>

                    <Div2_3>
                    <Description_h3>Gabriel Dovnorovzki Rodrigues</Description_h3>
                        <Description_p>RM 92399</Description_p>
                        <DivGit>
                        <GitHub />
                            <Description_p>gabsdovz</Description_p>
                        </DivGit>
                    </Div2_3>

                    <Div2_4>
                    <Description_h3>Henrique Aslan Marques Pina</Description_h3>
                    <Description_p>RM 92542</Description_p>
                        <DivGit>
                        <GitHub />
                            <Description_p>HMpina</Description_p>
                        </DivGit>
                    </Div2_4>

                    <Div2_5>
                    <Description_h3>Henrique Fernandez Soares</Description_h3>
                        <Description_p>RM 92489</Description_p>
                        <DivGit>
                        <GitHub />
                            <Description_p>RickFernandez</Description_p>
                        </DivGit>
                    </Div2_5>

                </Div2>
            </Wrapper>
        </>
    );
}