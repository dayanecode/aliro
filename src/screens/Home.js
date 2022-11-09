import { Header } from "../common-components/Header/Header";
import { Button_Destinos } from "../common-components/Buttons/Buttons_Destinos";
import styled from "styled-components";
import img from "./../assets/images/background_home.png";
import { Title } from "../common-components/Title/Title";
import img2 from "./../assets/images/pessoas_pcd.png"
import { Description_h2 } from "../common-components/Descriptions/Descriptions_h2";
import { Description_p } from "../common-components/Descriptions/Descriptions_p";
import { Footer } from "../common-components/Footer/Footer";

const Section = styled.div`
width: 100%;
height: 180vh;
`;

const Background_img = styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
    padding: 0 0 0 5vw;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
`;

const Title_Section = styled.div`
    margin: 5vh 0 5vh 5vw;
`;

const Section_Two = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Image = styled.img.attrs({src: img2, alt:'representação de pessoas pcd'})`
    width: 30%;
    height: 35vh;
`;

const Description_Section = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export function Home() {
    return (
        <div>
            <Header />
            <Section>

                <Background_img>
                    <Button_Destinos  to={`/Explorer`}>Confira destinos inclusivos</Button_Destinos>
                </Background_img>

                <Title_Section>
                    <Title>Sobre Nós</Title>
                </Title_Section>

                <Section_Two>
                    <Image />

                    <Description_Section>
                    <Description_h2>Queremos facilitar e  possibilitar a mobilidade a todas as pessoas!</Description_h2>
                    <Description_p>Criamos o Aliro para possibilitar e facilitar o deslocamento para todas as pessoas do mundo! Com o Aliro você poderá encontrar o melhor caminho e destino para poder aproveitar o seu dia.</Description_p>
                    <Description_p>Aliro significa acesso, no idioma Esperanto, que é uma lingua planejada para ser de acesso global, tal como o objetivo do nosso projeto!</Description_p>
                    </Description_Section>
                </Section_Two>

            </Section>

            <Footer />
        </div>
    );
}