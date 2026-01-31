import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
