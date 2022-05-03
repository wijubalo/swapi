import {PlanetaService} from "../service/PlanetaService";

export class PlanetaController {
    constructor(private service: PlanetaService) {
    }

    async getAll() {
        return await this.service.getAll();
    }

    async get(id: number) {
        return await this.service.get(id);
    }

    async save(data) {
        const result = await this.service.save(data);
        return result;
    }
}