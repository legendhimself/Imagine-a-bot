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
        if (isNaN(ans)) {
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
        if (isNaN(ans)) {
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
        try {
          if (args[i].split("").includes(".")) {
            var arg = parseFloat(args[i]); // 100
            var num2 = parseFloat(args[i + 1]);
          } else {
            arg = parseInt(args[i]); // 100
            num2 = parseInt(args[i + 1]); //30
          }
        } catch (error) {
          return "Please Provide valid Numbers";
        }
        ans = arg - num2; //subtract over here
      }
      if (args.length > 2) {
        if (i == ct) {
          ct++;
          try {
            if (args[i].split("").includes(".")) {
              var arg1 = parseFloat(args[i + 2]);
            } else {
              arg1 = parseInt(args[i + 2]);
            }
          } catch (error) {
            return "Please Provide valid Numbers";
          }
          ans = ans - arg1;
        }
      }
      i++;
      if (i === args.length) {
        if (isNaN(ans)) {
          return "Please Provide valid Numbers";
        } else {
          return ans;
        }
      }
    }
  },
};
