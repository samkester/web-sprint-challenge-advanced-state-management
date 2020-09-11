import styled from "styled-components";

export default styled.div`
    background-color: ${props => props.theme.backgroundColor.page};
    ${props => props.theme.flex}
    width: 100%; min-height: 100vh;

    div.container{
        color: ${props => props.theme.color.app};
        background-color: ${props => props.theme.backgroundColor.app};

        ${props => props.theme.flex}
        ${props => props.theme.borders}
        ${props => props.theme.spacing}
        width: 80%;

        h1{
            font-size: 3.6rem;
            font-style: italic;
            font-weight: bold;
        }
    }
`;