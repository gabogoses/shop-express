function roundMath(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

exports.roundMath = roundMath;
