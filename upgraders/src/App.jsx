import { ApolloProvider } from "@apollo/client";
import { HeroSection } from "./components/hero-section";
import { Navbar } from "./components/navbar";
import { NumberSection } from "./components/numbers";
import { OtherSection } from "./components/otherSections";
import { PartnersSection } from "./components/partners";
import { EligibilityProvider } from "./eligibility-context";
import { apolloClient } from "./apolloClient";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <EligibilityProvider>
        <div className="text-lg text-gray-600 bg-blue-900">
          <Navbar></Navbar>
          <HeroSection />
          <div className="bg-white">
            <NumberSection />
            <PartnersSection />
            <OtherSection />
          </div>
        </div>
      </EligibilityProvider>
    </ApolloProvider>
  );
}

export default App;
