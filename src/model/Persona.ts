import {Pelicula} from "./Pelicula";

export class Persona {
    id: string;
    nombre: string;
    nacimiento: string;
    ojos_color: string;
    genero: string;
    cabello_color: string;
    masa: string;
    piel_color: string;
    planeta_url: string;
    peliculas: Array<Pelicula>;
    especies: [];
    naves_estelares: [];
    vehiculos: [];
    url: string;
    creado: string;
    editado: string;

    constructor(data?: Partial<Persona>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}