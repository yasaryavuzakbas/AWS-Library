import z, { string } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

export const DownloadModel= z.object({
    bucket: z.string(),
    key: z.string(),
    path: z.string().optional(),
    region: z.string().optional(),
})

export const GetModel= z.object({
    bucket: z.string().optional(),
    key: z.string().optional(),
    region: z.string().optional(),
}).optional()

export const ListObjectsModel= z.object({
    bucket: z.string(),
}).optional()
export const UploadModel= z.object({
    bucket: z.string(),
    key: z.string(),
    path: z.string(),
    region: z.string().optional(),
})

export type listObjectsModel= z.infer<typeof ListObjectsModel>  
export type getModel= z.infer<typeof GetModel>  
export type downloadModel= z.infer<typeof DownloadModel>
export type uploadModel= z.infer<typeof UploadModel>
