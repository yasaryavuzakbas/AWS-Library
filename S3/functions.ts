import aws from 'aws-sdk'
import fs from'fs'
import { downloadModel, getModel, listObjectsModel, uploadModel } from './models';
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

    const bucket = payload.bucket
    const key = payload.key
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
    
    
    return bucketList
    
}

export async function listObjects(payload:listObjectsModel){
    const s3 = new aws.S3(Keys
        );
    const r= await s3.listObjects({Bucket: payload!.bucket}).promise()
    
    return r;

}


export async function uploadFile(payload: uploadModel) {

    const s3 = new aws.S3(Keys);

    const bucket = payload.bucket
    const key = payload.key
    const file = require('fs').readFileSync(payload.path);
    
    const params = {
        Bucket: bucket,
        Key: key,
        Body: file
    };
    try {
        const x = await s3.upload(params).promise();
        console.log(x);
        return x
    } catch (err) {
        console.log(err);
        const message = `fail`;
        console.log(message);
        throw new Error(message);
    }
    
}