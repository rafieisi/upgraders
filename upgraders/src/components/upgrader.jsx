import React from "react";
import { TabSet, TabSheet } from "./TabSet";
import { useEligibilityContext } from "../eligibility-context";

import partnerInfo from "../assets/data/partner";

const partner_css = "border rounded-l-full p-1 pl-2 px-2 border-gray-400 w-4/12"
const booking_css = "border-b border-t p-1 pl-2 px-2 border-gray-400 w-4/12"
const lastname_css = "border rounded-r-full p-1 pl-2 px-2 border-gray-400 w-4/12"
const button_css = "text-white px-8 py-2 text-xs bg-blue-600 rounded-full mt-4"
const paragraph_css = "text-md my-1 ml-1 mb-3 font-[900] text-orange-600"
const button_container_css="flex flex-row justify-between content-center items-center align-middle"
const error_css = "text-red-600 flex flex-row content-center items-center align-middle"
const error_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>

const TabContent = ({ label, partners }) => {
  const { state, actions } = useEligibilityContext();

  return (
    <>
      <p className={paragraph_css}>
        Check for {label} upgrades:
      </p>
      <div>
        <select
          class={partner_css}
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
          class={booking_css}
          placeholder="Booking #"
          value={state.pnr}
          onChange={(e) => actions.setPnr(e.target.value)}
        />
        <input
          type="text"
          class={lastname_css}
          placeholder="Last Name"
          value={state.lastName}
          onChange={(e) => actions.setLastName(e.target.value)}
        />
      </div>
      <div class={button_container_css}>
        {!state.loading && state.error ? (
          <p class={error_css}>
            <span>{error_icon}</span>&nbsp; Sorry, upgrade not applicable to your booking
          </p>
        ):(<p></p>)}
        <button
          class={button_css}
          onClick={actions.checkEligibility}
        >
          Check Now
        </button>
      </div>
      {
      state.loading ? (<h3 className="block font-bold text-lg">Loading ...</h3>) :
      state.offerUrl && (
          <>
            <h3 className="block font-bold text-lg">You are eligible!!</h3>
            <a className="font-bold" href={state.offerUrl}>
              Click here to upgrade
            </a>
          </>
        )
      }
    </>
  )
};

export const Upgrader = () => {
  const { actions } = useEligibilityContext();

  return (
    <div className="bg-white rounded-md mt-4 text-sm w-[550px] flex flex-row drop-shadow-xl">
      <TabSet onChange={actions.reset}>
        {["Flight", "Cruise", "Rail"].map((label) => (
          <TabSheet key={label} label={label}>
            <TabContent label={label.toLowerCase()} partners={partnerInfo[label]}/>
          </TabSheet>
        ))}
      </TabSet>
    </div>
  );
};
