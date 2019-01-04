const fs = require("fs");
const path = require("path");
var unoconv = require("unoconv");

// module.exports = {
//   loadHTML: async function() {
//     let config = {
//       src: "../external/asterics-docs/source"
//     };

//     await fs.readdirSync(config.src, (err, filenames) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(filenames);
//       return;
//     });
//   }
// };

// function loadHTML();

let config = {
  src: "../external/asterics-docs/source/asterics/Documentation"
};

let route = path.resolve(__dirname, config.src);
let files = fs.readdirSync(route);
// console.log(files);

files.forEach(element => {
  /* process doc files */
  if (element.match(/.*[.]doc$/)) {
    console.log(element);

    var listener = unoconv.listen({ port: 2002 });

    listener.stderr.on("data", function(data) {
      console.log("stderr: " + data.toString("utf8"));
    });

    let s = `${route}/${element}`;
    unoconv.convert(s, "html", { bin: "/usr/bin/unoconv", port: 2002 }, function(err, result) {
      console.log(result);
    });
  }
});
