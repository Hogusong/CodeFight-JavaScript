/*
If you have a task that you need to complete on a regular basis, you can set it up in Asana as a recurring task. This allows you to schedule the task to repeat on specific days of the week every k weeks.

For instance, you could set up a recurring task that reminds you to call your sister on Tuesday and Friday every 3 weeks. You set up the first instance of the task for Tuesday, March 1. The next instance will fall on Friday, March 4. The third instance will fall 3 weeks later on Tuesday, March 22, the fourth instance will fall on Friday, March 25, the fifth instance will fall on Tuesday, April 12, and so on.

Given a firstDate that represents the day your recurring task becomes active, an array daysOfTheWeek that indicates which days of the week the task should occur on, and a number k that represents the interval between weeks on which the task occurs, return an array that contains the first n dates on which the task is scheduled.

In this task, you'll likely need to know the how long the months are and the names of the days of week, provided here:

Month lengths from January to December: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
During leap years February has 29 days.
Names of weekdays: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday".
January 1, 2015 was a Thursday.
Example

For firstDate = "01/01/2015", k = 2, daysOfTheWeek = ["Monday", "Thursday"], and n = 4, the output should be

recurringTask(firstDate, k, daysOfTheWeek, n) = 
    ["01/01/2015", "05/01/2015", "15/01/2015", "19/01/2015"]


firstDate falls on a Thursday. The first Monday after it is January 5, "05/01/2015". Since k = 2, the next two days for which the task is scheduled are Thursday, January 15, and Monday, January 19.
*/

function recurringTask(firstDate, k, daysOfTheWeek, n) {
  const DDate = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  };

  const DDay = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  function dmy2mdy(date) {
    return new Date(date.slice(3, 5) + '/' + date.slice(0, 2) + '/' + date.slice(6));
  }

  function mdy2dmy(date) {
    const dd = stringValue(date.getDate());
    const mm = stringValue(date.getMonth()+1);
    return dd + '/' + mm + '/' + date.getFullYear();
  }

  let keyDate = dmy2mdy(firstDate);
  let previous = keyDate;
  const strDay = DDay[keyDate.getDay()];
  const index = daysOfTheWeek.indexOf(strDay);
  const ofTheWeek = []
  for (let i=0; i<daysOfTheWeek.length; i++) {
    ofTheWeek.push(DDate[daysOfTheWeek[(index+i)%daysOfTheWeek.length]]);
  }
  let ans = [];
  while (ans.length < n) {
    for (let i = 0; i < ofTheWeek.length; i++) {
      if (ans.length < 1) {
        ans.push(mdy2dmy(keyDate));
      } else {
        if (i === 0) {
          keyDate = getNextDate(keyDate, k*7);
          ans.push(mdy2dmy(keyDate));
          previous = keyDate;
        } else {
          let gap = ofTheWeek[i] - ofTheWeek[i - 1];
          gap = gap < 0 ? gap + 7 : gap;
          const nextDate = getNextDate(previous, gap);
          ans.push(mdy2dmy(nextDate));
          previous = nextDate;
        }
      }
      if (ans.length === n) break;
    }
  }
  return ans;
}

function getNextDate(previous, gap) {
  let date = previous.getDate() + gap;
  let month = previous.getMonth() + 1;
  let year = previous.getFullYear();
  if (date <= dayOfMonth(month, year)) {
    return new Date(month + '/' + date + '/' + year);
  } else {
    return getRightDate(date, month, year);
  }
}

function getRightDate(date, month, year) {
  date = date - dayOfMonth(month, year) ;
  if (month < 12) {
    month ++;
  } else {
    month = 1;
    year ++;
  }
  if (date <= dayOfMonth(month, year)) {
    return new Date(month + '/' + date + '/' + year);
  } else {
    return getRightDate(date, month, year);
  }
}

function dayOfMonth(m, y) {
  const days31 = [1, 3, 5, 7, 8, 10, 12];
  if (m === 2) return isLeapYear(y) ? 29 : 28;
  return days31.indexOf(m) >= 0 ? 31 : 30;
}

function stringValue(n) {
  const str = '0' + n;
  return str.slice(str.length - 2);
}

function isLeapYear(year) {
  if (year % 4 > 0) return false;
  if (year % 100 === 0 && year % 400 > 0) return false;
  return true;
}

console.log(recurringTask("01/01/2015", 2, ["Monday", 
"Thursday"],4 ))
