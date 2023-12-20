import { InputProps } from "@/app/types/todo";

export default function Input({
  children,
  customClassName,
  ...props
}: InputProps) {
  return (
    <div className={`${customClassName}`}>
      <input className="w-full" {...props} />
      {children}
    </div>
  );
}
