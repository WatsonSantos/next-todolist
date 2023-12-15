import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  let data = {};
  if (typeof window !== "undefined") {
    const res = localStorage.getItem("todos");
    if (res) {
      data = JSON.parse(res);
    }
  }
  return NextResponse.json({ data });
  //const res = await fetch("https://jsonplaceholder.typicode.com/todos");
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log("Body:", res)
  if (typeof window !== "undefined") {
    console.log("Ijiji")
    const todolit = localStorage.getItem("todos");
    if (todolit) {
      const todos = JSON.parse(todolit);
      let newTodo = JSON.stringify(res);

      let newTodoList = {
        ...todos,
        newTodo,
      };
      localStorage.setItem("todos", JSON.stringify(newTodoList));
    } else {
      localStorage.setItem("todos", JSON.stringify(res));
      console.log("Entrou")
    }
  }
  return NextResponse.json({ message: res});
}
