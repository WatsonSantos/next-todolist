"use client";
import { useTransition } from "react";
import { MdDelete } from "react-icons/md";

import { deleteTodo } from "@/app/actions/todoActions";

import { DeleteButtonPops } from "@/app/types/todo";

export default function DeleteButton({ id }: DeleteButtonPops) {
  let [isPending, startTransition] = useTransition();
  return (
    <button
      disabled
      onClick={(event) => {
        startTransition(() => {
          deleteTodo(id);
        });
      }}
      className="cursor-pointer text-red-500"
    >
      {<MdDelete />}
    </button>
  );
}
