import {getFile, listBuckets,listObjects} from "./S3/functions";
import { getModel, GetModel } from "./S3/models";
import { zodToJsonSchema } from 'zod-to-json-schema'

get()

async function get() {
    const payload ={}
    const r= await listObjects({
        bucket: 'lambdabucketyavuz'
    });
    console.log(r);
    
}