"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react";

import sha256 from 'crypto-js/sha256';

export default function Home() {

  const [typedPassword, setTypedPassword] = useState("")

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    if (sha256(typedPassword).toString() === "38469463ca2a9aa14a3e15755e4a258e407dcb68123f6e75deefa4c87123e063") {
      localStorage.setItem("passwordHash", sha256(typedPassword).toString())
      window.location.href = "/trigger"
    }
  }

  return (
    <div className="flex justify-center h-screen">
      <form onSubmit={handleFormSubmit} className="flex mt-28 w-full max-w-80 flex-col gap-1" action="">
        <label className="pl-1 font-semibold" htmlFor="">Insira a senha:</label>
        <Input placeholder="Senha" value={typedPassword} onChange={(e) => setTypedPassword(e.target.value)} className="w-full" id="password" type="password" />
        <Button variant={"secondary"} className="font-semibold">Entrar</Button>
      </form>
    </div>
  );
}
