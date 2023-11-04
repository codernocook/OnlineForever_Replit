module.exports = function() {
  const express = require("express");
  const _fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  const { exec } = require("child_process");

  const app = express();

  app.listen(3000, () => { })
  let counter = false;
  _fetch(process.env["host_url_jsForever"] || "localhost")

  app.use((req, res, next) => {
    res.status(200).json({
      "online": true
    })

    setTimeout(() => {
      _fetch(process.env["host_url_jsForever"] || "localhost")
    }, 60000);

    req.on("close", function() {
      // the user fetch the page
      if (counter === true) return;
      counter = true;
      setTimeout(() => {
        exec("kill 1", (error, stdout, stderr) => {
          if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          console.log(`stdout: ${stdout}`);
        })
      }, 1800000)
    })
  })
}
