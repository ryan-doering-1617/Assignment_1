const figlet = require("figlet");

const inputString = process.argv.slice(2).join(" ");    
console.log("Input string:", inputString);
figlet(inputString, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });