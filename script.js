"use strict";

function accessVault(key) {
  if (key === "SECRET_123") {
    return "Access Granted";
  } else {
    return "Access Denied";
  }
}

console.log(accessVault("SECRET_123"));
console.log(accessVault("password"));
console.log(accessVault(undefined));