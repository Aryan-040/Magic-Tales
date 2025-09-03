
"use client";
import React, { useState } from "react";
import { Sparkles, Wand2, Stars } from "lucide-react";
import { Image } from "@nextui-org/react";

type UserSelectionHandler = (data: { fieldName: string; fieldValue: string }) => void

function SubjectInput({ userSelection }: { userSelection: UserSelectionHandler }) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

      <div className="relative bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 w-full border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <Sparkles className="w-7 h-7 text-purple-600 animate-pulse" />
            <Stars className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
          </div>
          <label className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            1. Enter Your Magical Subject
          </label>
        </div>

        <div className="flex items-center gap-6 overflow-x-hidden">
          <div className="relative group/image hidden md:block">
            <Image
              src="/subject.png"
              alt="Story Subject"
              width={120}
              height={120}
              className="object-contain relative z-10 hover:scale-110 transition-transform duration-300"
            />
            <p className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Hint</p>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2 shadow-lg">
              <Wand2 className="w-5 h-5 text-white animate-bounce" />
            </div>
          </div>

          <div className="flex-1 relative ml-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value
                setInputValue(value)
                userSelection({ fieldName: "storySubject", fieldValue: value })
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="e.g. A dragon who loves pizza 🍕"
              className={`w-full px-3 py-5 border-2 rounded-2xl text-gray-700 text-lg
        transition-all duration-300 bg-gradient-to-r from-white to-purple-50
        placeholder:text-gray-400 focus:outline-none shadow-lg
        ${
          isFocused
            ? "border-purple-400 shadow-purple-200 shadow-2xl scale-[1.02] bg-gradient-to-r from-white to-pink-50"
            : "border-purple-200 hover:border-purple-300 hover:shadow-xl"
        }`}
            />
            {inputValue && (
              <div className="absolute -bottom-6 right-0 text-xs text-purple-500 font-medium">
                {inputValue.length} characters ✨
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "🐲 Dragons",
            "🦄 Unicorns",
            "🏰 Castles",
            "🌟 Magic",
          ].map((hint, index) => (
            <button
              key={index}
              onClick={() => setInputValue(hint)}
              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm hover:from-purple-200 hover:to-pink-200 transition-all duration-200 hover:scale-105 border border-purple-200"
            >
              {hint}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectInput;
