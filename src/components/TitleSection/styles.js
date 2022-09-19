import styled from 'styled-components'

export const Title = styled.h1`
    font-family: 'Verdana';
    color: ${props => props.theme.title};
    font-size: 20px;
    font-weight: 700;
    display: inline;
    margin-left: 10px;
`

export const Logo = styled.img`
    width: 33px;
    margin-bottom: -9px;
`