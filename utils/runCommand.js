const handleError = require('./handleError')

/**
 * runCommand: to run (execute) the command.
 * @param {String} command
 * @returns [stderr, stdout] string messages.
 */
const runCommand = async (command = '') => {
  try {
    const { exec } = require('child_process')
    const util = require('util')
    const run = util.promisify(exec)
    const { stderr, stdout } = await run(command)
    return [`${stderr}`, `${stdout}`]
  } catch (e) {
    handleError(e)
  }
}

module.exports = runCommand
