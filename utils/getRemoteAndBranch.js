/**
 * getRemoteAndBranch: to get 'remote' and 'branch' name.
 * @param {String} msg 
 * @returns [remote, branch] name.
 */
 const getRemoteAndBranch = (msg = '') => {
  const branch = msg.split('On branch ')[1].split('\n')[0]
  const remote = msg.split(`/${branch}`)[0].split('\'')[1]
  return [remote, branch]
}

module.exports = getRemoteAndBranch
