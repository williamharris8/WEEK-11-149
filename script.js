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

function attemptEntry(key) {
  try {
    console.log(accessVault(key));
  } catch (e) {
    if (e instanceof InvalidKeyError) {
      console.log("Security Alert: System corruption detected.");
    } else if (e instanceof VaultLockedError) {
      console.log("User Error: Please try again.");
    } else {
      throw e;
    }
  } finally {
    console.log("Vault attempt completed.");
  }
}

attemptEntry("SECRET_123");
attemptEntry("password");
attemptEntry(undefined);
attemptEntry(NaN);
