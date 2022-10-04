// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";

// Context
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/details/activity-:id"
            element={<Details />}
          />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/calender" element={<div>calender</div>} />
          <Route exact path="/login" element={<div>welcome</div>} />
          <Route path="*" element={<div>nothing found...</div>} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
