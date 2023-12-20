"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

import { useTodoUpdateStore } from "@/store/todoEditeStore";

export async function create(data: FormData) {
  if (data.get("title") === "") {
    console.log("Insira uma tarefa");
    return;
  }
  try {
    const todo = await prisma.todo.create({
      data: {
        title: data.get("title") as string,
      },
    });

    //Message("Success", "Todo criado!");
    revalidatePath("/");
    return todo;
  } catch (err) {
    // throw new Error("Falha ao criar o todo!");
    return err;
  }
}

export async function updateStatus(id: number, completed: boolean) {
  const todo = await prisma.todo.update({
    where: { id },
    data: {
      completed,
    },
  });
  revalidatePath("/");
}

export async function deleteTodo(id: number) {
  try {
    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
  } catch (err) {
    throw new Error("Erro ao eleminar todo!");
  }
}

export async function EditeTodo(id: number) {
  // const todoStore = useTodoUpdateStore((state) => state.add) usar em client components;
  const todoStore = useTodoUpdateStore().add;
  //const currentTodo = await prisma.todo.findUnique({ where: { id }}))

  const todoData = await prisma.todo.findUnique({ where: { id } });

  if (todoData) {
    try {
      todoStore(id, todoData.title);
      revalidatePath("/");
    } catch (err) {
      throw new Error("Erro ao tentar editar todo");
    }
  } else {
    throw new Error("Não foi possível encontrar esse Todo");
  }
}
