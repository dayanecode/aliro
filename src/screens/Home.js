import { Header } from "../common-components/Header/Header";
import { Button_Destinos } from "../common-components/Buttons/Buttons_Destinos";
import styled from "styled-components";
import img from "./../assets/images/background_home.png";

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

export function Home() {
    return (
        <div>
            <Header />
            <Background_img>
                <Button_Destinos>Confira destinos inclusivos</Button_Destinos>
            </Background_img>
        </div>
    );
}