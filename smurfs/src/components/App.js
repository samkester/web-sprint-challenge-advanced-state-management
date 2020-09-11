//import axios from "axios";
import React/*, { useEffect }*/ from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import StyledApp from "./styled/StyledApp";

/*const testSmurf = {
  name: "Groucho",
  age: 50,
  height: "a lot"
}*/

function App(){
  // test for initial API status
  /*useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

    axios.post("http://localhost:3333/smurfs", testSmurf)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
  } ,[]);*/

  return (
    <StyledApp>
      <div className="container">
        <h1>Smurfin' Redux</h1>
        <SmurfList />
      </div>
    </StyledApp>
  );
}

export default App;
