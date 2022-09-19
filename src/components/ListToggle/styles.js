import styled from 'styled-components';


export const Wrapper = styled.div`
    display:inline-block;
    margin-left:36px;
`


export const Label = styled.label`
    cursor: pointer;
    margin-right: 2px;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    &:last-of-type{
        &:before {
            font-weight:400;
            color: ${({ theme }) => theme.text};
            content: "|";
        }
    }
`

export const Input = styled.input`
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;

    &:checked + ${Label} {
        font-weight:700;
        color: #FE7139
    } 
`
