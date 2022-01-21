import * as React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from "./components/Landingpage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Quizz from "./components/Quizz";
import Search from "./components/Search";
import Detailpage from "./components/Detailpage";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import AddReview from "./components/AddReview";
import FalseReview from "./components/FalseReview";
import HeaderImage from "./components/HeaderImage";

function App() {
  return (
      <Router>
    <div className="App">

        <Navigation />
        <HeaderImage />
        <Routes>
            <Route path='/' element={<Landingpage />}/>
            <Route exact path='/quizz' element={<Quizz />} />
            <Route exact path='/search' element={<Search />} />
            <Route exact path='/detailpage' element={<Detailpage />} />
            <Route exact path='/detailpage/contact' element={<Contact />} />
            <Route exact path='/detailpage/detailpage/reviews' element={<Reviews />} />
            <Route exact path='/detailpage/detailpage/reviews/addreview' element={<AddReview />} />
            <Route exact path='/search/detailpage' element={<Detailpage />} />
            <Route exact path='/search/detailpage/detailpage/reviews' element={<Reviews />} />
            <Route exact path='/search/detailpage/detailpage/reviews/addreview' element={<AddReview />} />
            <Route exact path='/search/detailpage/detailpage/reviews/addreview/falsereview' element={<FalseReview />} />
        </Routes>

        <Footer />
    </div>
      </Router>
  );
}

export default App;
