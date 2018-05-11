const Node = require('../node');
const evaluate = require('../util/evaluate');

function getQuadraticCoefficients(node) {
  let symbol, aValue = 0, bValue = 0, cValue = 0;
  for (const term of node.args) {
    if (Node.Type.isConstant(term)) {
      cValue = evaluate(term);
    }
    else if (Node.PolynomialTerm.isPolynomialTerm(term)) {
      const polyTerm = new Node.PolynomialTerm(term);
      const exponent = polyTerm.getExponentNode(true);
      if (exponent.value === '2') {
        symbol = polyTerm.getSymbolNode();
        aValue = polyTerm.getCoeffValue();
      }
      else if (exponent.value === '1') {
        bValue = polyTerm.getCoeffValue();
      }
      else {
        return undefined;
      }
    }
    else {
      return undefined;
    }
  }

  if (!symbol || !aValue) {
    return undefined;
  }

  let negate = false;
  if (aValue < 0) {
    negate = true;
    aValue = -aValue;
    bValue = -bValue;
    cValue = -cValue;
  }
  return {aValue, bValue, cValue, negate, symbol, negate};
}

module.exports = getQuadraticCoefficients;
