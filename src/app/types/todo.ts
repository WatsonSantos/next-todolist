import { InputHTMLAttributes, ReactNode } from "react";

export type TODO = {
  id: string;
  title: string;
  completed: boolean;
};

export type DeleteButtonPops = {
  id: number;
};

export type UpdateButtonProps = {
  id: number;
  completed: boolean;
  statusColor: string;
};
export interface CardProps {
  id: number;
  content: string;
  completed: boolean;
  statusColor: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  customClassName: string;
}
