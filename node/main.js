// 1
const f1 = (a) => {
  console.log(a);
};

// 2
const f2 = (a) => {
  if (a > 0) {
    return 2 * a;
  } else {
    return -1;
  }
};

// 3
const f3 = (list) => {
  return list.map((x) => f2(x) + 23);
};

// 4
console.printaki = () => {
  console.log("aqui");
};

// 5
const f4 = (a, b) => {
  return a + b;
};

listA = [1, 2, 3, 4];
listB = listA.map((x) => f4(x, 23));

// 6
f5 = function (a, b, c) {
  c(b(a));
};

//f5(1, f2, function (r) {
//  console.log(r);
//});

// 7
console.printaki2 = (() => {
  let counter = 0;
  return () => {
    console.log(`aqui ${(counter % 3) + 1}`);
    counter++;
  };
})();

//8
const fs = require("node:fs");
f6 = function (list, final_callback) {
  let result = [];
  let count = 0;
  if (!Array.isArray(list) || list.length === 0) {
    final_callback(result);
    return;
  }

  list.forEach((element, idx) => {
    fs.readFile(element, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        result.push(null);
      } else {
        result.push(data);
        console.log(`File ${element} read successfully.`);
      }
      count++;
      if (count === list.length) {
        final_callback(result);
      }
    });
  });
};

//f6(['fileA.txt','fileB.txt'], function (result) { console.log(result) })

//9
f6Extra = function (list, final_callback) {
  let result = [];
  let count = 0;
  if (!Array.isArray(list) || list.length === 0) {
    final_callback(result);
    return;
  }

  list.forEach((element, idx) => {
    fs.readFile(element, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        result[idx] = null;
      } else {
        result[idx] = data;
        console.log(`File ${element} read successfully.`);
      }
      count++;
      if (count === list.length) {
        final_callback(result);
      }
    });
  });
};

//f6Extra(['fileA.txt','fileB.txt'], function (result) { console.log(result) })

//10
/*
Because the 
*/

//11
function asyncMap(list, f, callback2) {
  list.map((element, inx) => f(element))
}

function callback2(err, resultList) {...}
function f(a, callback1) {...}
function callback1(err, result) {...}
