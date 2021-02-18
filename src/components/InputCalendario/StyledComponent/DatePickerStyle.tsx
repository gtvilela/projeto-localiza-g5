import styled from 'styled-components';

interface IDatePickerButtonContainerProps {
    backGroundColor?: string;
    gridColumnsStart?: number;
    width?: string;  
}

interface IDatePickerContainerProps {
    // visible: boolean;
}

export const DatePickerContainer = styled.div<IDatePickerContainerProps>`
    background: #F2F2FA;
    position: absolute;
    min-width: 300px;
    border-radius: 5px;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223,225,229,0);
    z-index: 100;
    /* display: ${(props) => props.visible === true ? 'block' : 'none'}; */
`;

export const DatePickerHeaderContainer = styled.div`
    background: #F2F2FA;
    position: relative;
    width: 100%;
    display: inline-flex;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    color: black;
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
    color: black;
`;

export const DatePickerBodyContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, auto);
    grid-template-rows: repeat(6, 50px);
`;
