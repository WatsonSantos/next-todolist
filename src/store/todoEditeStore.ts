import { create } from "zustand";

type TodoStore = {
  id?: number;
  title?: string;
  add: (id: number, title: string) => void;
  delete: () => void;
};

export const useTodoUpdateStore = create<TodoStore>()((set) => ({
  id: undefined,
  title: undefined,
  add: (id: number, title: string) =>
    set((state) => ({
      id: id,
      title: title,
    })),
  delete: () =>
    set((state) => ({
      id: undefined,
      title: undefined,
    })),
}));
