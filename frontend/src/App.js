import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Services from "./pages/Services";
import Products from "./pages/Products";
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
        <Route element={<Services/>} path='/services'/>
       <Route element={<Products/>} path='/products'/>
      </Routes>
    </Router>

      <div className='bg-bg w-full '></div>
    <Footer />
    </>
  );
}

export default App;
