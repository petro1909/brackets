module.exports = function check(str, bracketsConfig) {
 
  var ch;
  var stack = [];

  var openingBrackets = ['[', '{', '(','1','3','5','7','8'];
  var closingBrackets = [']', '}', ')','2','4','6','7','8'];
  var samebrackets=['|'];
    if (str.length <= 1)
      return false;

    for (var i = 0; i < str.length; i++) {
      ch = str[i];
  
      if (closingBrackets.indexOf(ch) != -1) {
        bracketsConfig = openingBrackets[closingBrackets.indexOf(ch)];
        if (stack.length == 0 || (stack.pop() != bracketsConfig)) {
          return false;
        }
      } else {
        stack.push(ch)
      }
    }

    return (stack.length == 0)
  };
  
 


 

