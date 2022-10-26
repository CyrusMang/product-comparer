import { dbconnect, dbclose } from '../../lib/database'

export default async (req, res) => {
  try {
    const db = await dbconnect()
    dbclose()
    res.status(200).json({ text: 'products' })
  } catch (e) {
    throw e
  }
}