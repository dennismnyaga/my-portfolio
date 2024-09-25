import "./App.css"
import HomePage from "./pages/HomePage"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="potfolio/*" element={<Portfolio />} />
        <Route path="/potfolio/:porfolioId" element={<PortfolioDetails />} />
      </Routes>
    </BrowserRouter>
    // <div className="">
    //   <HomePage />
    // </div>
  )
}

export default App
