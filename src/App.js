import "./App.css";
import NavBar from "./Components/NavBar";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
// import { bootstrapUtils } from "react-bootstrap/lib/utils";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;