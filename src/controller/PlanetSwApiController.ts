import {Swapi} from "../libs/swapi";
import {Planeta} from "../model/Planeta";
import {PlanetaService} from "../service/PlanetaService";

export class PlanetSwApiController {

    planeta: Planeta;
    planetas: Array<Planeta> = [];

    constructor(private swapi: Swapi,
                private planetaService: PlanetaService) {
    }

    async getAll() {
        const planets = await this.swapi.getAll();
        planets.map((item) => {
           const planeta = this.planetaService.translate(item);
           this.planetas.push(planeta);
        });
        return this.planetas;
    }

    async get(id: number) {
         const planet = await this.swapi.get(id);
         return this.planetaService.translate(planet);
    }
}