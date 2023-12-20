import { create } from "zustand";

type MessageStore = {
  type: string;
  message: string;
  add: (type: string, message: string) => void;
  remove: () => void;
};

export const useMessageStore = create<MessageStore>()((set) => ({
  type: "info",
  message: "Teste",
  add: (type: string, message: string) =>
    set((state) => ({
      type: type,
      message: message,
    })),
  remove: () => ({
    type: "",
    message: "",
  }),
}));
