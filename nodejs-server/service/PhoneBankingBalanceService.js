'use strict';


/**
 *
 * body RequestBalance  (optional)
 * returns List
 **/
exports.balancePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "maturityDate" : "maturityDate",
  "shareBalance" : 0.8008281904610115,
  "shareId" : "shareId"
}, {
  "maturityDate" : "maturityDate",
  "shareBalance" : 0.8008281904610115,
  "shareId" : "shareId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body RequestCreditCard  (optional)
 * returns List
 **/
exports.creditCardBalancePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "currentAvailableCredit" : 6.027456183070403,
  "currentBalance" : 0.8008281904610115,
  "cardNumber" : "cardNumber"
}, {
  "currentAvailableCredit" : 6.027456183070403,
  "currentBalance" : 0.8008281904610115,
  "cardNumber" : "cardNumber"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body RequestBalance  (optional)
 * returns List
 **/
exports.loanBalancePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "loanId" : "loanId",
  "loanBalance" : 0.8008281904610115
}, {
  "loanId" : "loanId",
  "loanBalance" : 0.8008281904610115
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body RequestDetail  (optional)
 * returns MortgageBalanceResponse
 **/
exports.mortgageBalancePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "currentPrincipalBalance" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns List
 **/
exports.pingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns List
 **/
exports.pingMemberInteractionGuardGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

