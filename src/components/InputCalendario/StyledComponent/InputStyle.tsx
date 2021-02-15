import styled from 'styled-components';

interface IInputContainerProps {
    background: string;
    color: string;
}

export const InputText = styled.input<IInputContainerProps>`
    background: #ffffff;
    color: #000000;
    padding: 12px 16px;
    border: 1px solid #000000;
`

export const LabelContainer = styled.div`
  font-weight: bold;
`

export const InputContainer = styled.div`
    display:flex;
    gap: 16px;
    align-items: center;
`