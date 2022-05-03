import {PlanetaController} from "./PlanetaController";
import {planetaService} from "../service";
import {PlanetSwApiController} from "./PlanetSwApiController";
import {SwapiService} from "../libs/swapi";

export const planetaController = new PlanetaController(planetaService);
export const planetSwApiController = new PlanetSwApiController(SwapiService, planetaService);