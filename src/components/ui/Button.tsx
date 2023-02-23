interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`${
        className ?? ""
      } w-auto rounded-[128px] bg-dg-blue pt-4 pb-4 font-hanken text-md font-bold text-white lg:hover:bg-gradient`}
    >
      {children}
    </button>
  );
}
