/**
 * setColor: to set colorful message.
 * @param {String} msg
 * @param {String} remote
 * @param {String} branch
 * @param {String} modifiedFiles
 * @param {String} addedFiles
 * @returns colorful message.
 */
const setColor = (msg = '', remote = '', branch = '', stagedFiles = '', modifiedFiles = '', addedFiles = '') => {
  return msg
    .replace(
      branch,
      branch.green
    )
    .replace(
      `'${remote}/${branch}'`,
      `'${remote}/${branch}'`.green
    )
    .replace(
      '(use "git restore --staged <file>..." to unstage)' + stagedFiles,
      '(use "git restore --staged <file>..." to unstage)' + stagedFiles.green
    )
    .replace(
      '(use "git restore <file>..." to discard changes in working directory)' + modifiedFiles,
      '(use "git restore <file>..." to discard changes in working directory)' + modifiedFiles.red
    )
    .replace(
      '(use "git add <file>..." to include in what will be committed)' + addedFiles,
      '(use "git add <file>..." to include in what will be committed)' + addedFiles.red
    )
    .replace(
      /fatal:/g,
      'fatal:'.yellow
    )
    .replace(
      /CONFLICT/g,
      'CONFLICT'.yellow
    )
    .replace(
      /hint:/g,
      'hint:'.yellow
    )
}

module.exports = setColor
