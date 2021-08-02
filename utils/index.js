module.exports = {
  runCommand: require('.bin/app3/utils/runCommand'),
  //
  getModifiedFiles: require('./getModifiedFiles'),
  getAddedFiles: require('./getAddedFiles'),
  getModifiedAndAddedFiles: require('./getModifiedAndAddedFiles'),
  getRemoteAndBranch: require('./getRemoteAndBranch'),
  setColor: require('./setColor'),
  printMessage: require('./printMessage'),
  //
  handleError: require('./handleError')
}
