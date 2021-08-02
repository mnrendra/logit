const runCommand = require('.bin/app3/utils/runCommand')
const getRemoteAndBranch = require('.bin/app3/utils/getRemoteAndBranch')
const getModifiedAndAddedFiles = require('.bin/app3/utils/getModifiedAndAddedFiles')
const setColor = require('.bin/app3/utils/setColor')
const printMessage = require('.bin/app3/utils/printMessage')
const handleError = require('.bin/app3/utils/handleError')

/**
 * gitStatus: to run 'git status' command
 * @param {Function} run 
 * @returns 'git status' message.
 */
const gitStatus = async () => {
  try {
    // run command.
    const COMMAND = 'git status'
    const [stdErr, stdOut] = await runCommand(COMMAND)

    // handle stdErr.
    if (stdErr) {
      console.log('pipis', stdErr)
      console.log(stdErr.red)
      process.exit()
    }

    // set original message.
    const message = `${stdOut + stdErr}`

    // get remote and branch.
    const [remote, branch] = getRemoteAndBranch(message)

    // handle main condition
    if (!message.includes('nothing to commit')) {
      // get modified and added files.
      const [modifiedFiles, addedFiles] = getModifiedAndAddedFiles(message)
      // set color and print final message.
      const colorfulMessage = setColor(message, remote, branch, modifiedFiles, addedFiles)
      printMessage(COMMAND, colorfulMessage)
      // exit by print reason message.
      console.log(`Please 'add' and 'commit' or 'stash' your current change first!`.yellow)
      process.exit()
      // eol
    } else {
      // set color and print final message.
      const colorfulMessage = setColor(message, remote, branch)
      printMessage(COMMAND, colorfulMessage)
      // return final message.
      return colorfulMessage
      // eol
    }
  } catch (e) {
    handleError(e)
  }
}

module.exports = gitStatus
