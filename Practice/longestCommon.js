/*
Given two sequences, find the length of longest subsequence present in both of them. 
Both the strings are of uppercase.

Input:
First line of the input contains no of test cases  T,the T test cases follow.
Each test case consist of 2 space separated integers A and B denoting the size of string str1 and str2 respectively
The next two lines contains the 2 string str1 and str2 .

Output:
For each test case print the length of longest  common subsequence of the two strings .

Constraints:
1<=T<=200
1<=size(str1),size(str2)<=100

Example:
Input:
2
6 6
ABCDGH
AEDFHR
3 2
ABC
AC

Output:
3
2

Explanation
LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.

LCS of "ABC" and "AC" is "AC" of length 2
 */

firstStr = 'AHADBCDGH', 
secondStr = 'AEDFHRBCD'

function findLongestCommon(str1, str2) {
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }
  let answer = '';
  for (let i=0; i<str1.length; i++) {
    const result = doRecFind(str1, str2, i, 0, '');
    if (answer.length < result.length) {
      answer = result;
    }
    if (str1.length - i <= answer.length) {
      break;
    }
  }
  return answer;
}

function doRecFind(str1, str2, index, searchFrom, ans) {
  if (str1.length <= index || str2.length <= searchFrom) return ans;

  const indexFound = str2.indexOf(str1[index], searchFrom);
  if (indexFound >= searchFrom) {
    ans += str1[index];
    searchFrom = indexFound + 1;
  }
  return doRecFind(str1, str2, index+1, searchFrom, ans);
}

console.log(findLongestCommon('ABCDGH', 'AEDFHR'))
console.log(findLongestCommon(firstStr, secondStr));
