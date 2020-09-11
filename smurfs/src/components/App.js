//import axios from "axios";
import React/*, { useEffect }*/ from "react";
import "./App.css";

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
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
}

export default App;
