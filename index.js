require('colors')

const gitStatus = require('./gitStatus')
const gitPull = require('./gitPull')

const abc = async () => {
  try {
    await gitStatus()
    await gitPull('origin', 'master')
  } catch (e) {
    console.error(e)
    throw new Error(e)
  }
}

abc()
