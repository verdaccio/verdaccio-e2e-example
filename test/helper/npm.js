const { execFile } = require("child_process");

exports.runNmp = (argsOptions) => {
  return new Promise((resolve) => {
    const child = execFile(
      "npm",
      argsOptions,
      (error, stdout, stderr) => {
        if (error) {
          console.error("stderr", stderr);
          return reject(error);
        }
        resolve();
      }
    );
  });
};
