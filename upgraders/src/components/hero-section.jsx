import React from "react";
import { TabSet, TabSheet } from "./TabSet";

export const HeroSection = () => {
  const backgroundImage =
    "https://st-newplusgrade.points.com/static/d62ce4caf4dcd40d8f50baa2429c8400/b870f/Plusgrade-Hero-Banner-Homepage.webp";
  return (
    <div
      className="relative bg-gray-900 h-screen overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
      <div className="absolute bottom-0 right-10">
        <img src="https://st-newplusgrade.points.com/static/c770cdde7f4e98f8e548d3d53ecb39aa/73508/homepage-arrow.webp" alt="Other" width={660} />
      </div>
      <div className="absolute inset-0 flex flex-row items-center">
        <div className="container max-w-screen-xl mx-auto flex flex-col">
          <h1 className="text-white text-5xl">Check your eligibility</h1>
          <p className="text-white text-lg mt-2">Verify if you are eligible for any perks</p>
          <div className="bg-white p-1 rounded-md mt-4 text-sm w-[800px] flex flex-row">
            <TabSet>
              <TabSheet label="Airline">
                This is a tab
                asdfasdfasdfa

                asdfadf
              </TabSheet>
              <TabSheet label="Rail">
                Rail tab
              </TabSheet>
            </TabSet>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full">asdfasdf</div>
    </div>
  );
};
