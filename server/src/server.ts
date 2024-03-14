import express from "express"
import cors from "cors"

const port = 3052
const app = express()

let isHotspotLocked = false

app.use(cors({
  origin: true
}))

app.get("/", (req, reply) => {
  reply.send("samba")
})

app.get("/lockstate", (req, reply) => {

  console.log({ lockState: isHotspotLocked })

  reply.json({
    lockState: isHotspotLocked
  })
})

app.get("/lock", (req, reply) => {

  console.log("Trava habilitada")

  isHotspotLocked = true
  reply.json({
    message: "Trava habilitada!",
    lockState: isHotspotLocked
  })
})

app.get("/unlock", (req, reply) => {

  console.log("Trava desabilitada")

  isHotspotLocked = false
  reply.json({
    message: "Trava desabilitada!",
    lockState: isHotspotLocked
  })
})

app.listen(port, () => {
  console.log("Servidor iniciado na porta:", port)
  console.log("http://localhost:" + port)
})