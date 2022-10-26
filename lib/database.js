import { MongoClient } from 'mongodb'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

const client = new MongoClient(serverRuntimeConfig.mongodbconfig.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export const dbconnect = async () => {
  try {
    await client.connect()
    const db = client.db(serverRuntimeConfig.mongodbconfig.database)
    return db
  } catch (e) {
    throw e
  }
}

export const dbclose = () => client.close()