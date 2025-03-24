import HomePage from "./pages/HomePage"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="about/" element={<HomePage />} />
        <Route path="portfolio/*" element={<Portfolio />} />
        <Route path="/potfolio/:porfolioId" element={<PortfolioDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
