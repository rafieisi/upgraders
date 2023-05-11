import { gql, useLazyQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect, useState } from "react";

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
  const [offerUrl, setOfferUrl] = useState("");
  const [error, setError] = useState("");

  const [getOfferUrl, queryState] = useLazyQuery(GET_OFFER_URL, {
    onCompleted: ({ getOfferUrl }) => {
      setOfferUrl(getOfferUrl.offerUrl);
    },
    onError: (error) => {
      setError(error);
    }
  });

  const { loading } = queryState;

  const checkEligibility = () => {
    if (!loading) {
      setOfferUrl("");
      getOfferUrl({variables: {
        pid: pid,
        pnr: pnr,
        lastname: lastName,
      }});
    }
  };

  return {
    state: { pid, lastName, pnr, loading, error, offerUrl  },
    debug: queryState,
    actions: {
      setPid,
      setLastName,
      setPnr,
      checkEligibility,
      reset: () => {
        setPid("");
        setLastName("");
        setPnr("");
        setOfferUrl("");
        setError("");
      }
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
