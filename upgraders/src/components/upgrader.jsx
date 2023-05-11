import React from "react";
import { TabSet, TabSheet } from "./TabSet";

export const Upgrader = () => {
  return (
    <div className="bg-white rounded-md mt-4 text-sm w-[550px] flex flex-row drop-shadow-xl">
        <TabSet>
            <TabSheet label="Airline">
                <p className="text-sm my-1 ml-1 mb-3 font-bold">Check for upgrade eligiblity here</p>
                <div>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3" placeholder="Partner Name"/>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3" placeholder="Booking #"/>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400" placeholder="Last Name"/>
                </div>
                <div class="flex float-right">
                    <button class="text-white px-8 py-2 text-xs bg-blue-600 rounded-full mt-6">Check Now</button>
                </div>
            </TabSheet>
            <TabSheet label="Rail">
                <p className="text-sm my-1 ml-1 mb-3 font-bold">Check for upgrade eligiblity here</p>
                <div>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3" placeholder="Partner Name"/>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3" placeholder="Booking #"/>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400" placeholder="Last Name"/>
                </div>
                <div class="flex float-right">
                    <button class="text-white px-8 py-2 text-xs bg-blue-600 rounded-full mt-6">Check Now</button>
                </div>
            </TabSheet>
            <TabSheet label="Cruise">
                <p className="text-sm my-1 ml-1 mb-3 font-bold">Check for upgrade eligiblity here</p>
                <div>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3" placeholder="Partner Name"/>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400 mr-3" placeholder="Booking #"/>
                    <input type='text' class="border rounded-full p-1 pl-2 px-2 border-gray-400" placeholder="Last Name"/>
                </div>
                <div class="flex float-right">
                    <button class="text-white px-8 py-2 text-xs bg-blue-600 rounded-full mt-6">Check Now</button>
                </div>
            </TabSheet>
        </TabSet>
    </div>
  );
};
