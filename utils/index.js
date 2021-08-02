module.exports = {
  runCommand: require('./runCommand'),
  //
  getModifiedFiles: require('./getModifiedFiles'),
  getAddedFiles: require('./getAddedFiles'),
  getUncommitFiles: require('./getUncommitFiles'),
  getRemoteAndBranch: require('./getRemoteAndBranch'),
  setColor: require('./setColor'),
  printMessage: require('./printMessage'),
  //
  handleError: require('./handleError')
}
