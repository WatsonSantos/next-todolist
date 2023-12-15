"use client";
import React, { ReactNode } from "react";

interface CardProps {
  content: string;
  markIcon: ReactNode;
  editIcon: ReactNode;
  deleteIcon: ReactNode;
}

const Card: React.FC<CardProps> = ({
  content,
  markIcon,
  editIcon,
  deleteIcon,
}) => {
  return (
    <div className="flex items-center flex-col md:flex-row justify-between w-full mt-4 bg-zinc-100 px-4 md:py-4">
      <p className="text-zinc-700 text-base md:text-lg mt-4 mb-4 md:mb-0 md:mt-0">
        {content}
      </p>
      <div className="flex items-center justify-center space-x-6 mb-4 md:mb-0">
        <span className="font-bold cursor-pointer text-blue-700">{markIcon}</span>
        <span className="cursor-pointer text-green-700">{editIcon}</span>
        <span className="cursor-pointer text-red-500">{deleteIcon}</span>
      </div>
    </div>
  );
};

export default Card;
