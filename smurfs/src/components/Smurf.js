import React from "react";
import StyledItem from "./styled/StyledItem";

function Smurf({smurf}){
    return (
        <StyledItem>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </StyledItem>
    )
};

export default Smurf;