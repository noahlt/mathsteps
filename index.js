const ChangeTypes = require('./lib/ChangeTypes');
const factor = require('./lib/factor');
const simplifyExpression = require('./lib/simplifyExpression');
const solveEquation = require('./lib/solveEquation');
const getQuadraticCoefficients = require('./lib/factor/getQuadraticCoefficients');

module.exports = {
  factor,
  simplifyExpression,
  solveEquation,
  ChangeTypes,
  getQuadraticCoefficients,
};
