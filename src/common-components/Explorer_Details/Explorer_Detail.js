import styled from 'styled-components';
import { BorderRadiuses } from '../../shared/DesignTokens';
import { Detail_Avaliation } from '../../common-components/Explorer_Details/Detail_Avaliation/Detail_Avaliation';

const Detail_Card = styled.div`
    width: 10%;
    height: 250px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    borde: 1px solid black;
    border-radius: ${BorderRadiuses.ONE};
`;

export function Explorer_Detail() {
    return (
        <>
            <Detail_Card>
                <Detail_Avaliation />
            </Detail_Card>
        </>
    );
}