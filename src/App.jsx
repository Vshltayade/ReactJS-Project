import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Routing from "./Routing/Routing";

function App() {
  // state to store items and passing as props
  const [items, setItems] = useState({});

  return (
    <div className="background1">
      <Header items={items} setItems={setItems} />
      <Routing items={items} setItems={setItems} />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
