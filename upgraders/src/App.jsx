import { HeroSection } from "./components/hero-section";
import { Navbar } from "./components/navbar";
import { EligibilityProvider } from "./eligibility-context";

function App() {
  return (
    <EligibilityProvider>
      <div className="text-lg text-gray-600 bg-blue-900">
        <Navbar></Navbar>
        <HeroSection />
        <div className="h-screen bg-white"></div>
      </div>
    </EligibilityProvider>
  );
}

export default App;
