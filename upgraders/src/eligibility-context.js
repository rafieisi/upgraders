import { gql, useLazyQuery } from "@apollo/client";
import React, { createContext, useContext, useState } from "react";

const EligibilityContext = createContext();

const GET_OFFER_URL = gql`
  query getOfferUrl($pid: String!, $pnr: String!, $lastname: String!) {
    getOfferUrl(pid: $pid, pnr: $pnr, lastname: $lastname) {
      offerUrl
    }
  }
`;

const useEligibility = () => {
  const [pid, setPid] = useState("");
  const [lastName, setLastName] = useState("");
  const [pnr, setPnr] = useState("");

  const [getOfferUrl, queryState] = useLazyQuery(GET_OFFER_URL);

  const { data, loading, error } = queryState;

  const checkEligibility = () => {
    getOfferUrl({variables: {
      pid: pid,
      pnr: pnr,
      lastname: lastName,
    }})
  };

  return {
    state: { pid, lastName, pnr, loading, error, offerUrl: data?.getOfferUrl?.offerUrl },
    debug: queryState,
    actions: {
      setPid,
      setLastName,
      setPnr,
      checkEligibility,
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
