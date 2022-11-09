import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import img from "./../../assets/icons/aliro-logo-color1.png"
import { Title } from "../Title/Title";

const Wrapper = styled.header `
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 2vw 0 2vw;
    background-color: ${Colors.LIGHT_BLUE};
`;

const Image = styled.img.attrs({
    src: img,
    alt: 'Logotipo Aliro'
}) `
    height: 10vh;
    margin: 0 1vw 0 0;
`;

export function Header() {
    return (
        <>
            <Wrapper>
                <Image />
                <Title>Aliro</Title>
            </Wrapper>

        </>
    );
}