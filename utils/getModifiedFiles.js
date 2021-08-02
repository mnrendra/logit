/**
 * getModifiedFiles: to get modified files.
 * @param {String} msg
 * @returns modified files.
 */
const getModifiedFiles = (msg = '') => {
  const _msg = msg.split('to discard changes in working directory)')[1]
  if (_msg.includes('Untracked files:')) {
    return _msg.split('Untracked files:')[0]
  } else {
    return _msg.split('no changes added to commit')[0]
  }
}

module.exports = getModifiedFiles
