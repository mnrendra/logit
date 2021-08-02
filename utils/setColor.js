/**
 * setColor: to set colorful message.
 * @param {String} msg 
 * @param {String} remote 
 * @param {String} branch 
 * @param {String} modifiedFiles 
 * @param {String} addedFiles 
 * @returns colorful message.
 */
 const setColor = (msg = '', remote = '', branch = '', modifiedFiles = '', addedFiles = '') => {
  return msg
    .replace(branch, branch.green)
    .replace(`'${remote}/${branch}'`, `'${remote}/${branch}'`.green)
    .replace(modifiedFiles, modifiedFiles.red)
    .replace(addedFiles, addedFiles.red)
}

module.exports = setColor
