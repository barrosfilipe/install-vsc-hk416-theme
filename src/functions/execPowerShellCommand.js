import { execa } from "execa";

function execPowerShellCommand({ command, successMessage, failedMessage }) {
  return new Promise(async (resolve, reject) => {
    try {
      await execa(command, {
        shell: "powershell.exe",
      });
      resolve(successMessage);
    } catch ({ failed }) {
      failed && reject(failedMessage);
    }
  });
}

export { execPowerShellCommand };
