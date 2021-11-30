import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/registro" element={<Home />}></Route>
          <Route path="/products/" element={<Products />}></Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
