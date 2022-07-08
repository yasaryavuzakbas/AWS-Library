import aws from 'aws-sdk'
import fs from'fs'
import { any } from 'zod';
import { downloadModel, getModel } from './models';
import {config} from '../config'

const Keys={
    accessKeyId: config.accessKey,
    secretAccessKey: config.secretAccessKey}

export async function downloadFile(payload:downloadModel) {

    const s3 = new aws.S3(Keys);

    const bucket = payload.bucket? payload.bucket :  'lambdabucketyavuz'
    const key = payload.key? payload.key : "transcript.pdf"
    const params = {
        Bucket: bucket,
        Key: key,
    };
    const file = require('fs').createWriteStream(key);
    try {
        const x = s3.getObject(params).createReadStream().pipe(file);
        console.log(x);
        return x
    } catch (err) {
        console.log(err);
        const message = `fail`;
        console.log(message);
        throw new Error(message);
    }
    
}
export async function sleep(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
export async function getFile(payload:getModel) {

    const s3 = new aws.S3(Keys);

    const bucket = payload?.bucket? payload.bucket :  'lambdabucketyavuz'
    const key = payload?.key? payload.key : "transcript.pdf"
    const params = {
        Bucket: bucket,
        Key: key,
    };
    try {
        const x = await s3.getObject(params).promise()
        return x
    } catch (err) {
        console.log(err);
        const message = `fail`;
        console.log(message);
        throw new Error(message);
    }
    
}

export async function listBuckets() {
    const s3 = new aws.S3(Keys
    );
    const bucketList= await s3.listBuckets().promise()
    // console.log(bucketList);
    
    
    return bucketList
    
}