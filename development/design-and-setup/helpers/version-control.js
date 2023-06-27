require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GIT_API_PERSONAL_ACCESS_TOKEN,
});

getVersionControl = async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/contents", {
    owner: "terencen-cuelogic",
    repo: "react-router-role-authorization",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log(response);
  const { data } = response;
};

getVersionControl();
/*
const testFolder = "../../../";
const fs = require("fs");

list_repo_content = fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    console.log(file);
    fs.stat(file + "../../", function (error, files) {
      console.log(files);
      if (error) {
        //console.log(file, "Directory does not exist.");
      } else {
        // console.log(file, "Directory exists.");
      }
    });
    // if (fs.acc("./" + file)) {
    //   console.log("Its a directory: ", file);
    // } else {
    //   console.log("Its a file: ", file);
    // }
  });
  //   console.log(files);
  //   fs.readdir(files[0] + "/", (err, filess) => {
  //     console.log(filess);
  //   });
});
*/
