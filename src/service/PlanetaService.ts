import {PlanetaRepository} from "../repository/PlanetaRepository";
import {Planet} from "../libs/model/Planet";
import {Planeta} from "../model/Planeta";
import { v4 as uuidv4 } from 'uuid';

export class PlanetaService {
    constructor(private repository: PlanetaRepository) {
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async get(id: number) {
        return await this.repository.get(id);
    }

    async save(data: Planeta) {
        data.id = uuidv4();
        const planeta = new Planeta(data);
        const result = await this.repository.save(planeta);
        return result;
    }

    translate(data?: Planet): Planeta {
        const planeta = new Planeta();
        planeta.id = data?.id ? data.id : uuidv4();
        planeta.diametro = data?.diameter ? data.diameter : '';
        planeta.periodo_rotacion = data?.rotation_period ? data.rotation_period : '';
        planeta.periodo_orbital = data?.orbital_period ? data.orbital_period : '';
        planeta.gravedad = data?.gravity ? data.gravity : '';
        planeta.poblacion = data?.population ? data.population : '';
        planeta.clima = data?.climate ? data.climate : '';
        planeta.terreno = data?.terrain ? data.terrain : '';
        planeta.superficie_agua = data?.surface_water ? data.surface_water : '';
        planeta.residentes = [];
        planeta.peliculas = [];
        planeta.url = data?.url ? data.url : '';
        planeta.creado = data?.created ? data.created : '';
        planeta.editado = data?.edited ? data.edited : '';
        return planeta;
    }
}