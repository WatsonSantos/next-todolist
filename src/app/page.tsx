import prisma from "@/lib/db";

import { useTodoUpdateStore } from "@/store/todoEditeStore";

import Card from "@/components/TodoCard";

import { create } from "./actions/todoActions";

//import Message from "@/components/Alert/Message";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  const store = useTodoUpdateStore.getState().title;

  return (
    <main className="flex md:min-h-screen flex-col items-center justify-between  md:px-20  lg:px-32 xl:px-44 md:pt-12 bg-zinc-100">
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-violet-800 shadow-2xl md:rounded-md">
        <div className="w-full h-56 flex flex-col items-center justify-center">
          <h1 className="uppercase text-white text-xl md:text-3xl font-bold mb-6 md:mb-10">
            Lista de Tarefas
          </h1>
          <form
            action={create}
            className="w-full flex flex-col md:flex-row items-center justify-center px-10 sm:px-20 "
          >
            <input
              name="title"
              type="text"
              placeholder="Escreva aqui...."
              className="text-zinc-700 md:mr-8 w-full md:w-10/12 h-10 px-4 rounded-md outline-none placeholder:text-zinc-400"
            />
            <button
              type="submit"
              className="text-black w-full md:w-2/12 bg-white h-10 rounded-md outline-none mt-4 md:mt-0 text-base font-medium"
            >
              ADD
            </button>
          </form>
        </div>
        <div className="relative w-full flex flex-col items-center justify-start bg-white px-4 pb-10 pt-8 overflow-y-scroll min-h-32 max-h-[580px] md:max-h-[335px]">
          <h1 className="uppercase text-black text-base md:text-lg font-bold">
            Todas as tarefas:
          </h1>
          <span className="absolute left-4 top-4 text-sm">
            Total:{" "}
            <span className="px-[5px] py-[.8px] rounded-full bg-violet-800 text-white">
              {todos.length}
            </span>
          </span>
          <ul className="w-full">
            {todos.map((todo) => (
              <li key={todo.id}>
                <Card
                  {...(todo.completed === true
                    ? { statusColor: "text-zink-300" }
                    : { statusColor: "text-green-700" })}
                  id={todo.id}
                  completed={todo.completed}
                  content={todo.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
