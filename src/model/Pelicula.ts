import {Planeta} from "./Planeta";

export class Pelicula {
    id: string
    titulo: string;
    episodio_id: number;
    creditos: string;
    director: string;
    productor: string;
    lanzamiento_fecha: Date;
    especies: [];
    naves_estelares: [];
    vehiculos: [];
    personajes: [];
    planetas: Array<Planeta>
    url: string;
    creado: string;
    editado: string;

    constructor(data?: Partial<Pelicula>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}