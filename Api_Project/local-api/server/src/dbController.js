import fs from 'fs'
import { resolve } from 'path'

//resolve() 현재에 있는 경로가 잡히게됨
const basePath = resolve()

const filenames = {
  messages: resolve(basePath, 'src/db/messages.json'),
  users: resolve(basePath, 'src/db/users.json'),
}

export const readDB = target => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'))
  } catch (err) {
    console.error(err)
  }
}

export const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}
