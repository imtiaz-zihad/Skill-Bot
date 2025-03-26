import React from "react";
import CategoryList from '../../_shared/CategoryList';
import Image from "next/image";

function SelectCategory() {
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <h2 className="my-5">Select The Course Category</h2>

   
    <div className="grid grid-cols-3 gap-10 px-10 md:px-20 mt-10">
      {CategoryList.map((category, index) => (
        <div key={index} className="flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer">
         <Image src={category.icon} width={50} height={50} />
         <h2>{category.name}</h2>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SelectCategory;
