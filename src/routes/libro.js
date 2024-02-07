import express from "express"

import { LibroController } from "../controller/libro.js"

export class LibroRoute {
	constructor() {
		this.router = express.Router()
		this.controller = new LibroController()
	}

	start() {
		this.router.get("/", this.controller.obtenerLibros)

		this.router.get("/:id", this.controller.obtenerLibro)

		this.router.delete("/:id", this.controller.borrarLibro)

		this.router.post("/", this.controller.guardarLibro)
		return this.router
	}
}