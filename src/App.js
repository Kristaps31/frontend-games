import Navbar from "./componenets/Navbar";
import Titlebar from "./componenets/Titlebar";
import TopReviews from "./componenets/TopReviews";
import IndividualReview from "./componenets/IndividualReview";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Titlebar />
      <Navbar />
      <TopReviews />
        <Routes>
          <Route path="/reviews/:review_id" element={<IndividualReview />} />
        </Routes>
    </>
  );
}

export default App;
