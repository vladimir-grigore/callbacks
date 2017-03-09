// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(parameter){
    if (parameter === "Waldo") {
      found(arr.indexOf(parameter));   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index %d!", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);