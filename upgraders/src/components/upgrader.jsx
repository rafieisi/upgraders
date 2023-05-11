import React from "react";
import { TabSet, TabSheet } from "./TabSet";
import { useEligibilityContext } from "../eligibility-context";

export const Upgrader = () => {
  const { state, actions } = useEligibilityContext();
  var partner_css = "border rounded-l-full p-1 pl-2 px-2 border-gray-400 w-4/12"
  var booking_css = "border-b border-t p-1 pl-2 px-2 border-gray-400 w-4/12"
  var lastname_css = "border rounded-r-full p-1 pl-2 px-2 border-gray-400 w-4/12"
  var button_css = "text-white px-8 py-2 text-xs bg-blue-600 rounded-full mt-4"
  var paragraph_css = "text-md my-1 ml-1 mb-3 font-[900] text-orange-600"
  var button_container_css="flex flex-row justify-between content-center items-center align-middle"
  var error_css = "text-red-600 flex flex-row content-center items-center align-middle"

  var error_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>


  return (
    <div className="bg-white rounded-md mt-4 text-sm w-[550px] flex flex-row drop-shadow-xl">
      <TabSet>
        <TabSheet label="Airline">
          <p className={paragraph_css}>
            Check for flight upgrades:
          </p>
          <div>
            <input
              type="text"
              class={partner_css}
              placeholder="Partner Name"
              value={state.pid}
              onChange={(e) => actions.setPid(e.target.value)}
            />
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
            {state.offerUrl ?(
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
          {state.offerUrl && (
            <>
              <h3 className="block font-bold text-lg">You are eligible!!</h3>
              <a className="font-bold" href={state.offerUrl}>
                Click here to upgrade
              </a>
            </>
          )}
        </TabSheet>
        <TabSheet label="Rail">
          <p className={paragraph_css}>
            Check for Rail upgrades:
          </p>
          <div>
            <input
              type="text"
              class={partner_css}
              placeholder="Partner Name"
            />
            <input
              type="text"
              class={booking_css}
              placeholder="Booking #"
            />
            <input
              type="text"
              class={lastname_css}
              placeholder="Last Name"
            />
          </div>
          <div class={button_container_css}>
          {state.offerUrl ?(
                <p class={error_css}>
                  <span>{error_icon}</span>&nbsp; Sorry, upgrade not applicable to your booking
                </p>
            ):(<p></p>)}
            <button 
              class={button_css}
            >
              Check Now
            </button>
          </div>
        </TabSheet>
        <TabSheet label="Cruise">
          <p className={paragraph_css}>
            Check for Cruise upgrades:
          </p>
          <div>
            <input
              type="text"
              class={partner_css}
              placeholder="Partner Name"
            />
            <input
              type="text"
              class={booking_css}
              placeholder="Booking #"
            />
            <input
              type="text"
              class={lastname_css}
              placeholder="Last Name"
            />
          </div>
          <div class={button_container_css}>
          {state.offerUrl ?(
                <p class={error_css}>
                  <span>{error_icon}</span>&nbsp; Sorry, upgrade not applicable to your booking
                </p>
            ):(<p></p>)}
            <button 
              class={button_css}
            >
              Check Now
            </button>
          </div>
        </TabSheet>
      </TabSet>
    </div>
  );
};
