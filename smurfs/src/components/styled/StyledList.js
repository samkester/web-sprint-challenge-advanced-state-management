import styled from "styled-components";

export default styled.div`
    color: ${props => props.theme.color.section};
    background-color: ${props => props.theme.backgroundColor.section};

    ${props => props.theme.flex}
    ${props => props.theme.borders}
    ${props => props.theme.spacing}

    margin-bottom: 2%;
`;