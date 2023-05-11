import React, { createContext, useContext, useState } from "react";

const EligibilityContext = createContext();

const useEligibility = () => {
  const [pid, setPid] = useState();
  const [lastName, setLastName] = useState();
  const [pnr, setPnr] = useState();

  return {
    state: { pid, lastName, pnr },
    actions: {
      setPid,
      setLastName,
      setPnr,
    },
  };
};

function EligibilityProvider({ children }) {
  const ctx = useEligibility();
  return (
    <EligibilityContext.Provider value={ctx}>
      {children}
    </EligibilityContext.Provider>
  );
}

const useEligibilityContext = () => useContext(EligibilityContext);

export { useEligibilityContext, EligibilityProvider };
