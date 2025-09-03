"use client";
import React from "react";
import StorySubjectInput from "./_components/SubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./ImageStyle";
import { Button } from "@nextui-org/button";

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

function CreateStory() {
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
  };

  return (
    <div className="px-4 md:px-10 lg:px-16 pt-16 bg-[#cad3ff] text-center overflow-x-hidden mx-auto max-w-[100vw]">
      {/* Title */}
      <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 drop-shadow-sm">
        ✨ Create Your Tale
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-lg md:text-xl text-blue-600 font-medium">
        Start Crafting Your MagicalTales here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-14">
        {/* Story Subject */}
        <StorySubjectInput userSelection={onHandleUserSelection} />
        {/* Story Type */}
        <StoryType userSelection={onHandleUserSelection} />
        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />
        {/* Image Style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className="justify-end my-10">
        <Button color="primary" className="p-10 text-2xl">
          Generate Story
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
