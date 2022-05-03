import {PlanetaService} from "./PlanetaService";
import {planetaRepository} from "../repository";

export const planetaService = new PlanetaService(planetaRepository);