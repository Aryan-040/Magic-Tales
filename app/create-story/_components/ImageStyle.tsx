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
                  ? `ring-4 ring-pink-500 ring-offset-4 shadow-2xl scale-105 bg-pink-50/50 border-4 border-pink-400` 
                  : `hover:scale-105 shadow-xl hover:shadow-2xl hover:ring-2 hover:ring-pink-300`}`}
              onClick={() => onUserSelect(items)}
            >
              <img src={items.imageUrl} alt={items.labels} className="w-full h-[220px] object-cover" />
              <div className={`absolute bottom-0 w-full py-3 text-center transition-all duration-300 ${
                selectOption === items.labels ? 'bg-pink-600/80' : 'bg-black/50'
              }`}>
                <p className="text-lg text-white font-semibold">{items.labels}</p>
                <p className="text-sm text-gray-200">{items.description}</p>
                {selectOption === items.labels && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageStyle
