import { LibroModel } from "../model/libro.js"
import { Notificador } from "../utils/notificador.js"

export class LibroService {
	constructor() {
		this.model = new LibroModel()
	}

	obtenerLibros = async () => {
		let lista = await this.model.obtenerLibros()
		return lista
	}

	obtenerLibro = async (id) => {
		let libro = await this.model.obtenerLibro(id)	
		return libro
	}

	borrarLibro = async (id) => {
		let libro = await this.model.borrarLibro(id)
		const lista = await this.obtenerLibros()
		if(lista.length < 1){
			new Notificador().notificar("La lista de libros esta vacia")
		}
		return libro
	}

	guardarLibro = async (newLibro) => {
		const libro = await this.obtenerLibro(newLibro.codigo)
		if(!newLibro.estado){
            newLibro.estado = "disponible"
        }
		if(!libro){
			await this.model.guardarLibro(newLibro)
		}
		return libro
	}


}