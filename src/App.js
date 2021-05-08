import "./App.css";
import "./components/layout/layout.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
