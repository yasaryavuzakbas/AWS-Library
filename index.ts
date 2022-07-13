import {getFile, listBuckets,listObjects, uploadFile, createBucket} from "./S3/functions";
import { getModel, GetModel } from "./S3/models";
import { zodToJsonSchema } from 'zod-to-json-schema'
import {createTable} from "./DynamoDB/functions";

// list()
createtable()

async function createtable() {
    // @ts-ignore:next-line
    const r= await createTable({
        TableName: "testFirstTable",
        KeySchema: [
            { AttributeName: "year", KeyType: "HASH"},  //Partition key
            { AttributeName: "title", KeyType: "RANGE" }  //Sort key
        ],
        AttributeDefinitions: [
            { AttributeName: "year", AttributeType: "N" },
            { AttributeName: "title", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    });
    console.log(r);
    
}

async function createbucket() {
    const payload ={}
    // @ts-ignore:next-line
    const r= await createBucket({
        bucket: 'testyavuzlocalbucket3',
        region: "eu-west-1",
        public: false
    });
    console.log(r);
    
}


async function list() {
    const payload ={}
    // @ts-ignore:next-line
    const r= await listObjects({
        bucket: 'lambdabucketyavuz'
    });
    console.log(r);
    
}


async function get() {
    const payload ={}
    const r= await uploadFile({
        bucket: 'lambdabucketyavuz',
        key: 'newpdf.pdf',
        path: '/Users/yavuzakbas/Desktop/testFolder'
    });
    
}