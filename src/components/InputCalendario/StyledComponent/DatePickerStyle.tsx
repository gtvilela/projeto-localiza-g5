import styled from 'styled-components';

interface IDatePickerContainerProps {

}

interface IDatePickerButtonContainerProps {
    backGroundColor?: string;
    gridColumnsStart?: number;
    width?: string;  
}

export const DatePickerContainer = styled.div`
    position: absolute;
    min-width: 300px;
    border-radius: 5px;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223,225,229,0);
`;

export const DatePickerHeaderContainer = styled.div`
    position: relative;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
`;

export const DatePickerButtonContainer = styled.button<IDatePickerButtonContainerProps>`
    text-align: center;
    background: #F2F2FA;
    border-radius: 3px;
    border: 1px solid transparent;
    grid-column-start: ${(props) => props.gridColumnsStart};
    width: ${(props) => props.width};

    background: ${(props) => props.backGroundColor};
    color: ${(props) => props.backGroundColor.length > 1 ? '#F2F2FA' : 'black'};

    &:hover {
        color: #00984a;
        color: ${(props) => props.backGroundColor.length > 1 ? '#F2F2FA' : 'black'};
        border: 1px solid #00984a;
        outline: none;
        transition: all 500ms ease;
    }
`;

export const SubHeaderDatePickerContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, auto);
`;

export const DatePickerBodyContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, auto);
    /* grid-template-rows: 50px 50px 50px 50px 50px 50px; */
    grid-template-rows: repeat(6, 50px);
`;
