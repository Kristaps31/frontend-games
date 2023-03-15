
import Navbar from "./componenets/Navbar";
import Titlebar from "./componenets/Titlebar";
import TopReviews from "./componenets/TopReviews";
import IndividualReview from "./componenets/IndividualReview";
import { Routes, Route } from "react-router";
import Comments from "./componenets/Comments";

function App() {
  return (
    <div className="app">
      <Titlebar />
      <Navbar />
      <Routes>
        <Route path="/" element={ <TopReviews />} />
        <Route path="/reviews/:review_id" element={<IndividualReview /> } />
        <Route path="/reviews/:review_id" element={ <Comments />} />
        </Routes>
    </div>
  );
}

export default App;
