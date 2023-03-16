import Titlebar from "./componenets/Titlebar";
import TopReviews from "./componenets/TopReviews";
import IndividualReview from "./componenets/IndividualReview";
import { Routes, Route } from "react-router";
import Categories from "./componenets/Categories";
import Navbar from "./componenets/Navbar";
import { useState } from "react"

function App() {
  const [category, setCategory] = useState("")
  return (
    <div className="app">
      <Titlebar />
      <Navbar setCategory={setCategory} category={category}/>
      <Routes>
        <Route path="/" element={ <TopReviews />} />
        <Route path="/reviews/:review_id" element={<IndividualReview />} />
        <Route path="/categories/:category" element={<Categories setCategory={setCategory} category={category} />} />
      </Routes>
    </div>
  );
}

export default App;
