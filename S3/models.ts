import z from 'zod'

export const DownloadModel= z.object({
    bucket: z.string(),
    key: z.string(),
    path: z.string().optional(),
    region: z.string().optional(),
})
export type downloadModel= z.infer<typeof DownloadModel>



export const GetModel= z.object({
    bucket: z.string().optional(),
    key: z.string().optional(),
    region: z.string().optional(),
}).optional()
export type getModel= z.infer<typeof GetModel>  