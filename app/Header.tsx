'use client';

import { useState } from "react";
import Button from "./Button";
import LoginWindow from "./LoginWindow";

export default function Header() {
  const [isLoginVisible, setLoginVisible] = useState(false);


  const buttonClick = () => {
    console.log("Button clicked");
  }

  const openLoginWindowFunction = () => {
    setLoginVisible(true);
  }

  const closeLoginWindowFunction = () => {
    setLoginVisible(false);
  }

  return (
    <>
      <header className="w-screen bg-sky-950 h-16 border-b border-sky-900">
        <div className="h-full w-full px-[15vw] flex items-center space-x-4">
          <h1 className="text-sky-300 text-2xl mr-auto">NotesApp</h1>
          <Button text="Login" secondary={true} onClick={openLoginWindowFunction}/>
          <Button text="Sign Up" onClick={buttonClick}/>
        </div>
      </header>
      {isLoginVisible && <LoginWindow visible={true} closeWindowFunction={closeLoginWindowFunction}/>}
    </>
  );
}