interface ButtonProps {
  text: string;
  secondary?: boolean;
  onClick?: () => void;
}

export default function Button({ text="Button", secondary=false, onClick }: ButtonProps) {

  const style = secondary 
    ? "bg-sky-950 text-sky-300 border border-sky-300 px-4 py-2 rounded-md text-base hover:bg-sky-900 hover:text-sky-200" 
    : "bg-sky-300 text-sky-950 px-4 py-2 rounded-md text-base hover:bg-sky-200 hover:text-sky-950";

  return (
    <button onClick={onClick} className={style}>{text}</button>
  );
}