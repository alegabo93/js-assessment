exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var regEx = /\d/;
    if(str.match(regEx)){
      return true;
    }
    return false;
  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {

  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },
  isUSD: function(str) {

  }
};
