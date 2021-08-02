const getStagedFiles = require('./getStagedFiles')
const getModifiedFiles = require('./getModifiedFiles')
const getAddedFiles = require('./getAddedFiles')

/**
 * getUncommitFiles: to get uncommit files.
 * @param {String} msg
 * @returns [staged, modified, added] files.
 */
const getUncommitFiles = (msg = '') => {
  let stagedFiles = ''
  let modifiedFiles = ''
  let addedFiles = ''

  if (msg.includes('Changes to be committed:') && msg.includes('Changes not staged for commit:') && msg.includes('Untracked files:')) {
    // staged, modified, added
    stagedFiles = getStagedFiles(msg)
    modifiedFiles = getModifiedFiles(msg)
    addedFiles = getAddedFiles(msg)
  } else if (msg.includes('Changes to be committed:') && msg.includes('Changes not staged for commit:') && !msg.includes('Untracked files:')) {
    // staged, modified
    stagedFiles = getStagedFiles(msg)
    modifiedFiles = getModifiedFiles(msg)
  } else if (msg.includes('Changes to be committed:') && !msg.includes('Changes not staged for commit:') && msg.includes('Untracked files:')) {
    // staged, added
    stagedFiles = getStagedFiles(msg)
    addedFiles = getAddedFiles(msg)
  } else if (msg.includes('Changes to be committed:') && !msg.includes('Changes not staged for commit:') && !msg.includes('Untracked files:')) {
    // staged
    stagedFiles = getStagedFiles(msg)
  } else if (!msg.includes('Changes to be committed:') && msg.includes('Changes not staged for commit:') && msg.includes('Untracked files:')) {
    // modified, added
    modifiedFiles = getModifiedFiles(msg)
    addedFiles = getAddedFiles(msg)
  } else if (!msg.includes('Changes to be committed:') && msg.includes('Changes not staged for commit:') && !msg.includes('Untracked files:')) {
    // modified
    modifiedFiles = getModifiedFiles(msg)
  } else if (!msg.includes('Changes to be committed:') && !msg.includes('Changes not staged for commit:') && msg.includes('Untracked files:')) {
    // added
    addedFiles = getAddedFiles(msg)
  }

  return [stagedFiles, modifiedFiles, addedFiles]
}

module.exports = getUncommitFiles
