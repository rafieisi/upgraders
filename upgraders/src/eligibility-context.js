import { gql, useQuery } from "@apollo/client";
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
  const [pid, setPid] = useState("5stlBZRGQF");
  const [lastName, setLastName] = useState();
  const [pnr, setPnr] = useState();
  const [offerUrl, setOfferUrl] = useState("");

  const { error, loading } = useQuery(GET_OFFER_URL, {
    variables: {
      pid: pid,
      pnr: pnr,
      lastname: lastName,
    },
    onCompleted: (data) => {
      setOfferUrl(data.getOfferUrl.offerUrl);
    },
    skip: !pid || !pnr || !lastName,
  });

  return {
    state: { pid, lastName, pnr, loading, error, offerUrl },
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
