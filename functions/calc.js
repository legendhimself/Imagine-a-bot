module.exports = {
  multiply: (...x) => {
    let args = x[0];
    let ans = 1;
    for (let i = 0; i < args.length; ) {
      try {
        if (args[i].split("").includes(".")) {
          var arg = parseFloat(args[i]);
        } else {
          arg = parseInt(args[i]);
        }
      } catch (error) {
        return "Please Provide valid Numbers";
      }
      ans = ans * arg;
      i++;
      if (i === args.length) {
        if (ans.toString() == "NaN") {
          return "Please Provide valid Numbers";
        } else {
          return ans;
        }
      }
    }
  },
  add: (...x) => {
    let args = x[0];
    let ans = 0;
    for (let i = 0; i < args.length; ) {
      try {
        if (args[i].split("").includes(".")) {
          var arg = parseFloat(args[i]);
        } else {
          arg = parseInt(args[i]);
        }
      } catch (error) {
        return "Please Provide valid Numbers";
      }
      ans = ans + arg;
      i++;
      if (i === args.length) {
        if (ans.toString() == "NaN") {
          return "Please Provide valid Numbers";
        } else {
          return ans;
        }
      }
    }
  },
  sub: (...x) => {
    //...x [[100, 30, 20]]
    let args = x[0]; // [100, 30, 20]
    let ans = null;
    let ct = 0;
    for (let i = 0; i < args.length; ) {
      if (i == 0) {
        let arg = args[i]; // 100
        let num2 = args[i + 1]; //30
        ans = arg - num2;
      }
      if (args.length > 2) {
        if (i == ct) {
          ct++;
          let arg = args[i + 2];
          if (arg) {
            ans = ans - arg;
          }
        }
      }
      i++;
    }
    return ans;
  },
};
