function solution(operations) {
  const stack = ['|'];
  let str = '|', i = 0, selected = [-1, -1];
  for (let op of operations) {
    op = op.split(' ');
    i = str.indexOf('|');
    if (op[0] == 'TYPE') {
      if (selected[0] >= 0) {
        str = str.substring(0, selected[0]) + str.substring(selected[1]);
        i = selected[0];
      }
      str = str.substring(0, i) + op[1] + str.substring(i);
      stack.push(str);
      selected = [-1, -1];
    } else if (op[0] == 'UNDO') {
      stack.pop();
      str = stack.at(-1);
      if (!str) str = '|'
      selected = [-1, -1];
    } else if (op[0] == 'MOVE_CURSOR') {
      str = str.substring(0, i) + str.substring(i + 1);
      i += +op[1]
      str = str.substring(0, i) + '|' + str.substring(i, str.length);
      stack.push(str);
      selected = [-1, -1];
    } else if (op[0] == 'SELECT') {
      str = str.substring(0, i) + str.substring(i + 1);
      if (+op[2] >= str.length) str = str + '|';
      else str = str.substring(0, +op[2] + 1) + '|' + str.substring(+op[2] + 1);
      stack.push(str);
      selected = [+op[1], +op[2] + 1];
    }
  }
  i = str.indexOf('|');
  if (i < 0) return str;
  return str.substring(0,i) + str.substring(i+1);
 }
  
 let ops = ["TYPE Code", "TYPE Signal", "MOVE_CURSOR -3", "SELECT 5 8", "TYPE ou", "UNDO", "TYPE nio"];
 ops = ["TYPE MyCat", "SELECT 2 3", "MOVE_CURSOR -1", "TYPE he", "SELECT 0 1", "TYPE His"]
 ops = ["TYPE Nothing", "TYPE Is", "TYPE Permanent", "UNDO", "UNDO", "UNDO", "UNDO", "UNDO"];
 console.log('Answer is : ' + solution(ops));
 