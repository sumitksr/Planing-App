import { useState } from "react";
import "./App.css";
import data from "./data";
import Tours from "./compo/Tours";
function App() {
  const [tours, setTours] = useState(data);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Tours tours={tours} />
    </div>
  );
}

export default App;
