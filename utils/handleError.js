/**
 * handleError: to handle if catch an error.
 * @param {Error} error
 */
const handleError = (error = new Error('')) => {
  if (error.toString().includes('connect')) {
    // handle if internet is offline.
    console.log('You seem to be offline! Please check your connection!'.yellow)
    process.exit()
  } else if (error.toString().includes('fatal')) {
    // handle if catch 'fatal' message from git
    const errMsg = error.toString()
    const oriErrMsg = errMsg.split('Error:')[1].split('\n')[0]
    const oriMsg = errMsg.split(oriErrMsg)[1]
    let message = oriMsg
      .replace('\n', '')
      .replace(/fatal:/g, 'fatal:'.yellow)

    if (message.includes('does not appear to be a git repository')) {
      const wrongRemote = message.split('fatal:')[1].split('does not appear to be a git repository')[0]
      message = message.replace(wrongRemote, ` ${'\''.red}${wrongRemote.split('\'')[1].red}${'\''.red} `)
      console.log(message)
      console.log(`Please check your ${'remote'.bold}/branch name!`.yellow)
    } else if (message.includes('couldn\'t find remote ref')) {
      const wrongBranch = message.split('find remote ref')[1].split('\n')[0]
      message = message.replace(wrongBranch, `${wrongBranch}`.red)
      console.log(message)
      console.log(`Please check your remote/${'branch'.bold} name!`.yellow)
    }
    process.exit()
  } else {
    // handle else error
    console.error(error)
    throw new Error(error)
  }
}

module.exports = handleError
