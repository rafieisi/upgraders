import React from "react";
import { TabSet, TabSheet } from "./TabSet";
import { useEligibilityContext } from "../eligibility-context";

export const Upgrader = () => {
  const { state, actions } = useEligibilityContext();

  return (
    <div className="bg-white rounded-md mt-4 text-sm w-[550px] flex flex-row drop-shadow-xl">
      <TabSet>
        <TabSheet label="Airline">
          <p className="text-sm my-1 ml-1 mb-3 font-bold">
            Check for upgrade eligiblity here
          </p>
          <div>
            <input
              type="text"
              class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3"
              placeholder="Partner Name"
              value={state.pid}
              onChange={(e) => actions.setPid(e.target.value)}
            />
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
          <p className="text-sm my-1 ml-1 mb-3 font-bold">
            Check for upgrade eligiblity here
          </p>
          <div>
            <input
              type="text"
              class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3"
              placeholder="Partner Name"
            />
            <input
              type="text"
              class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3"
              placeholder="Booking #"
            />
            <input
              type="text"
              class="border rounded-full p-1 pl-2 px-2 border-gray-400"
              placeholder="Last Name"
            />
          </div>
          <div class="flex float-right">
            <button class="text-white px-8 py-2 text-xs bg-blue-600 rounded-full mt-6">
              Check Now
            </button>
          </div>
        </TabSheet>
        <TabSheet label="Cruise">
          <p className="text-sm my-1 ml-1 mb-3 font-bold">
            Check for upgrade eligiblity here
          </p>
          <div>
            <input
              type="text"
              class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3"
              placeholder="Partner Name"
            />
            <input
              type="text"
              class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3"
              placeholder="Booking #"
            />
            <input
              type="text"
              class="border rounded-full p-1 pl-2 px-2 border-gray-400"
              placeholder="Last Name"
            />
          </div>
          <div class="flex float-right">
            <button class="text-white px-8 py-2 text-xs bg-blue-600 rounded-full mt-6">
              Check Now
            </button>
          </div>
        </TabSheet>
      </TabSet>
    </div>
  );
};
