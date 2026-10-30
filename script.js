"use strict";
class InvalidKeyError extends Error {}
class VaultLockedError extends Error {}

function accessVault(key) {
  if (key === undefined || Number.isNaN(key)) {
    throw new InvalidKeyError("Key is missing or corrupted");
  }
  if (key === "SECRET_123") {
    return "Access Granted";
  } else {
    throw new VaultLockedError("Incorrect key provided");
  }
}

console.log(accessVault("SECRET_123"));
console.log(accessVault("password"));
console.log(accessVault(undefined));