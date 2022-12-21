import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="App">
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployee />} />
            <Route path="/employees" element={<ListEmployee />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
