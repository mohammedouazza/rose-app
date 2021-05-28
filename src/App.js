import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
