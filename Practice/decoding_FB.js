/*
Find the numbers of all possible secret codes of the given data using the decoding map.
- Decoding map = {'1': 'a', '2': 'b', ... , '13': 'm', '14': 'n', ... , 25': 'y', '26': 'z',}
- data : consist of '0' or positive intergers
- Examples:
  data = ''       -->   (1)   '' 
  data = '1234'   -->   (3)   1,2,3,4 = 'abcd'  1,23,4 = 'awd',  12,3,4 = 'lcd'
  data = '1111'   -->   (5)   1,1,1,1   1,11,1   1,1,11   11,1,1   11,11
  data = '29876'  -->   (1)   only 2,9,8,7,6 = 'bihgf' is possible.
  data = '0xxxxx' -->   (0)   null because nothing match with '0' or '0x' in the decoding map.
  data = 'xxx30x' -->   (0)   null because nothing match with '30' in the decoding map.
  data = 'xx00xx' -->   (0)   null because nothing match with '0' or '00' in the decoding map.
  data = 'xxxx20' -->   (?)   ..t, ...t, ....t because '20' can be decoded 't'.
  data = 'xx20xx' -->   (?)   ..t.., ..t., .t.. or .t. are possible. 
*/

function decode(data) {
  let single = 0, double = 0;
  if (data.length < 1) return 1;
  if (data[0] === '0') return 0;
  if (data.length === 1) return (data != '0') ? 1 : 0;
  if (data.length === 2) {
    if (data === '00') return 0;
    if (data[0] === '0') return 1;
    if (data[1] === '0') return (+data > 26) ? 0 : 1;
    return (+data > 26) ? 1 : 2;
  } else {
    if (data[1] === '0') {
      if (+data.slice(0,2) > 26) {
        return 0;
      }
      double = decode(data.slice(2));
    } else {
      single = decode(data.slice(1));
      if (+data.slice(0,2) < 27) {
        double = decode(data.slice(2))
      }
    }
    return single + double;
  }
}

function decoding(data, k) {
  let single = 0, double = 0;
  if (k < 1) return 1;

  const start = data.length - k;
  if (data[start] === '0') return 0;
  if (k === 1) return (data[start] != '0') ? 1 : 0;

  const twoDigit = +(data[start]+data[start+1]);
  if (k === 2) {
    if (twoDigit === 0) return 0;
    if (data[start] === '0') return 1;
    if (data[start+1] === '0') return (twoDigit > 26) ? 0 : 1;
    return (twoDigit > 26) ? 1 : 2;
  } else {
    if (data[start+1] === '0') {
      if (twoDigit > 26) {
        return 0;
      }
      double = decoding(data, k-2);
    } else {
      single = decoding(data, k-1);
      if (twoDigit < 27) {
        double = decoding(data, k-2)
      }
    }
    return single + double;
  }
}

function dynamicDecode(data, k, dict) {
  let single = 0, double = 0;
  if (k < 1) return 1;

  const start = data.length - k;
  if (data[start] === '0') return 0;
  if (k === 1) return (data[start] != '0') ? 1 : 0;

  const twoDigit = +(data[start]+data[start+1]);
  if (k === 2) {
    if (twoDigit === 0) return 0;
    if (data[start] === '0') return 1;
    if (data[start+1] === '0') return (twoDigit > 26) ? 0 : 1;
    return (twoDigit > 26) ? 1 : 2;
  } else {
    if (data[start+1] === '0') {
      if (twoDigit > 26) {
        return 0;
      }
      if (!dict[k-2]) dict[k-2] = dynamicDecode(data, k-2, dict);
      double = dict[k-2];
    } else {
      if (!dict[k-1]) dict[k-1] = dynamicDecode(data, k-1, dict);
      single = dict[k-1];
      if (twoDigit < 27) {
        if (!dict[k-2]) dict[k-2] = dynamicDecode(data, k-2, dict)
        double = dict[k-2]
      }
    }
    return single + double;
  }
}

console.time('Time to initialize ');
data = makeData(150);
// data = '112011';
console.log('data:', data);
console.timeEnd('Time to initialize ');

console.time('Time for Nomal Recursion Programming ');
console.log(decode(data));
console.timeEnd('Time for Nomal Recursion Programming ');

console.time('Time for Indexed Recursion Programming ');
console.log(decoding(data, data.length));
console.timeEnd('Time for Indexed Recursion Programming ');

dict = {};
console.time('Time for Dynamic Recursion Programming ');
console.log(dynamicDecode(data, data.length, dict));
console.timeEnd('Time for Dynamic Recursion Programming ');

function makeData(max) {
  let data = '';
  for (let i=0; i<max; i++) {
    data += Math.floor(Math.random()*10) + 1;
  }
  return data;
}

//  upto 150 digits are possible using the nomal recursion programming.
//  upto 6000 digits are possible using the dynamic recursion programming.