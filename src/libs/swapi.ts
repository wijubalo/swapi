import axios from "axios";
import {Planet} from "./model/Planet";

// const url = `${process.env.SWAPI_BASE_URL}/planets`;
const urlBase = "https://swapi.py4e.com/api";
const url = `${urlBase}/planets`;

export class Swapi {
    planetList: Array<Planet> = [];

    async getAll(): Promise<Array<Planet>> {
        const result = await axios.get(url);
        if (!result.data.results)
            return [];
        result.data.results.map((item) => {
            const planet = new Planet(item);
            this.planetList.push(planet);
        });
        return this.planetList;
    }

    async get(id: number): Promise<Planet> {
        const result = await axios.get(`${url}/${id}`);
        if (!result.data)
            return new Planet();
        result.data.id = id;
        return new Planet(result.data);
    }
}

export const SwapiService = new Swapi();