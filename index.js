import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { url } from "inspector";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Enter your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const URL = answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", answers.URL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
