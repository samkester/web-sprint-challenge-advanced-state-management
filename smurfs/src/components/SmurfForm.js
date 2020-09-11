import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../state/actions";
import StyledForm from "./styled/StyledForm";

const initialFormValues = {
    name: "",
    age: "",
    height: "",
}

function SmurfForm({formState, postSmurf}){
    const [formValues, setFormValues] = useState(initialFormValues);

    const updateState = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
    }

    const formSubmit = (event) => {
        event.preventDefault();
        postSmurf({...formValues, age: Number(formValues.age)});
        setFormValues(initialFormValues);
    }
    
    return (
        <StyledForm onSubmit={formSubmit}>
            <form>
                <label>Name: 
                    <input type="text" name="name" value={formValues.name} onChange={updateState} />
                </label>
                <label>Age: 
                    <input type="text" name="age" value={formValues.age} onChange={updateState} />
                </label>
                <label>Height: 
                    <input type="text" name="height" value={formValues.height} onChange={updateState} />
                </label>
                <button>Send Smurf!</button>
            </form>
            <div className="message">
                {
                formState === "loaded" ?
                "Smurf sent successfully."
                :
                formState === "pending" ?
                "Sending smurf..."
                :
                formState === "failed" ?
                "Smurf sending failed."
                :
                ""
                }
            </div>
        </StyledForm>
    )
}

export default connect((state) => {return{
    // props
    formState: state.formState
}}, {
    // actions
    postSmurf
})(SmurfForm);