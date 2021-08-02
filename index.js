require('colors')

const gitStatus = require('.bin/app3/gitStatus')
const gitPull = require('.bin/app3/gitPull')

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
