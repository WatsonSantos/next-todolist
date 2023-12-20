"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";

type Message = {
  messageType: string;
  message: string;
};

export default function Message({ messageType, message }: Message) {
  function showMessage() {
    const SuccessNotify = (msg: string) => {
      toast.success(msg);
    };
    const ErrorNotify = (msg: string) => {
      toast.error(msg);
    };
    if (messageType === "Success") {
      return SuccessNotify(message);
    }
    if (messageType === "Error") {
      return ErrorNotify(message);
    }
  }

  useEffect(() => {
    showMessage();
  });
  return <></>;
}
