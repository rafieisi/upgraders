import React from "react";
import { TabSet, TabSheet } from "./TabSet";
import { useEligibilityContext } from "../eligibility-context";

import partnerInfo from "../assets/data/partner";

const TabContent = ({ partners }) => {
  const { state, actions } = useEligibilityContext();

  return (
    <>
      <p className="text-sm my-1 ml-1 mb-3 font-bold">
        Check for upgrade eligiblity here
      </p>
      <div>
        <select
          class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3"
          placeholder="Partner Name"
          onChange={(e) => actions.setPid(e.target.value)}
        >
          {
            partners.map(({ pid, partnerName }) => (
              <option key={pid} value={pid}>{partnerName}</option>
            ))
          }
        </select>
        <input
          type="text"
          class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3"
          placeholder="Booking #"
          value={state.pnr}
          onChange={(e) => actions.setPnr(e.target.value)}
        />
        <input
          type="text"
          class="border rounded-full p-1 pl-2 px-2 border-gray-400"
          placeholder="Last Name"
          value={state.lastName}
          onChange={(e) => actions.setLastName(e.target.value)}
        />
      </div>
      <div class="flex float-right">
        <button
          class="text-white px-8 py-2 text-xs bg-blue-600 rounded-full mt-6"
          onClick={actions.checkEligibility}
        >
          Check Now
        </button>
      </div>
      {
      state.loading ? (<h3 className="block font-bold text-lg">Loading ...</h3>) :
      state.offerUrl ? (
          <>
            <h3 className="block font-bold text-lg">You are eligible!!</h3>
            <a className="font-bold" href={state.offerUrl}>
              Click here to upgrade
            </a>
          </>
        ) :
       state.error && (<h3 className="block font-bold text-lg">Sorry, you are not eligibile to upgrade ...</h3>)
        }
    </>
  )
};

export const Upgrader = () => {
  return (
    <div className="bg-white rounded-md mt-4 text-sm w-[550px] flex flex-row drop-shadow-xl">
      <TabSet>
        {["Airline", "Cruise", "Rail"].map((label) => (
          <TabSheet key={label} label={label}>
            <TabContent partners={partnerInfo[label]}/>
          </TabSheet>
        ))}
      </TabSet>
    </div>
  );
};
