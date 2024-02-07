import { LibroService } from "../services/libro.js"
import { validarLibro,validarCodigo } from "../validators/validations.js"


export class LibroController {
	constructor() {
		this.service = new LibroService()
	}

	obtenerLibros = async (req, res) => {
		const libros = await this.service.obtenerLibros()
		return res.status(200).json({ libros })
	}

	obtenerLibro = async (req, res) => {
        const validation = validarCodigo(req.params.id)
        if (validation.result) {
            const libro = await this.service.obtenerLibro(req.params.id)
            if(!libro){
                return res.status(404).json({ errorMsg: "No se encontro el libro con ese codigo." })
            }
            return res.status(200).json({ libro })
        } else {
            return res.status(400).json({ errorMsg: validation.error })
        }
	}

	borrarLibro = async (req, res) => {
        const validation = validarCodigo(req.params.id)
        if (validation.result) {
            const libro = await this.service.borrarLibro(req.params.id)
            if(!libro){
                return res.status(404).json({ errorMsg: "No se encontro el libro con ese codigo." })
            }
            return res.status(200).json({ libro })
        } else {
            return res.status(400).json({ errorMsg: validation.error })
        }
	}

    guardarLibro = async (req, res) => {
        if (req.body) {
            const validation = validarLibro(req.body)
            if (validation.result) {
                const libro = await this.service.guardarLibro(req.body)
                if(libro){
                    return res.status(400).json({ errorMsg: "El libro con ese codigo ya existe." })
                }
                return res.status(200).json({ msg: "Se ha guardado el libro exitosamente." })
            } else {
                return res.status(400).json({ errorMsg: validation.error })
            }
        }
    }
}