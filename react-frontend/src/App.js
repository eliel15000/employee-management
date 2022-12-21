import './App.css';
import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="App">
    <div>
      <Header />
      <div className="container">
        <ListEmployee />
      </div>
      <Footer />
    </div>
  );
}

export default App;
