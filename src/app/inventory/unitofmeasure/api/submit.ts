import UnitOfMeasureModel from '@/models/unitofmeasure'
import type { NextApiRequest, NextApiResponse } from 'next'



function createItem(data: {}): UnitOfMeasureModel {

    const result: UnitOfMeasureModel = {
        UnitCode: 'test',
        AllowDecimal: true,
        Status: 'test',
        UomDescription: 'test',
        Symbol: 'test',
        UomCategory: 'test',
        UomId: 'test',
        UomName: 'test',
        UomType: 'test',
    };

    return (result);
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = req.body
    const id = await createItem(data)
    res.status(200).json({ id })
}