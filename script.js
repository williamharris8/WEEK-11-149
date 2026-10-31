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

function throwsError(key, ErrorType) {
  try {
    accessVault(key);
    return false;
  } catch (e) {
    return e instanceof ErrorType;
  }
}

function runTests() {
  console.log("Correct key:", accessVault("SECRET_123") === "Access Granted" ? "PASS" : "FAIL");
  console.log("Undefined key:", throwsError(undefined, InvalidKeyError) ? "PASS" : "FAIL");
  console.log("NaN key:", throwsError(NaN, InvalidKeyError) ? "PASS" : "FAIL");
  console.log("Wrong key:", throwsError("WRONG", VaultLockedError) ? "PASS" : "FAIL");
}

attemptEntry("SECRET_123");
attemptEntry("password");
attemptEntry(undefined);
attemptEntry(NaN);

attemptEntry("");
attemptEntry(null);
attemptEntry(123);
attemptEntry({});
attemptEntry([]);
attemptEntry("secret_123");

runTests();