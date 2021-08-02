/**
 * printMessage: to print final message.
 * @param {String} command 
 * @param {String} colorfulMessage 
 */
 const printMessage = (command = '', colorfulMessage = '') => {
  console.log(`--- ${command} ---`.yellow.bold, `${'\n' + colorfulMessage}`)
}

module.exports = printMessage
