import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../state/actions";
import Smurf from "./Smurf";
import StyledList from "./styled/StyledList";

function SmurfList({mainState, smurfs, getSmurfs}){
    // loads smurfs on startup (and if our getSmurfs action ever somehow changes)
    useEffect(() => {
        getSmurfs();
    },[getSmurfs]);

    return (
        <StyledList>
            {
                (mainState === "loaded" && smurfs) ?
                smurfs.map(item => <Smurf smurf={item} key={item.id} />)
                :
                <div>Please wait, loading...</div>
            }
        </StyledList>
    )
}

export default connect((state) => {return{
    // props
    mainState: state.mainState,
    smurfs: state.smurfs,
}}, {
    // actions
    getSmurfs
})(SmurfList);