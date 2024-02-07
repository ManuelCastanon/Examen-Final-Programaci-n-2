import { File } from "../files/file.js"

export class LibroModel {
	constructor() {
		this.librosFile = new File("./src/files/libros.json")
	}

	obtenerLibros = async () => {
		let lista = await this.librosFile.obtenerData()
		let lista2 = JSON.parse(lista)
		return lista2
	}

	obtenerLibro = async (id) => {
		let lista = await this.obtenerLibros()
		return lista.find((libro)=>libro.codigo==id)
	}

    borrarLibro = async (id) => {
		let lista = await this.obtenerLibros()
        let indexLibro = lista.findIndex((libro)=>libro.codigo==id)
        let libro = null
        if(indexLibro !== -1){
            libro = lista[indexLibro]
            lista.splice(indexLibro, 1)
            lista = JSON.stringify(lista)
            this.librosFile.guardarData(lista)
        }
		return libro
	}

	guardarLibro = async (libro) => {
		let lista = await this.obtenerLibros()
		lista.push(libro)
		lista = JSON.stringify(lista)

		this.librosFile.guardarData(lista)
	}

}