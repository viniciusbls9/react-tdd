const cypressTypescriptPreProcessor = require('./cy-ts-preprocessor')

module.exports = on => {
  on('file:preprocessor', cypressTypescriptPreProcessor)
}
