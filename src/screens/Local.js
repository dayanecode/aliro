import styled from "styled-components";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer";
import { Description_h2 } from "../common-components/Descriptions/Descriptions_h2";
import { Description_paragraph} from "../common-components/Descriptions/Descriptions_paragraph.js";
import { Description_p } from "../common-components/Descriptions/Descriptions_p";
import { Buttons_Otimizar} from "../common-components/Buttons/Buttons_Otimizar"
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

const Image = styled.div`
    width: 1080px;
    min-width: 25%;
    height: 60vh;
    margin: 120px;
    min-height: 100%;
    background-image: url('${(props) => props.src}');
    background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export function Local() {
    return (
        <div>
            < Header />

            
            <Section>
                    <div>
                        <Description_h2>Nome do Local</Description_h2> 
                        < Image src = {require('./../assets/images/example-local-3.png')
                        }
                        />                       
                    </div>
            </Section>  

            <Section>
                
                <Description_paragraph>                   
             
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas eu nisl sit amet arcu fermentum accumsan ac nec leo.Vestibulum vehicula massa nec elit ornare, in porttitor erat vehicula.Aenean tristique placerat tortor, eget ultricies neque finibus eget.Mauris sed interdum nisi.Phasellus non urna lobortis, lobortis nisl vitae, rhoncus lacus.Suspendisse quis dignissim risus, id pulvinar tortor.Nunc non accumsan nulla, nec dapibus sem.Phasellus ultricies tincidunt arcu, sit amet aliquam libero condimentum vitae.Duis dapibus, erat vitae tempor posuere, magna odio auctor dolor, vitae efficitur dolor tellus non erat.Praesent consequat vel ante et semper.

                    Duis et neque nisl.Praesent eget mollis turpis.Morbi quis tristique ante.Nam ac sapien elit.Sed hendrerit massa semper vehicula hendrerit.In hac habitasse platea dictumst.Quisque id lectus magna.Fusce convallis elit a ultricies pretium.Nunc eleifend eu libero non iaculis.
              
                </Description_paragraph>
                
            </Section>          
        
            <Section>
                <div>
                    <Description_paragraph>
                        Baseado em suas necessidades sugerimos a seguinte rota.
                    </Description_paragraph>
                    <Description_paragraph>
                        Gostaria de ajustar?
                    </Description_paragraph>


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
                < Button_Otimizar > Otimizar resultados </Button_Otimizar> 
            </Section>                            
          
            < Footer />
        </div>
    )
}