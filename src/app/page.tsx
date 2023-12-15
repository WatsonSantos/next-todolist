"use client";
import { useState, useEffect, useRef } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

import Card from "@/components/todoCard";

type TODO = {
  id: string;
  content: string;
  status: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [newTodo, setNewTodo] = useState<TODO>();

  const todoItemRef = useRef<HTMLInputElement>(null);

  const hundleSubmit = async (event: any) => {
    event.preventDefault();

    const todo = todoItemRef.current ? todoItemRef.current.value : "";

    //const todo = todoItemRef.current.value;

    if (!todo.trim()) {
      console.log("Escreva o todo antes de submeter!");
      return;
    }

    let newId = crypto.randomUUID();
    let newTodo: TODO = {
      id: newId,
      content: todo,
      status: false,
    };

    fetch("api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newTodo }),
    }).then((response) => {
      console.log("Resposta: ", response);
    });
  };
  /* funntion createTodo(){
  }
*/
  useEffect(() => {
    async function getData() {
      const res = await fetch("api/todos");
      const data: TODO[] = await res.json();
      setTodos(data);
      console.log("Todos os todos: ", data);
    }
    getData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-10  md:px-20  lg:px-32 xl:px-44 pt-12 bg-zinc-100">
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-violet-800 shadow-2xl rounded-md">
        <div className="w-full h-56 flex flex-col items-center justify-center">
          <h1 className="uppercase text-white text-xl md:text-3xl font-bold mb-6 md:mb-10">
            Todo list
          </h1>
          <form
            onSubmit={hundleSubmit}
            action="#"
            className="w-full flex flex-col md:flex-row items-center justify-center px-10 sm:px-20 "
          >
            <input
              ref={todoItemRef}
              type="text"
              placeholder="Escreva aqui...."
              className="text-zinc-700 md:mr-8 w-full md:w-10/12 h-10 px-4 rounded-md outline-none placeholder:text-zinc-400"
            />
            <button className="text-black w-full md:w-2/12 bg-white h-10 rounded-md outline-none mt-4 md:mt-0 text-base font-medium">
              ADD
            </button>
          </form>
        </div>
        <div className="relative w-full flex flex-col items-center justify-start bg-white px-4 pb-10 pt-8 overflow-y-scroll min-h-32 max-h-[335px]">
          <h1 className="uppercase text-black text-base md:text-lg font-bold">
            Lista das tarefas: 
          </h1>
          <span className="absolute left-4 top-4 text-sm">Total: <span className="px-[5px] py-[.8px] rounded-full bg-violet-800 text-white">6</span></span>
          <Card
            content="Fazer compras"
            deleteIcon={<MdDelete />}
            editIcon={<MdEdit />}
            markIcon={<IoMdCheckmark />}
          />
          <Card
            content="Lavar roupas"
            deleteIcon={<MdDelete />}
            editIcon={<MdEdit />}
            markIcon={<IoMdCheckmark />}
          />
          <Card
            content="Impara para ensaio"
            deleteIcon={<MdDelete />}
            editIcon={<MdEdit />}
            markIcon={<IoMdCheckmark />}
          />
        </div>
      </section>
    </main>
  );
}
