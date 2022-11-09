import styled from 'styled-components';
import {
	BorderRadiuses,
	Shadows,
} from '../../shared/DesignTokens';

const Image = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: ${Shadows.ONE};
    border-radius: ${BorderRadiuses.ONE};
    background-image: url('${(props) => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export function Destiny_Images(img) {
    <Image src={img} />
}