import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}

export default App;
