import "./App.css";
import GraphicPage from "./components/pages/GraphicPage";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="App" id="home">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graphicdesign" element={<GraphicPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
