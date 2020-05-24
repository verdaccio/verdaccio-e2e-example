const { execFile } = require("child_process");

exports.runCli = (cliPath, argsOptions) => {
  return new Promise((resolve) => {
    const child = execFile(
      cliPath,
      argsOptions,
      (error, stdout, stderr) => {
        if (error) {
          console.error("stderr", stderr);
          return reject(error);
        }
        console.log("stdout", stdout);
        resolve(stdout);
      }
    );
  });
};
