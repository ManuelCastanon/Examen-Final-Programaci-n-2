import fs from "fs"

export class File {
	constructor(urlArchivo) {
		this.urlArchivo = urlArchivo
	}

	/**
    Lee un archivo y devuelve el contenido del mismo.
    @return {string} información del archivo.
  */
	obtenerData = () => {
		return fs.promises.readFile(this.urlArchivo, "utf-8")
	}

	/**
    Graba un texto en un archivo.
    @param {string} texto texto a escribir en el archivo.
  */
	guardarData = (texto) => {
		return fs.promises.writeFile(this.urlArchivo, texto)
	}
}