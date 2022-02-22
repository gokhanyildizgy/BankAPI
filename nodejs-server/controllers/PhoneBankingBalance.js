'use strict';

var utils = require('../utils/writer.js');
var PhoneBankingBalance = require('../service/PhoneBankingBalanceService');

module.exports.balancePOST = function balancePOST (req, res, next, body) {
  PhoneBankingBalance.balancePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.creditCardBalancePOST = function creditCardBalancePOST (req, res, next, body) {
  PhoneBankingBalance.creditCardBalancePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loanBalancePOST = function loanBalancePOST (req, res, next, body) {
  PhoneBankingBalance.loanBalancePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mortgageBalancePOST = function mortgageBalancePOST (req, res, next, body) {
  PhoneBankingBalance.mortgageBalancePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingGET = function pingGET (req, res, next) {
  PhoneBankingBalance.pingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingMemberInteractionGuardGET = function pingMemberInteractionGuardGET (req, res, next) {
  PhoneBankingBalance.pingMemberInteractionGuardGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
