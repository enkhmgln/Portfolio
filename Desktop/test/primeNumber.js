// var sum = 0;
// var limit = 4;

// for (var i = 1; i <= limit; i = i + 1) {
//   sum = sum + i;
//   console.log("i = " + i + " Ð±Ð°Ð¹Ñ…Ð°Ð´ sum = " + sum);
// }

// console.log("1-" + limit + " Ñ…Ò¯Ñ€Ñ‚ÑÐ»Ñ… Ñ‚Ð¾Ð¾Ð½Ñ‹ Ð½Ð¸Ð¹Ð»Ð±ÑÑ€ Ð±Ð¾Ð» " + sum);

// Ð‘Ð¾Ð´Ð»Ð¾Ð³Ð¾ â„–2

// var sum = 0;
// var limit = 1000;

// for (var i = 1; i <= limit; i = i + 1) {
//   if (i % 7 === 0) {
//     sum = sum + i;
//     console.log("i = " + i + " Ð±Ð°Ð¹Ñ…Ð°Ð´ sum = " + sum);
//   }
// }

// console.log(
//   "1-" +
//     limit +
//     " Ñ…Ò¯Ñ€Ñ‚ÑÐ»Ñ… Ñ‚Ð¾Ð¾Ð½ÑƒÑƒÐ´Ð°Ð°Ñ 7-Ð´ Ñ…ÑƒÐ²Ð°Ð°Ð³Ð´Ð´Ð°Ð³ Ñ‚Ð¾Ð¾Ð½ÑƒÑƒÐ´Ñ‹Ð½ Ð½Ð¸Ð¹Ð»Ð±ÑÑ€ Ð±Ð¾Ð» " +
//     sum
// );

//Ð‘Ð¾Ð´Ð»Ð¾Ð³Ð¾ â„–3
// for (var i = 2; i <= 10000; i++) {
//   if (anhniiTooMon(i) === true) console.log(i + " Ñ‚Ð¾Ð¾ Ð±Ð¾Ð» Ð°Ð½Ñ…Ð½Ñ‹ Ñ‚Ð¾Ð¾ Ð¼Ó©Ð½");
// }

// function anhniiTooMon(too) {
//   var anhniiTooMon = true;
//   for (var x = 2; x < too; x++) {
//     if (too % x === 0) {
//       anhniiTooMon = false;
//       break;
//     }
//   }

//   return anhniiTooMon;
// }

// Ð‘Ð¾Ð´Ð»Ð¾Ð³Ð¾ â„–4

var arr = [];

for (var i = 1; i <= 10; i++) {
  var too = Math.random() * 100;
  var floorToo = Math.floor(too);
  console.log(floorToo);
  arr.push(floorToo);
}

// console.log(arr);

var minToo = 100;
var minTooIndex = -1;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] < minToo) {
    minToo = arr[i];
    minTooIndex = i;
  }
}

console.log(
  "Ð¥Ð°Ð¼Ð³Ð¸Ð¹Ð½ Ð±Ð°Ð³Ð° ÑÐ»ÐµÐ¼ÐµÐ¼ÐµÐ½Ñ‚ Ð½ÑŒ " + minToo + ", Ñ‚ÑÑ€Ð½Ð¸Ð¹ Ð¸Ð½Ð´ÐµÐºÑ Ð½ÑŒ : " + minTooIndex
);

var maxToo = 0;
var maxTooIndex = -1;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > maxToo) {
    maxToo = arr[i];
    maxTooIndex = i;
  }
}

console.log(
  "Ð¥Ð°Ð¼Ð³Ð¸Ð¹Ð½ Ð¸Ñ… ÑÐ»ÐµÐ¼ÐµÐ¼ÐµÐ½Ñ‚ Ð½ÑŒ " + maxToo + ", Ñ‚ÑÑ€Ð½Ð¸Ð¹ Ð¸Ð½Ð´ÐµÐºÑ Ð½ÑŒ : " + maxTooIndex
);

var turHadgalsanUtga = arr[minTooIndex];
arr[minTooIndex] = arr[maxTooIndex];
arr[maxTooIndex] = turHadgalsanUtga;

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}