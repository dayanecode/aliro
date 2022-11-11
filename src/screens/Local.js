import styled from "styled-components";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer";
import { Description_h2 } from "../common-components/Descriptions/Descriptions_h2";
import { Description_p } from "../common-components/Descriptions/Descriptions_p";
import { Link } from "react-router-dom";
import { Button_Otimizar } from '../common-components/Buttons/Button_Otimizar'
import { BorderRadiuses, Colors, FontSizes, Shadows } from "../shared/DesignTokens";
import { SectionBody } from "../common-components/Section/SectionBody";
import { Card } from "../common-components/Card/Card";

const LocalImage = styled.div`
    width: 1160px;
    height: 60vh;
    background-image: url('${(props) => props.src}');
    background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
    `;

const LocalDetailsImage = styled.div`
	width: 100%;
	height: 248px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const LocalMap =styled.div`
width: 100%;
height: 50vh;
background-image: url('${(props) => props.src}');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

const Div_Checkbox = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 10px;
`;

export function Local() {
    return (
        <div>
            < Header />

            
            <SectionBody>
                    <div>
                        <Description_h2>Nome do Local</Description_h2> 
                        <Card>
                            <LocalImage 
                            src = {require('./../assets/images/example-local-800w.png')} 
                            alt='Restaurante 3'
                            />
                        </Card>                       
                    </div>
            </SectionBody>  

            <SectionBody>
                
                <Description_p>                   
             
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas eu nisl sit amet arcu fermentum accumsan ac nec leo.Vestibulum vehicula massa nec elit ornare, in porttitor erat vehicula.Aenean tristique placerat tortor, eget ultricies neque finibus eget.Mauris sed interdum nisi.Phasellus non urna lobortis, lobortis nisl vitae, rhoncus lacus.Suspendisse quis dignissim risus, id pulvinar tortor.Nunc non accumsan nulla, nec dapibus sem.Phasellus ultricies tincidunt arcu, sit amet aliquam libero condimentum vitae.Duis dapibus, erat vitae tempor posuere, magna odio auctor dolor, vitae efficitur dolor tellus non erat.Praesent consequat vel ante et semper.
                    <br/>
                    <br/>
                    Duis et neque nisl.Praesent eget mollis turpis.Morbi quis tristique ante.Nam ac sapien elit.Sed hendrerit massa semper vehicula hendrerit.In hac habitasse platea dictumst.Quisque id lectus magna.Fusce convallis elit a ultricies pretium.Nunc eleifend eu libero non iaculis.
              
                </Description_p>             
                
            </SectionBody>
            <SectionBody>
                <Card>
                    <LocalDetailsImage src={require('./../assets/images/example-local-detail-1.png')} alt='exemplo de um prato do menu contendo uma posta de salmão' />                   
                </Card>
                <Card>
                    <LocalDetailsImage src={require('./../assets/images/example-local-detail-2.png')} alt='exemplo de um prato do menu contendo tagliatelle' />                   
                </Card>
                <Card>
                    <LocalDetailsImage src={require('./../assets/images/example-local-detail-3.png')} alt='pessoa apreciando o seu prato' />                   
                </Card>
                <Card>
                    <LocalDetailsImage src={require('./../assets/images/example-local-detail-4.png')} alt='pessoa levando o seu alimento à boca' />                   
                </Card>
            </SectionBody>       
           
            <SectionBody>   
                <Card>
                    <LocalMap src={require('./../assets/images/map1.png')} alt='mapa de rota mais acessível' />
                </Card>            

                <Card>
                    <Description_p>
                        Baseado em suas necessidades sugerimos a seguinte rota.
                    <br/>
                    <br/>
                        Gostaria de ajustar?
                    </Description_p>


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
                            
                    
                    </Card>      
                    
                    <Button_Otimizar> Otimizar resultados </Button_Otimizar>             

            </SectionBody>      
          
                      
          
            < Footer />
        </div>
    )
}