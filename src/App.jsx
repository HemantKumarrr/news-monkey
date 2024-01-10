import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route
            path="/entertainment"
            element={<News category="entertainment" />}
          />
          <Route path="/health" element={<News category="health" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/technology" element={<News category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
