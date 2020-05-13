import { readFileSync } from 'fs'

export default (req, res) => {
  res.send(JSON.parse(readFileSync(`${__dirname}/../data.json`).toString()))
}
