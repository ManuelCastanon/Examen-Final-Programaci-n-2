import express from "express"

import { LibroRoute } from "./routes/libro.js"

const PORT = 3005

const app = express()

app.use(express.json())

app.use("/libros", new LibroRoute().start())

const server = app.listen(PORT, () => {
	console.log(`Ejecutando en el puerto ${PORT}`)
})

server.on("error", (err) => console.log(err))