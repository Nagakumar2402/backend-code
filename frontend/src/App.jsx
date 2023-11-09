import { useState } from "react";
import axios from "axios";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [joke, setJoke] = useState([]);

  const getJoke = async () => {
    const { data } = await axios.get("/api/jokes");
    setJoke(data);
  };

  useEffect(() => {
    getJoke();
  });
  console.log(joke);

  return (
    <>
      <h1>Naga kumar reddy</h1>
      <p>JOKE:{joke?.length}</p>
      {joke?.map((j) => {
        return (
          <div className="joke">
            <h5>{j?.setup}</h5>
            <p>{j?.punchline}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
