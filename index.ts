import {getFile, listBuckets,listObjects, uploadFile} from "./S3/functions";
import { getModel, GetModel } from "./S3/models";
import { zodToJsonSchema } from 'zod-to-json-schema'

list()
// get()

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
        path: '/Users/yavuzakbas/Desktop/request.rtf'
    });
    // console.log(r);
    
}