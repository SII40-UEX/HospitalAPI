'use strict';


/**
 * Gets the history record
 *
 * id Long ID of pet to return
 * returns String
 **/
exports.getPatient = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Get Correctly" + id  +"hi again";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates the history record
 *
 * id Long ID of pet to return
 * returns String
 **/
exports.updatePatient = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Get Correctly";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

