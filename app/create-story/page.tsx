"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/SubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";

const CREATE_STORY_PROMPT =  process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

function CreateStory() {
  const [loading,setLoading] = useState(false);
  type CreateStoryForm = {
    AgeGroup?: string;
    StoryType?: string;
    SubjectInput?: string;
    ImageStyle?: string;
  };
  const [formData, setFormData] = useState<CreateStoryForm>({});

  const onHandleUserSelection = (data: fieldData) => {
    const keyMap: Record<string, keyof CreateStoryForm> = {
      ageGroup: 'AgeGroup',
      AgeGroup: 'AgeGroup',
      storyType: 'StoryType',
      StoryType: 'StoryType',
      imageStyle: 'ImageStyle',
      ImageStyle: 'ImageStyle',
      storySubject: 'SubjectInput',
      SubjectInput: 'SubjectInput',
    };
    const mappedKey = keyMap[data.fieldName] ?? (data.fieldName as keyof CreateStoryForm);
    setFormData((prev) => ({ ...prev, [mappedKey]: data.fieldValue }));
  };

  const GenerateStory=async()=>{

    setLoading(true)

    const FINAL_PROMPT = (CREATE_STORY_PROMPT ?? "")
      .replace('{AgeGroup}', formData?.AgeGroup ?? '')
      .replace('{StoryType}', formData?.StoryType ?? '')
      .replace('{SubjectInput}', formData?.SubjectInput ?? '')
      .replace('{ImageStyle}', formData?.ImageStyle ?? '');

    //Generate AI story via server API and save to DB
    try{
      const resp = await fetch('/api/stories',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          AgeGroup: formData?.AgeGroup ?? '',
          StoryType: formData?.StoryType ?? '',
          SubjectInput: formData?.SubjectInput ?? '',
          storySubject: formData?.SubjectInput ?? '',
          ImageStyle: formData?.ImageStyle ?? '',
          prompt: FINAL_PROMPT,
        })
      });
      const data = await resp.json();
      if (!resp.ok) {
        console.error('API error:', data?.error || resp.statusText);
      } else {
        console.log('Generated story:', data?.text);
        console.log('Saved with storyId:', data?.storyId);
      }
    }catch(e){
      console.log(e)
    }finally{
      setLoading(false);
    }
    
    //generate image
  }

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

      {/* Selection Summary */}
      {(formData.SubjectInput || formData.StoryType || formData.AgeGroup || formData.ImageStyle) && (
        <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-blue-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📝</span>
            Your Story Configuration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formData.SubjectInput && (
              <div className="bg-purple-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-purple-700">Subject</p>
                <p className="text-purple-900 font-semibold">{formData.SubjectInput}</p>
              </div>
            )}
            {formData.StoryType && (
              <div className="bg-blue-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-700">Story Type</p>
                <p className="text-blue-900 font-semibold">{formData.StoryType}</p>
              </div>
            )}
            {formData.AgeGroup && (
              <div className="bg-emerald-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-emerald-700">Age Group</p>
                <p className="text-emerald-900 font-semibold">{formData.AgeGroup}</p>
              </div>
            )}
            {formData.ImageStyle && (
              <div className="bg-pink-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-pink-700">Image Style</p>
                <p className="text-pink-900 font-semibold">{formData.ImageStyle}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="justify-center my-10 flex">
        <Button 
          color="primary" 
          className={`p-10 text-2xl transition-all duration-300 ${
            loading ? 'animate-pulse' : ''
          }`}
          onPress={GenerateStory}
          disabled={loading || !formData.SubjectInput}
          size="lg"
        >
          {loading ? (
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Generating...
            </div>
          ) : (
            '✨ Generate Story'
          )}
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
