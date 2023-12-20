"use client";
import React from "react";

import DeleteButton from "./DeleteButton";
import UpdateCompletedButton from "./UpdateCompletedStatusButton";
import { CardProps } from "@/app/types/todo";

const Card: React.FC<CardProps> = ({ id, content, completed, statusColor }) => {
  return (
    <div className=" flex items-center flex-col md:flex-row justify-between w-full mt-4 bg-zinc-100 px-4 md:py-4">
      <p
        className={`${
          completed === true
            ? "text-zinc-400  line-through italic"
            : "text-zinc-700"
        }  text-base md:text-lg mt-4 mb-4 md:mb-0 md:mt-0`}
      >
        {content}
      </p>

      <div className="flex items-center justify-center space-x-6 mb-4 md:mb-0">
        <UpdateCompletedButton
          id={id}
          completed={completed}
          statusColor={statusColor}
        />
        <DeleteButton id={id} />
      </div>
    </div>
  );
};

export default Card;
