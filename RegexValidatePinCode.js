function validatePIN(pin) {
  if (pin.length != 4 && pin.length != 6) {
    return false;
  }
  for (var i = 0; i < pin.length; i++) {}

  return true;
}
console.log(validatePIN("a23568"));
