'use strict';

var utils = require('../utils/writer.js');
var Patient = require('../service/PatientService');

module.exports.getPatient = function getPatient (req, res, next, id) {
  Patient.getPatient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Ejemplo
module.exports.updatePatient = function updatePatient (req, res, next, id) {
  Patient.updatePatient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
