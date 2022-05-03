import axios from "axios";
import {Planeta} from "../model/Planeta";
// @ts-ignore
import {AWS, DynamoDB} from 'aws-sdk';

const TABLE_NAME = "planet";

export class PlanetaRepository {

    planetList: Array<Planeta> = [];

    async getAll(): Promise<Array<Planeta>> {
        const db = new DynamoDB.DocumentClient();
        const planets = await db
            .scan({
                TableName: TABLE_NAME,
            })
            .promise()
        if (!planets.Items)
            return [];
        planets.Items.map((item) => {
            const planet = new Planeta(item);
            this.planetList.push(planet);
        });
        return this.planetList;
    }

    async get(id: number): Promise<Planeta> {
        const db = new DynamoDB.DocumentClient();
        const planet = await db.get({
            TableName: TABLE_NAME,
            Key: {
                id
            }
        }).promise();
        if (!planet.Item)
            return new Planeta();
        return new Planeta(planet.Item);
    }

    async save(planeta: Planeta): Promise<Planeta> {
        try {
            const db = new DynamoDB.DocumentClient();
            await db.put({
                TableName: TABLE_NAME,
                Item: planeta
            }).promise();
            return planeta;
        }
        catch (e) {
            console.log('Error:', e.message);
            return new Planeta();
        }
    }

    async update(planet: Planeta) {

    }

    async delete(id: number) {

    }
}