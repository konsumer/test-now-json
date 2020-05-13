export default (req, res) => {
  res.send(require(`${__dirname}/../data.json`))
}
