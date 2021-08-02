const runCommand = require('.bin/app3/utils/runCommand')
const printMessage = require('.bin/app3/utils/printMessage')
const handleError = require('.bin/app3/utils/handleError')

/**
 * gitPull: to run 'git pull' command
 * @param {Function} run 
 * @returns 'git pull' message.
 */
const gitPull = async (remote = '', branch = '') => {
  try {
    //
    if (!remote) handleError('remote is required!')
    if (!branch) handleError('branch is required!')

    // run command.
    const COMMAND = `git pull ${remote} ${branch}`
    const [stdErr, stdOut] = await runCommand(COMMAND)

    // handle stdErr.
    if (stdErr && !stdOut.includes('Already up to date')) {
      console.log(stdErr.red)
      process.exit()
    }

    // set original message.
    const message = `${stdErr + stdOut}`

    if (message.includes('CONFLICT') || message.includes('fatal') || message.includes('hint: ')) {
      console.log(message)
      process.exit()
    }

    //
    printMessage(COMMAND, message)
  } catch (e) {
    handleError(e)
  }
}

module.exports = gitPull
