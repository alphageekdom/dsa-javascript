function validateEmail(email) {
  if (email.indexOf('@') === -1) {
    return false;
  }

  const [localPort, domain] = email.split('@');

  if (localPort.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split('.');

  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2
  ) {
    return false;
  }

  return true;
}

module.exports = validateEmail;
