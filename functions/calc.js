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
};
