"use client"

import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import axios from "axios"

export default function Trigger() {

  const [isActive, setIsActive] = useState<boolean>(false)
  const [isUserLogged, setIsUserLogged] = useState(false)

  function handleToggleSwitch() {
    setIsActive(!isActive)

    if (isActive == true) {
      axios.post("/api/unlock")
    }

    if (isActive == false) {
      axios.post("/api/lock")
    }
  }

  useEffect(() => {
    const passwordHash = localStorage?.getItem("passwordHash")
    if (passwordHash !== "38469463ca2a9aa14a3e15755e4a258e407dcb68123f6e75deefa4c87123e063") {
      window.location.href = "/"
    } else {
      setIsUserLogged(true)
    }

    axios.post("/api/lockstate").then(response => {
      setIsActive(response.data.data.lockState)
    })
  }, [])

  return (
    <>
      {isUserLogged ? (<div className="h-screen flex items-center justify-center">
        <div className="flex items-center flex-col gap-6">
          <span className="font-semibold text-xl">Hotspot {isActive == false ? (<span className="text-green-500">funcionando.</span>) : (<span className="text-red-500">travado. 😘</span>)}</span>
          <Switch className="scale-150" onClick={() => handleToggleSwitch()} checked={isActive} />
        </div>
      </div>) : (null)}
    </>
  )
}

