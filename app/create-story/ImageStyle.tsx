"use client"
import React, { useState } from "react"
import { Palette } from "lucide-react"
import { OptionField } from "./_components/StoryType"

type UserSelectionHandler = (data: { fieldName: string; fieldValue: string }) => void

function ImageStyle({ userSelection }: { userSelection: UserSelectionHandler }) {
  const OptionList = [
    { labels: "Water Colour", 
      imageUrl: "/Watercolor.png", 
      description: "Water colour style" 
    },
    { labels: "Pixel Art", 
      imageUrl: "/PixelArt.jpeg", 
      description: "Style in pixel" 
    },
    { labels: "Anime", 
      imageUrl: "/Anime.png", 
      description: "Japanese style" 
    },
    { labels: "Sketch", 
      imageUrl: "/Sketch.png", 
      description: "Hand drawn" 
    }
  ]

  const [selectOption, setSelectedOption] = useState<string>()
  const onUserSelect = (items: OptionField) => {
    setSelectedOption(items.labels)
    userSelection({ fieldName: 'imageStyle', fieldValue: items.labels })
  }


  return (
    <div className="relative group">
      {/* Glow background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>

      <div className="relative bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 w-full border border-white/20">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Palette className="w-7 h-7 text-pink-600" />
          <label className="font-bold text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            4. Choose Your Image Style
          </label>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {OptionList.map((items, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500
                ${selectOption === items.labels 
                  ? `ring-4 ring-offset-2 shadow-2xl scale-105` 
                  : `hover:scale-105 shadow-xl hover:shadow-2xl`}`}
              onClick={() => onUserSelect(items)}
            >
              <img src={items.imageUrl} alt={items.labels} className="w-full h-[220px] object-cover" />
              <div className="absolute bottom-0 w-full bg-black/50 py-3 text-center">
                <p className="text-lg text-white font-semibold">{items.labels}</p>
                <p className="text-sm text-gray-200">{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageStyle
