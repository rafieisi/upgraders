import { HeroSection } from "./style/components/hero-section";
import { Navbar } from "./style/components/navbar";

function App() {
  return (
    <div className="text-lg text-gray-600 bg-blue-900">
      <Navbar></Navbar>
      <HeroSection />
      <div className="h-screen bg-white"></div>
    </div>
  );
}

export default App;
