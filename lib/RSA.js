const path = require('path')
const config = require(path.join(__dirname, '/../config'))
const NodeRSA = require('node-rsa')
const key = new NodeRSA()
console.error('RSA')
key.importKey(config.get('rsaPrivateKey'),'pkcs1-private-pem')

module.exports.encrypt = text => {
  try {
    const encryptedText = key.encrypt(text, 'base64')

    return encryptedText
  } catch (err) {
    return null
  }
}

module.exports.decrypt = text => {
  try {
    console.error("DECRYPT1")
    return key.decrypt(text, 'utf8')
    console.error("DECRYPT2")
  } catch (err) {
    return null
  }
}
