import {getFile, listBuckets} from "./S3/functions";
import { getModel, GetModel } from "./S3/models";

let myval={}
get().then(x=>{ myval=x})
console.log(myval);

async function get() {
    const r= await listBuckets()
    return r;
}

