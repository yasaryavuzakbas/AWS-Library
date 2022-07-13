import z, { string } from 'zod'

export const CreateTableModel= z.object({
    TableName: z.string(),
    AttributeDefinitions: z.object({
        AttributeName: z.string(),
        AttributeType: z.string()
    }).array(),
    KeySchema: z.object({
        AttributeName: z.string(),
        KeyType: z.string()
    }).array(),
    ProvisionedThroughput: z.object({
        ReadCapacityUnits: z.number(),
        WriteCapacityUnits: z.number()
    })
})

export type createTableModel= z.infer<typeof CreateTableModel>  
