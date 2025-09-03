
"use client"
import React, { useState } from "react"
import { Baby, Users, GraduationCap } from "lucide-react"
import { OptionField } from "./StoryType"

type UserSelectionHandler = (data: { fieldName: string; fieldValue: string }) => void

function AgeGroup({ userSelection }: { userSelection: UserSelectionHandler }) {
  const OptionList = [
    { labels: "Kids (3-7)", 
      imageUrl: "/3-5 yrs.jpeg", 
      icon: <Baby className="w-6 h-6 text-white" />, 
      description: "Fun & Simple", 
      tagline: "Colorful adventures!" 
    },
    { labels: "Teens (8-15)", 
      imageUrl: "/8-15 yrs.jpeg", 
      icon: <Users className="w-6 h-6 text-white" />, 
      description: "Exciting & Bold", 
      tagline: "Epic quests await!" 
    },
    { labels: "Adults (16+)", 
      imageUrl: "/16+ yrs.jpeg", 
      icon: <GraduationCap className="w-6 h-6 text-white" />, 
      description: "Deep & Complex", 
      tagline: "Sophisticated tales!" 
    }
  ]

  const [selectOption, setSelectedOption] = useState<string>()
  const onUserSelect = (items: OptionField) => {
    setSelectedOption(items.labels)
    userSelection({ fieldName: 'ageGroup', fieldValue: items.labels })
  }

  return (
    <div className="relative group overflow-x-hidden">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
      
      <div className="relative bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 w-full border border-white/20">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-7 h-7 text-emerald-600" />
          <label className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            3. Choose Your Age Group
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {OptionList.map((items, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500
                ${selectOption === items.labels ? `ring-4 ring-offset-2 shadow-2xl scale-105` : `hover:scale-105 shadow-xl hover:shadow-2xl`}`}
              onClick={() => onUserSelect(items)}
            >
              <img src={items.imageUrl} alt={items.labels} className="w-full h-[220px] object-cover" />
              <div className="absolute bottom-0 w-full bg-black/50 py-3 text-center">
                <p className="text-lg text-white font-semibold">{items.labels}</p>
                <p className="text-sm text-gray-200">{items.description}</p>
                <p className="text-xs text-gray-300 italic">{items.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AgeGroup
