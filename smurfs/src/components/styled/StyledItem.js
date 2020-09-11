import styled from "styled-components";

export default styled.div`
    color: ${props => props.theme.color.item};
    background-color: ${props => props.theme.backgroundColor.item};

    display: flex; flex-direction: row; justify-content: space-around;
    ${props => props.theme.borders}
    ${props => props.theme.spacing}
    padding: 2%; margin-bottom: 2%;

    &:last-of-type{
        margin-bottom: 0;
    }

    p{
        width: 100%;
        ${props => props.theme.flex}
    }
`;