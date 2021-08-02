/**
 * getAddedFiles: to get added files.
 * @param {String} msg
 * @returns added files.
 */
const getAddedFiles = (msg = '') => {
  const _msg = msg.split('to include in what will be committed)')[1]
  if (_msg.includes('nothing added')) {
    return _msg.split('nothing added')[0]
  } else {
    return _msg.split('no changes added to commit')[0]
  }
}

module.exports = getAddedFiles
