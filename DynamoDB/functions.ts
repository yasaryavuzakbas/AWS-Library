import aws from 'aws-sdk'
import {config} from '../config'
import {  createTableModel } from './models';


const Keys={
    accessKeyId: config.accessKey,
    secretAccessKey: config.secretAccessKey,
    region: "eu-west-1"}

export async function createTable(payload: createTableModel){
    const db= new aws.DynamoDB(Keys)

    const params = {
        TableName: payload.TableName,
        KeySchema: payload.KeySchema,
        AttributeDefinitions: payload.AttributeDefinitions,
        ProvisionedThroughput: payload.ProvisionedThroughput
    };
    try {
        const x = await db.createTable(params).promise();
        console.log(x);
        return x
    } catch (err) {
        console.log(err);
        const message = `fail`;
        console.log(message);
        throw new Error(message);
    }


}
