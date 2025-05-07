// console.log("JavaScript: Callback Functions Module");

// // Function that logs a string to the console
// function notifyUser() {
//   console.log("notifyUser function was called");
// }

// // accepts a function as an argument to run when it has done it's work

// function myAwesomeFunction(notifyUserCallback) {
//   console.log("Running function... doing stuff");
//   console.log("Complex task complete, notifying user");
//   notifyUserCallback();
// }

// // run the function and pass notifyuser function to it
// myAwesomeFunction(notifyUser);

// function myAwesomeFunction(onCompleteCallback) {
//   console.log("Running another function... doing complex tasks");
//   console.log("Complex task complete... again!");
//   onCompleteCallback();
// }

// myAwesomeFunction(function () {
//   console.log("notifyUser function has been called! again");
// });

// =============================================================================

function myMathFunction(onSuccessCallback, onFailureCallback) {
  console.log("run test 3");
  console.log("test 3 complete");

  // randomly choose if success if true of false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "success!",
    });
  } else {
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  console.log("It was successful:", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myMathFunction(onAwesomeSuccess, onAwesomeFailure);
