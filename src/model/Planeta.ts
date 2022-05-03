import {Pelicula} from "./Pelicula";
import {Persona} from "./Persona";

export class Planeta {
    id: string
    diametro: string;
    periodo_rotacion: string;
    periodo_orbital: string;
    gravedad: string;
    poblacion: string;
    clima: string;
    terreno: string;
    superficie_agua: string; // porcentaje
    residentes: Array<Persona> = [];
    peliculas: Array<Pelicula> = [];
    url: string;
    creado: string; // fecha
    editado: string; // fecha

    constructor(data?: Partial<Planeta>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}