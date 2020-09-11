import styled from "styled-components";

export default styled.div`
    color: ${props => props.theme.color.section};
    background-color: ${props => props.theme.backgroundColor.section};

    ${props => props.theme.flex}
    ${props => props.theme.borders}
    ${props => props.theme.spacing}

    form{
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        input{
            font-size: 1em;
            margin-left: 0.25em;
            border: 1px dotted currentColor;
            border-bottom-style: solid;
            background: transparent;
        }

        button{
            ${props => props.theme.borders}
            font-size: 1em;
            padding: 0.5% 2%;
            background: ${props => props.theme.backgroundColor.item};
            cursor: pointer;

            :hover{
                text-decoration: underline;
            }
        }
    }
`;