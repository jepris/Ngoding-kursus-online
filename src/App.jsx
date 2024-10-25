import { Route, Routes } from "react-router-dom";

import NavbarComponents from "./components/NavbarComponents";
import FooterComponent from "./components/FooterComponent";

import HomePages from "./pages/HomePages";
import KelasPages from "./pages/KelasPages";
import FaqPages from "./pages/FaqPages";
import TestimonialPages from "./pages/TestimonialPages";
import SyaratketenPages from "./pages/SyaratketenPages";




function App() {
  return (
  <div>

    <NavbarComponents />

    <Routes>
      <Route path="/" Component={HomePages}></Route>
      <Route path="/kelas" Component={KelasPages}></Route>
      <Route path="/testimonial" Component={TestimonialPages}></Route>
      <Route path="/faq" Component={FaqPages}></Route>
      <Route path="/syaratketen" Component={SyaratketenPages}></Route>
      <Route path="/syaratketen" Component={SyaratketenPages}></Route>
      <Route path="/syaratketen" Component={SyaratketenPages}></Route>
    </Routes>

    <FooterComponent />
  </div>
  )
}
export default App
