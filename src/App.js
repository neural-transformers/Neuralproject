import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import {BrowserRouter as Router,Routes,Route,Navigate, Outlet} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
      <Route path='/about'  element={<AboutPage />} />
        <Route path='/courses'  element={<CoursesPage />} />
        <Route path='/'  element={<Home />} />
      </Routes>
    </Router>

      <div className='bg-bg w-full '></div>
    <Footer />
    </>
  );
}

export default App;
