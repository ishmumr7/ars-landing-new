"use client";
import { mobileRobotData } from "@/data";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const MobileRobot = () => {
  const [activeTab, setActiveTab] = useState("A Series");
  const [currentData, setCurrentData] = useState(mobileRobotData[0]);

  const handleButtonClick = (title: string) => {
    setActiveTab(title);
    const selectData = mobileRobotData.find((data) => data.title === title);
    if (selectData) {
      setCurrentData(selectData);
    } else {
      console.warn("Module not found, reverting to default.");
      setCurrentData(mobileRobotData[0]);
    }
  };

  return (
    <section className="bg-ice-blue px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pt-10 lg:pt-14 xl:pt-20 flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        Autonomous Mobile Robot <br /> Intralogistics
      </h2>
      <div className=" w-full">
        <div
          className="hidden md:block md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] w-full rounded-t-3xl"
          style={{
            background: `linear-gradient(270deg, rgba(0, 0, 0, 0.00) 40%, #000 100%),url(${currentData.img}) lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="h-full rounded-t-3xl text-white flex flex-col justify-end w-56 md:w-80 lg:w-[450px] space-y-2 md:space-y-5 px-5 py-3 md:px-12 md:py-8 lg:px-16 lg:py-10 xl:px-20 xl:py-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
              {currentData.title}
            </h3>
            <hr />
            {/* <p className="text-[12px] md:text-[16px] leading-4 md:leading-6 lg:leading-7 w-52 md:w-60 lg:w-64">
              {currentData.description}
            </p> */}
            <div className="flex gap-3">
              {currentData.slots.map((slot, index) => (
                <div
                  key={index}
                  className="bg-ars-cyan rounded-full px-5 py-3 text-white"
                >
                  {slot}
                </div>
              ))}
            </div>
            <Link href="#">
              <Button
                isIconOnly
                radius="full"
                className="text-white bg-transparent text-2xl md:text-3xl font-bold -ml-1 hover:bg-ars-cyan-60"
              >
                {ICONS.arrow_right_big}
              </Button>
            </Link>
          </div>
        </div>
        <div
          className="h-[250px] xs:h-[270px] sm:h-[350px] md:hidden w-full rounded-t-2xl"
          style={{
            background: `linear-gradient(270deg, rgba(0, 0, 0, 0.00) 5%, #000 85%),url(${currentData.img}) lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="h-full rounded-t-3xl text-white flex flex-col justify-end w-56 md:w-80 lg:w-[450px] space-y-2 md:space-y-5 px-5 py-3 md:px-12 md:py-8 lg:px-16 lg:py-10 xl:px-20 xl:py-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
              {currentData.title}
            </h3>
            <hr />
            <p className="text-[12px] md:text-[16px] leading-4 md:leading-6 lg:leading-7 w-52 md:w-60 lg:w-64">
              {currentData.description}
            </p>
            <Link href="#">
              <Button
                isIconOnly
                radius="full"
                className="text-white bg-transparent text-2xl md:text-3xl font-bold -ml-1 hover:bg-ars-cyan-60"
              >
                {ICONS.arrow_right_big}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-around border-t border-ars-cyan">
          {mobileRobotData.map((data, index) => (
            <div
              onClick={() => handleButtonClick(data.title)}
              key={index}
              className={`${
                activeTab === data.title ? "bg-ars-cyan" : "bg-black"
              } md:font-medium lg:font-semibold text-xs md:text-sm lg:text-lg text-white hover:bg-deep-blue text-center duration-200 py-3 md:py-5
                lg:py-6 w-full border-r border-ars-cyan`}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileRobot;
