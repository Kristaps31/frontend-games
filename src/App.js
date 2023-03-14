import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Titlebar from "./componenets/Titlebar";
import TopReviews from "./componenets/TopReviews";

function App() {
  return (
    <div className="app">
      <Titlebar />
      <Navbar />
      <Routes>
        <Route path="/" element={ <TopReviews />} />
      </Routes>
    </div>
  );
}

export default App;
