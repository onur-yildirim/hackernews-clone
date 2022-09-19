import styled from 'styled-components'
import { tablet } from 'styles/mediaQueries'

export const Wrapper = styled.div`
    width: 85%;
    margin-left: auto;
    margin-right: auto ;
    height: 100%;
    overflow: hidden;
    padding-bottom: 200px;
    margin-top:30px;

    ${tablet} {
        width: 95%
    }
`