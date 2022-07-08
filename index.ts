import {getFile, listBuckets} from "./S3/functions";
import { getModel, GetModel } from "./S3/models";




async function get() {
    const r= await listBuckets();
    console.log(r);
    
}

