import styled from 'styled-components';

interface IDatePickerContainerProps {

}

export const DatePickerContainer = styled.div`
    position: absolute;
    min-width: 300px;
    max-width: 350px;
    min-height: 300px;
    border-radius: 5px;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223,225,229,0);
`;

export const DatePickerHeader = styled.div`
    position: relative;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: black; */
`;

export const DatePickerButtonContainer = styled.div`
    width: 20%;
    text-align: center;
    border: 1px solid;
`;
