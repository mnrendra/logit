/**
 * getStagedFiles: to get staged files.
 * @param {String} msg
 * @returns modified files.
 */
const getStagedFiles = (msg = '') => {
  const _msg = msg.split('(use "git restore --staged <file>..." to unstage)')[1]
  if (_msg.includes('Untracked files:') && _msg.includes('Changes not staged for commit:')) {
    return _msg.split('Changes not staged for commit:')[0]
  } else if (_msg.includes('Untracked files:')) {
    return _msg.split('Untracked files:')[0]
  } else {
    return _msg.split('Changes not staged for commit:')[0]
  }
}

module.exports = getStagedFiles
