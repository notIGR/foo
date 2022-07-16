import { useState } from "react";
import DisplayIdea from "./compenets/displayIdeas";


function App() {
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"
  ]);



  return (
    <main>
      <h1>Welcome, Super Awesome Movie Monster Think Tank!</h1>
      <DisplayIdea ideas={ ideas } />
      <br />
      
      <h1>Submit your ideas down below:</h1>


    </main>
  );
}

export default App;

