
"use client"
import React, { useState } from "react"
import { BookOpen, Moon, Sparkles} from "lucide-react"
import Image from "next/image"

export type OptionField = { labels: string; imageUrl: string; description?: string }

type StoryTypeProps = {
  userSelection: (data: { fieldName: string; fieldValue: string }) => void
  onChange?: (label: string) => void
}

function StoryType({ userSelection, onChange }: StoryTypeProps) {
  const OptionList = [
    { labels: "Story Book",
       imageUrl: "/story.png", 
       icon: <BookOpen className="w-6 h-6 text-white" />, 
       gradient: "from-blue-500 to-cyan-500", 
       description: "Classic adventures" 
      },
    { labels: "Bed Story", 
      imageUrl: "/Bedstory.png", 
      icon: <Moon className="w-6 h-6 text-white" />, 
      gradient: "from-indigo-500 to-purple-500", 
      description: "Dreamy tales" 
    },
    { labels: "Magical", 
      imageUrl: "/Magical.png", 
      icon: <Sparkles className="w-6 h-6 text-white" />, 
      gradient: "from-pink-500 to-rose-500", 
      description: "Enchanted worlds"
    }
  ]

  const [selectOption, setSelectedOption] = useState<string>()
  const [hoveredOption, setHoveredOption] = useState<string>()
  const onUserSelect = (items: OptionField) => {
    setSelectedOption(items.labels)
    userSelection({ fieldName: 'storyType', fieldValue: items.labels })
  }
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
      
      <div className="relative bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 w-full border border-white/20">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-7 h-7 text-blue-600" />
          <label className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
             2. Choose Your Story Type
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {OptionList.map((items, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500
                ${selectOption === items.labels
                  ? `ring-4 ring-blue-500 ring-offset-4 shadow-2xl scale-105 bg-blue-50/50 border-4 border-blue-400`
                  : `hover:scale-105 shadow-xl hover:shadow-2xl hover:ring-2 hover:ring-blue-300`
                }`}
              onClick={() => { onUserSelect(items); onChange?.(items.labels) }}
              aria-selected={selectOption === items.labels}
              onMouseEnter={() => setHoveredOption(items.labels)}
              onMouseLeave={() => setHoveredOption("")}
            >
              <Image
                src={items.imageUrl}
                alt={items.labels}
                width={300}
                height={200}
                className={`object-cover w-full h-[220px] transition-transform duration-700 ${hoveredOption === items.labels ? 'scale-110' : 'scale-100'}`}
              />
              <div className={`absolute bottom-0 w-full py-3 text-center transition-all duration-300 ${
                selectOption === items.labels ? 'bg-blue-600/80' : 'bg-black/50'
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

export default StoryType

