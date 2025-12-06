import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Navbar1 from "./component/Navbar1"
import Home from "./component/Home"
import Footer1 from "./component/Footers1"
import Whoweare from "./component/Whoweare"
import Service1 from "./component/Service1"
import Form1 from "./component/Forms1"
import Error1 from "./component/Error1"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Residenziale from "./component/Residenziale"
import Business from "./component/Business"
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar1 />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Whoweare />} path="/Chisiamo" />
            <Route element={<Form1 />} path="/contatti" />
            <Route element={<Service1 />} path="/servizi" />
            <Route element={<Error1 />} path="*" />
            <Route element={<Residenziale />} path="/residenziale" />
            <Route element={<Business />} path="/business" />
          </Routes>
        </main>
        <footer>
          <Footer1 />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
