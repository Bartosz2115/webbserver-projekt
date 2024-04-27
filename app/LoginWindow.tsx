import { useState } from "react";
import { galada } from "./fonts";
import Button from "./Button";

interface LoginWindowProps {
  visible: boolean;
  closeWindowFunction: () => void;
}

export default function LoginWindow({ visible=false, closeWindowFunction=()=>{} }: LoginWindowProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const display = visible ? "block" : "none";

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log('handleEmailChange called');
  };
  
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log('handlePasswordChange called');
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('handleSubmit called');
    console.log('Email: ' + String(email) + ', Password: ' + String(password));
  };

  return(
    <div className={`${display} fixed top-0 left-0 w-screen h-screen bg-neutral-900/50 flex justify-center items-center`}>
      <div className="p-8 w-[25vw] min-w-96 h-[60vh] min-h-96 bg-sky-950 rounded-md">
        <h2 className={`${galada.className} text-sky-300 text-4xl w-full text-center`}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 mt-8">
            <label htmlFor="email" className="text-sky-300">Email</label>
            <input type="email" name="email" id="email" className="bg-sky-900 text-sky-300 px-2 py-1 rounded-md" onChange={handleEmailChange}/>
            <label htmlFor="password" className="text-sky-300">Password</label>
            <input type="password" name="password" id="password" className="bg-sky-900 text-sky-300 px-2 py-1 rounded-md" onChange={handlePasswordChange}/>
            <button type="submit" className="bg-sky-300 text-sky-950 px-4 py-2 rounded-md text-base hover:bg-sky-200 hover:text-sky-950">Login</button>
            <Button secondary={true} text="Cancel" onClick={closeWindowFunction}/>
          </div>
        </form>
      </div>
    </div>
  );
}