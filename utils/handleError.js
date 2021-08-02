/**
 * handleError: to handle if catch an error.
 * @param {Error} error
 */
const handleError = (error = new Error('')) => {
  console.error(error)
  throw new Error(error)
}

module.exports = handleError
