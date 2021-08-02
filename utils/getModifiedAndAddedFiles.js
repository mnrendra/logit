const getModifiedFiles = require('.bin/app3/utils/getModifiedFiles')
const getAddedFiles = require('.bin/app3/utils/getAddedFiles')

/**
 * getModifiedAndAddedFiles: to get 'modified' and 'added' files.
 * @param {String} msg 
 * @returns [modified, added] files.
 */
 const getModifiedAndAddedFiles = (msg ='') => {
  let modifiedFiles = ''
  let addedFiles = ''

  if (msg.includes('Changes not staged for commit:') && msg.includes('Untracked files:')) {
    modifiedFiles = getModifiedFiles(msg)
    addedFiles = getAddedFiles(msg)
  } else if (msg.includes('Changes not staged for commit:') && !msg.includes('Untracked files:')) {
    modifiedFiles = getModifiedFiles(msg)
  } else if (!msg.includes('Changes not staged for commit:') && msg.includes('Untracked files:')) {
    addedFiles = getAddedFiles(msg)
  }

  return [modifiedFiles, addedFiles]
}

module.exports = getModifiedAndAddedFiles
