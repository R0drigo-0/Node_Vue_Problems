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
const { register } = require("node:module");
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
  if (!Array.isArray(list) || list.length === 0) {
    return callback2(null, []);
  }

  let results = new Array(list.length);
  let count = 0;
  let errorOccurred = false;

  list.forEach((element, idx) => {
    f(element, (err, result) => {
      if (errorOccurred) {
        return;
      }

      if (err) {
        errorOccurred = true;
        return callback2(err, null);
      }

      results[idx] = result;
      count++;

      if (count === list.length) {
        callback2(null, results);
      }
    });
  });
}

function callback2(err, resultList) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Results:", resultList);
  }
}

function f(a, callback1) {
  fs.readFile(a, "utf8", callback1);
}
function callback1(err, result) {
  if (err) {
    console.error("Operation failed:", err);
  } else {
    console.log("Operation succeeded:", result);
  }
}

//asyncMap(['fileA.txt', 'fileB.txt'], f, callback2);

const o1 = {
  count: 0,
  notify: null,
  inc: function () {
    this.count++;
    if (this.notify) {
      this.notify(this.count);
    }
  },
};

//o1.count = 1; o1.notify = function() { console.log("notified") }; o1.inc()

//12extra the same above

//13
const Counter = function () {
  (this.count = 1),
    (this.notify = null),
    (this.setNotify = function (callback) {
      this.notify = callback;
    });
  this.inc = function () {
    this.count++;
    if (this.notify) {
      this.notify(this.count);
    }
  };
};

//const o2 = new Counter();
//o2.setNotify(function (a) {
//  console.log(a);
//});
//o2.inc();

//13extra
const CounterExtra = function () {
  let count = 1;
  let notify = null;
  function setNotify(callback) {
    notify = callback;
  }

  function inc() {
    count++;
    if (notify) {
      notify(count);
    }
  }

  return {
    inc,
    setNotify,
  };
};

//const o2extra = new CounterExtra();
//o2.setNotify(function (a) {
//  console.log(a);
//});
//o2.inc();

//14
class CounterClass {
  constructor() {
    this.count = 1;
    this.notify = null;
  }

  setNotify(callback) {
    this.notify = callback;
  }

  inc() {
    this.count++;
    if (this.notify) {
      this.notify(this.count);
    }
  }
}

class DecreasingCounter extends CounterClass {
  dec() {
    this.count--;
    if (this.notify) {
      this.notify(this.count);
    }
  }
}

//const dc = new DecreasingCounter();
//dc.setNotify(function (a) {
//  console.log("Decreasing Counter:", a);
//});
//dc.inc();
//dc.dec();
//dc.dec();

//15
const o3 = function () {
  let count = 1;
  let notify = null;

  function setNotify(callback) {
    notify = callback;
  }

  function inc() {
    count++;
    if (notify) {
      notify(count);
    }
  }

  return {
    inc,
    setNotify,
  };
};

//const O3 = new o3();
//O3.setNotify(function (a) {
//  console.log("Module pattern:", a);
//});
//O3.inc();

//16
future = { isDone: false, result: null };
const readIntoFuture = function (filename) {
  fs.promises
    .readFile(filename, "utf8")
    .then((data) => {
      future.isDone = true;
      future.result = data;
    })
    .catch((err) => {
      console.error("Error reading file:", err);
      future.isDone = true;
      future.result = null;
    });
};

//console.log(future)
//readIntoFuture("fileA.txt");
//console.log(future)
//setTimeout(() => {
//  console.log(future);
//}, 1000);

//17
function asyncToFuture(f) {
  return function (...args) {
    const future2 = { isDone: false, result: null };
    f(...args, (err, result) => {
      future2.isDone = true;
      future2.result = err ? null : result;
    });
    return future2;
  };
}

//const readIntoFuture2 = asyncToFuture(fs.readFile);
//let future2 = readIntoFuture2("fileA.txt", "utf8");
//console.log(future2);

//18
function asyncToEnhancedFuture(f) {
  return function (...args) {
    const enchancedFuture = {
      isDone: false,
      result: null,
      registerCallback: function (cb) {
        if (this.isDone) {
          cb(this);
        } else {
          this._cb = cb;
        }
      },
      _cb: null,
    };

    f(...args, (err, result) => {
      enchancedFuture.isDone = true;
      enchancedFuture.result = err ? null : result;
      if (enchancedFuture._cb) {
        enchancedFuture._cb(enchancedFuture);
      }
    });

    return enchancedFuture;
  };
}

//const utfReadFile = (f, c) => fs.readFile(f, "utf-8", c);
//const readIntoEnhancedFuture = asyncToEnhancedFuture(utfReadFile);
//enhancedFuture = readIntoEnhancedFuture("fileA.txt");
//enhancedFuture.registerCallback(function (ef) {
//  console.log(ef);
//});

//19
function when(F1) {
  return {
    do: function (F2) {
      F1(F2);
    },
  };
}

//F1 = function (callback) {
//  fs.readFile("fileA.txt", "utf-8", callback);
//};
//F2 = function (error, result) {
//  console.log(result);
//};
//when(F1).do(F2);

//20
function When(f1) {
  return {
    and: function (f2) {
      return {
        do: function (f3) {
          let err1 = undefined;
          let err2 = undefined;
          let res1 = undefined;
          let res2 = undefined;

          let done1 = false;
          let done2 = false;

          f1((err, res) => {
            err1 = err;
            res1 = res;
            done1 = true;
            if (done2) {
              f3(err1, err2, res1, res2);
            }
          });

          f2((err, res) => {
            err2 = err;
            res2 = res;
            done2 = true;
            if (done1) {
              f3(err1, err2, res1, res2);
            }
          });
        },
      };
    },
  };
}

//const g1 = function (callback) {
//  fs.readFile("fileA.txt", "utf-8", callback);
//};
//const g2 = function (callback) {
//  fs.readFile("fileB.txt", "utf-8", callback);
//};
//const g3 = function (err1, err2, res1, res2) {
//  console.log(res1, res2);
//};
//
//When(g1).and(g2).do(g3)

const composer = (f1, f2) => {
  return function (...args){
    const result1 = f1(...args);
    return f2(result1);
  }
};

const h1 = function (a) {
  return a + 1;
};
const h3 = composer(h1, h1);
console.log(h3(3))

const h4 = function (a) {
  return a * 3;
};
const h5 = composer(h3, h4);
console.log(h5(3))
