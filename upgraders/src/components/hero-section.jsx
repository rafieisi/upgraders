import React from "react";
import { Upgrader } from "./upgrader";

export const HeroSection = () => {
  return (
    <div
      className="min-h-[600px] 
        overflow-hidden bg-cover bg-no-repeat bg-top 
        bg-[url('../assets/img/main.webp')]
        "
    >
      <div class="container max-w-screen-lg grid grid-cols-2 flex justify-center ml-auto mr-auto mt-32">
        <div className="flex flex-row items-center z-30">
          <div className="container max-w-screen-xl mx-auto flex flex-col">
            <h1 className="text-white text-5xl mb-5">
              Take off in <span class="text-orange-600">first-class</span> fashion with our <span class="text-blue-600">upgrade</span> options</h1>
            <Upgrader />
          </div>
        </div>
        <div className="z-0 flex place-items-end">
          <img src="https://st-newplusgrade.points.com/static/c770cdde7f4e98f8e548d3d53ecb39aa/73508/homepage-arrow.webp" alt="Other" class="mb-[-100px] max-w-[500px]" />
        </div>
      </div>
    </div>
  );
};
