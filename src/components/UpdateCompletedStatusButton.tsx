"use client";
import { useTransition } from "react";
import { IoMdCheckmark } from "react-icons/io";

import { updateStatus } from "@/app/actions/todoActions";

import { UpdateButtonProps } from "@/app/types/todo";

export default function UpdateCompletedButton({ id, completed, statusColor }: UpdateButtonProps) {
  let [isPending, startTransition] = useTransition();
  return (
    <span
      onClick={(event) => {
        startTransition(() => {
          updateStatus(id, !completed);
        });
      }}
      className={`cursor-pointer ${statusColor}`}
    >
      {<IoMdCheckmark />}
    </span>
  );
}
