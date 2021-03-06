const fs = require('fs'),
    path = require('path')

let configFile = process.env.MockConfig
configFile = path.isAbsolute(configFile) ? configFile : path.join(process.cwd(), configFile)

const Config = JSON.parse(fs.readFileSync(configFile).toString())

module.exports = Config