import styled from "styled-components";

export default styled.div`
    color: ${props => props.theme.color.item};
    background-color: ${props => props.theme.backgroundColor.item};

    ${props => props.theme.flex}
    ${props => props.theme.borders}
    ${props => props.theme.spacing}
`;