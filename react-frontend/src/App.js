import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateEmployee from "./components/CreateEmployee";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployee />} />
            <Route path="/employees" element={<ListEmployee />} />
            <Route path="/add-employee/:id" element={<CreateEmployee />} />
            <Route path="/view-employee/:id" element={<ViewEmployee />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
