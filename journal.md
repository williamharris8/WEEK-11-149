PHASE 1 - For this phase I set up the vault with strict mode and wrote an accessVault function that returns Access Granted only for the correct key and deny anything else. Use strict is a safety net beecause it turns mistakes JS would normally let by into real errors to catch them early.

PHASE 2 - Returning a value just gives a result and continutes on even if unchecked. But an error stops the function and you're met with the problem needing to be handled. I'd say a developer would prefer a custom error class that way you can tell exactly what is wrong.

PHASE 3 - Catch blocks only run for an error but a finally runs every time. If a program opened a connection to a database and an error occurred the finally block could close the connection.

PHASE 4 - Automated tests are reliable since you check the exact error type instead of guessing what happened. I learned when an error is thrown the function stops which is why the return false in throwsError test only runs if no error was thrown.