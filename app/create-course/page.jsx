"use client";
import React, { useState } from "react";
import { TbStack3 } from "react-icons/tb";
import { Button } from "../../components/ui/button";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";

function CreateCourse() {
  const StepperOptions = [
    {
      id: 1,
      category: "Category",
      icon: <TbStack3 size={24} />, // Uniform size
    },
    {
      id: 2,
      category: "Topic & Description",
      icon: <TbStack3 size={24} />,
    },
    {
      id: 3,
      category: "Options",
      icon: <TbStack3 size={24} />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center  w-full">
      {/* Title */}
      <h2 className="text-4xl text-primary font-medium mb-10">Create Course</h2>

      {/* Stepper - Centering all icons & lines */}
      <div className="flex items-center justify-center ">
        {StepperOptions.map((option, index) => (
          <div key={option.id} className="flex items-center">
            {/* Step Icon + Label */}
            <div className="flex flex-col items-center">
              <div
                className={`bg-gray-200 p-4 rounded-full text-white flex items-center justify-center ${
                  activeIndex >= index && "bg-primary"
                }`}
              >
                {option.icon}
              </div>
              <h2 className="text-sm mt-2">{option.category}</h2>
            </div>

            {/* Green Connecting Line */}
            {index !== StepperOptions.length - 1 && (
              <div
                className={`h-1 w-24 md:w-32 lg:w-48 bg-green-600 rounded-full ${
                  activeIndex >= index + 1 && "bg-primary"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div></div>
      {/* Component */}
      {activeIndex === 0?<SelectCategory />:activeIndex==1?<TopicDescription/>:<SelectOption/>}

      {/* BUtton  */}

      {/* Navigation Buttons */}
      <div className="flex justify-between w-1/2 mt-10">
        <Button
          disabled={activeIndex === 0}
          variant='outline'
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          Previous
        </Button>

        {activeIndex<2&&<Button
          disabled={activeIndex === StepperOptions.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          Next
        </Button>}

        {activeIndex==2&&<Button onClick={() => setActiveIndex(activeIndex + 1)}>
          Generate Layout
        </Button>}
      </div>
    </div>
  );
}

export default CreateCourse;
